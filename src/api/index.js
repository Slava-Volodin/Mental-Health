export default async function sendToTg(req, res) {
  if (req.method === 'POST') {
    try {
      const chatId = '383265817';
      const key = '5852135537:AAFYo42e_v1dmPjyiBL0mNpy8bk8SghqjAs';
      const messageTg = `MentalHealth_Name: ${req.body.name}
          %0AMentalHealth_Email: ${req.body.email}
          %0AMentalHealth_Phone: ${req.body.phone}
          `;
      const url = `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chatId}&text=${messageTg}&parse_mode=HTML`;

      const res = await fetch(url);
      return res;
    } catch (err) {
      res.status(401).json(err);
    }
  }
}
