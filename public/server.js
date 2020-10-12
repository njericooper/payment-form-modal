const stripe = require('stripe')('sk_test_51HW46JLZvSV2ptkoJnuBKJ2uGdvzSGDKt0hZjIMr0WiFUsSL6WL6M0VtSIQq1cQ90mEPQVRWydjnF2H2elqyEfmT00F4OxPcK4');
const express = require('express');
const app = express();
app.use(express.static('.'));
const YOUR_DOMAIN = 'http://localhost:4242';
app.post('/create-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });
  res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'));