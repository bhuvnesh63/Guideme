
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },

  // phoneNumber: {
  //   type: Number,
  // },
  Items: [
    {
      itemName: {
        type: String,

      },
      material: {
        type: String,

      },
      categoryName: {
        type: String,

      },
      quantity: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
