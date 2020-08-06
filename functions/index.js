const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const stripe = require("stripe")(functions.config().stripe.secret);

exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user and add custom claim to that user (admin)
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`,
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: data.currency,
    payment_method_types: ["card"],
    metadata: { integration_check: "accept_a_payment" },
  });
  return paymentIntent;
});
