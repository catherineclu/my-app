const stripe = require('stripe')('sk_test_51NcuFEGCn9Upn7WMgjyVotXKDo2gNM0v7mQ55AH6cRwrctNWM0C6Tcqm6z0BT9IG3gzbbP6hdlhkWlDrhgeDxHeI00oUO84DkR');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51NcuFEGCn9Upn7WMRkokFnh1gXtJigvFeeRqUwwmSDWmXGDq4tzsbdveQb5jOnauAFi4F7hwoHvSDjQhyPOxhUdw00d3EqDDL6'
  });
});