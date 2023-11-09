const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(bodyParser.json());

const SECRET_KEY = "sk_test_40ea1cb5c00a40f2e2ebd3381509204ba9f51d80";

app.post("/startTransaction", async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: email,
        amount: amount,
        callback_url:
          "https://e1x.nueoffshore.com/api/courses/live/live-courses/all",
      },
      {
        headers: {
          Authorization: `Bearer ${SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = response.data;
    res.json({ authorizationUrl: data.authorization_url });
  } catch (error) {
    res.status(400).json({ error: "Transaction failed to initialize" });
  }
});

app.get("/plans", async (req, res) => {
  let fetchPlansResponse = await SECRET_KEY.plan.list({});

  if (fetchPlansResponse.status === false) {
    console.log("Error fetching plans: ", fetchPlansResponse.message);
    return res
      .status(400)
      .send(`Error fetching subscriptions: ${fetchPlansResponse.message}`);
  }

  return res.status(200).send(fetchPlansResponse.data);
});

app.get("/subscription", async (req, res) => {
  try {
    let { customer } = req.query;

    if (!customer) {
      throw Error("Please include a valid customer ID");
    }

    let fetchSubscriptionsResponse = await SECRET_KEY.subscription.list({
      customer,
    });

    if (fetchSubscriptionsResponse.status === false) {
      console.log(
        "Error fetching subscriptions: ",
        fetchSubscriptionsResponse.message
      );
      return res
        .status(400)
        .send(
          `Error fetching subscriptions: ${fetchSubscriptionsResponse.message}`
        );
    }

    let subscriptions = fetchSubscriptionsResponse.data.filter(
      (subscription) =>
        subscription.status === "active" ||
        subscription.status === "non-renewing"
    );

    return res.status(200).send(subscriptions);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

app.post("/initialize-transaction-with-plan", async (req, res) => {
  try {
    let { email, amount, plan } = req.body;

    if (!email || !amount || !plan) {
      throw Error(
        "Please provide a valid customer email, amount to charge, and plan code"
      );
    }

    let initializeTransactionResponse = await SECRET_KEY.transaction.initialize(
      {
        email,
        amount,
        plan,
        channels: ["card"], // limiting the checkout to show card, as it's the only channel that subscriptions are currently available through
        callback_url: `${process.env.SERVER_URL}/account.html`,
      }
    );

    if (initializeTransactionResponse.status === false) {
      return console.log(
        "Error initializing transaction: ",
        initializeTransactionResponse.message
      );
    }
    let transaction = initializeTransactionResponse.data;
    return res.status(200).send(transaction);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.post("/create-subscription", async (req, res) => {
  try {
    let { customer, plan, authorization, start_date } = req.body;

    if (!customer || !plan) {
      throw Error("Please provide a valid customer code and plan ID");
    }

    let createSubscriptionResponse = await SECRET_KEY.subscription.create({
      customer,
      plan,
      authorization,
      start_date,
    });

    if (createSubscriptionResponse.status === false) {
      return console.log(
        "Error creating subscription: ",
        createSubscriptionResponse.message
      );
    }
    let subscription = createSubscriptionResponse.data;
    return res.status(200).send(subscription);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.post("/cancel-subscription", async (req, res) => {
  try {
    let { code, token } = req.body;

    if (!code || !token) {
      throw Error(
        "Please provide a valid customer code and subscription token"
      );
    }

    let disableSubscriptionResponse = await SECRET_KEY.subscription.disable({
      code,
      token,
    });

    return res.send("Subscription successfully disabled");
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.get("/update-payment-method", async (req, res) => {
  try {
    const { subscription_code } = req.query;
    const manageSubscriptionLinkResponse =
      await SECRET_KEY.subscription.manageLink({
        code: subscription_code,
      });
    if (manageSubscriptionLinkResponse.status === false) {
      console.log(manageSubscriptionLinkResponse.message);
    }

    let manageSubscriptionLink = manageSubscriptionLinkResponse.data.link;
    return res.redirect(manageSubscriptionLink);
  } catch (error) {
    console.log(error);
  }
});

app.post("/create-customer", async (req, res) => {
  try {
    let { email } = req.body;

    if (!email) {
      throw Error("Please include a valid email address");
    }

    let createCustomerResponse = await SECRET_KEY.customer.create({
      email,
    });

    if (createCustomerResponse.status === false) {
      console.log("Error creating customer: ", createCustomerResponse.message);
      return res
        .status(400)
        .send(`Error creating customer: ${createCustomerResponse.message}`);
    }
    let customer = createCustomerResponse.data;

    // This is where you would save your customer to your DB. Here, we're mocking that by just storing the customer_code in a cookie
    res.cookie("customer", customer.customer_code);
    return res.status(200).send(customer);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

// Handle subscription events sent by Paystack
app.post("/webhook", async (req, res) => {
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (hash == req.headers["x-paystack-signature"]) {
    const webhook = req.body;
    res.status(200).send("Webhook received");

    switch (webhook.event) {
      case "subscription.create": // Sent when a subscription is created successfully
      case "charge.success": // Sent when a subscription payment is made successfully
      case "invoice.create": // Sent when an invoice is created to capture an upcoming subscription charge. Should happen 2-3 days before the charge happens
      case "invoice.payment_failed": // Sent when a subscription payment fails
      case "subscription.not_renew": // Sent when a subscription is canceled to indicate that it won't be charged on the next payment date
      case "subscription.disable": // Sent when a canceled subscription reaches the end of the subscription period
      case "subscription.expiring_cards": // Sent at the beginning of each month with info on what cards are expiring that month
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
