const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51MBxftSCXO0fQKAq3kj2mmPtBr1zMuiHRj2YQfOoSI27wA5cJVOzCT1yIQA2zqJfd6FazZxO0HEz9vXR2xxC7bWh002NJN8Bjt"
);
router.post("/payment", async (req, res) => {
  await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
