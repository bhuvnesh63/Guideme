const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    MaterialType: {
        type: String,
    },
   

});

module.exports = mongoose.model("Material",ModelSchema);