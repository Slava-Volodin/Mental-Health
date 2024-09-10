import { useCallback, useEffect, useState } from 'react';
import mapValues from 'lodash/mapValues';
import sortBy from 'lodash/sortBy';

const gridBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const sortedBreakpoints = sortBy(
  Object.entries(gridBreakpoints),
  ([_, width]) => width,
);

const breakpointsMedia = sortedBreakpoints.reduce(
  (acc, [key, width], index) => {
    const nextBreakpoint = sortedBreakpoints[index + 1];
    const mediaQuery = `(min-width: ${width}px)${
      nextBreakpoint ? ` and (max-width: ${nextBreakpoint[1] - 0.02}px)` : ''
    }`;

    return {
      ...acc,
      [key]: mediaQuery,
    };
  },
  {},
);

export const getBreakpointName = () => {
  const [breakpointName] = Object.entries(breakpointsMedia).find(
    ([, query]) => window.matchMedia(query).matches,
  ) || ['md'];
  return breakpointName;
};

export const useBreakpoints = () => {
  const [currentBreakpoint, setActiveBreakpoint] = useState('xs');
  const [devices, setDevices] = useState({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  });

  const checkActiveMedia = useCallback(() => {
    const breakpointName = getBreakpointName();

    const isMobile = ['xs', 'sm'].includes(breakpointName);
    const isTablet = ['md', 'lg'].includes(breakpointName);
    const isDesktop = !isMobile && !isTablet;

    setDevices({
      isMobile,
      isTablet,
      isDesktop,
    });

    setActiveBreakpoint(breakpointName);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    checkActiveMedia();

    const mediaQueryWatchers = mapValues(breakpointsMedia, (mediaQuery) => {
      const watchMedia = window.matchMedia(mediaQuery);

      // add listener
      watchMedia.addEventListener('change', checkActiveMedia);

      return watchMedia;
    });

    return () => {
      if (mediaQueryWatchers) {
        Object.values(mediaQueryWatchers).forEach((watchQuery) => {
          watchQuery.removeEventListener('change', checkActiveMedia);
        });
      }
    };
  }, [checkActiveMedia]);

  return {
    current: currentBreakpoint,
    isMobile: devices.isMobile,
    isTablet: devices.isTablet,
    isDesktop: devices.isDesktop,
  };
};
