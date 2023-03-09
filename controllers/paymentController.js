// var crypto = require("crypto");
// const res = require("express/lib/response")
// const Razorpay = require('razorpay');
// const KEY_ID = 'rzp_test_EgYffPiOKSzeR0'
// const KEY_SECRET = 'bLuKCVA4sKe8jGENuZwismeq'



// module.exports.orders = (req,res) => {
//     let instance = new Razorpay({key_id: KEY_ID, key_secret: KEY_SECRET });

//     var options = {
//         amount: req.body.amount *100,//6000*100,
//         currency: 'INR',
//     };
//     instance.orders.create(options, function (err, order) {
//         if (err) {
//             return res.send({ code: 500, message : 'server Err.'})
//         } 
//         return res.send({ code: 200, message : 'order created' , data: order})        
//     });
// }


// module.exports.verify = (req,res) => {

//         let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
       
         
//          var expectedSignature = crypto.createHmac('sha256',KEY_SECRET)
//                                          .update(body.toString())
//                                          .digest('hex');
//          if(expectedSignature === req.body.response.razorpay_signature){
//              res.send({code: 200, message : 'Sign Valid'});
//          }else {
//             res.send({code: 500, message : 'Sign Invalid'});
//          }
// }
