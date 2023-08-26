// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51NcuFEGCn9Upn7WMgjyVotXKDo2gNM0v7mQ55AH6cRwrctNWM0C6Tcqm6z0BT9IG3gzbbP6hdlhkWlDrhgeDxHeI00oUO84DkR');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'usd',
  payment_method_types: ['card'],
});
const clientSecret = paymentIntent.client_secret
// Pass the client secret to the client