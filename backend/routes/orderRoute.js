const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/api/v1/send-details", (req, res) => {
  const { name, email, cartItems } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS

      }
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "New Item Detail",
      html: '<table></table>'
}

  } catch (error) {

}

})
module.exports = router

// const {
//   getAllOrder,
//   createOrder,
//   updateOrder,
//   deleteOrder,
//   getOrderDetail,
//   updateOrderStatus
// } = require("../controllers/orderController");

// const router = express.Router();


// // Routes
// router.route("/orders").get(getAllOrder);
// router.route("/order/new").post(createOrder);
// router.route("/order/status/:id").put(updateOrderStatus);
// router.route("/order/:id").put(updateOrder).delete(deleteOrder).get(getOrderDetail);


// module.exports = router;
