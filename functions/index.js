const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51KqxrBDkf3mX4QD03ssyYM3NCZ5NXi1EHvHjNSe0vH6FltxI6MKg6dmPUuFYzxMgzJHpXDvA8E4A7YLfgnxu16M200UuRkAI7v");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received for Amount >>> ", total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "EUR",
    });

    // OK -- created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/prenzlauer-fad3c/us-central1/api
