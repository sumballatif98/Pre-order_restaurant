const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    Customerid:{
        type: Number,
        required: true
    },
    ContactNo:{
        type: Number,
        required: true
    },
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
    },
    OrderID:{
            type: mongoose.Types.ObjectId,
            required: true   
        }
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer; 