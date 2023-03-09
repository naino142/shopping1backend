// const express = require('express');
// const cors = require("cors");
// const expressLayouts = require('express-ejs-layouts');
// var bodyParser = require('body-parser');
// const paymentController = require("./controllers/paymentController")

// const app = express()
// app.use(cors());
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

// app.post('/orders', paymentController.orders)
// app.post('/verify', paymentController.verify)


// app.listen(3001, () => {
//     console.log('Shopping backend running......')
// });


const app = require('express')();
// const {Parse}= require("jason2csv")
const path = require("path");
const shortid = require("shortid");
const cors = require("cors");
const Razorpay = require("razorpay");

// const jsons2csvParser = new Parse ();
// const csv = jsons2csvParser.parse(information);

// app.get('/get-csv' ,)


razorpay = new Razorpay({
    key_id: 'rzp_test_EgYffPiOKSzeR0',
    key_secret:'bLuKCVA4sKe8jGENuZwismeq'
});

app.use(cors());

// app.get("/logo.png", (req,res) => {
//     res.sendFile(path.join(_dirname, "logo.png"));
// });


app.post('/razorpay', async (req, res) => {
    const payment_capture = 1;
    const amount = 499*82;
    const currency = "INR";

    const options = {
        amount: amount * 100,
        currency: currency,
        receipt: shortid.generate(),
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.json({
            id: response.id,
            currency: res.currency,
            amount: res.amount,
        });
    } catch (eror) {
        console.log(error);
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});