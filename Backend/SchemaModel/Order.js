const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    Orderid:{
        type: Number,
        required: true
    },

    Date: {
        type: String,
        required: true
    },
    
    Type:{
        enum:["sitting","takeaway"],
    },

    // Status:{
    //     enum:["pending","active","completed"],
    // },

    Payment:{
        BillId:{
            type: Number,
            required: true
        },
        TotalBill:{
            type: Number,
            required: true
        },
        // Status:{
        //     enum:["Pending","Paid"],
        //},
        Method:{
            enum:["Credit","Debit"],
        }
    },

    OrderedItems:[{
        ItemId:{
            type: mongoose.Types.ObjectId,
            required: true
        },
        Quantity:{
            type: Number,
            required: true
        }
    }],

    _CustomerID:{
        type: mongoose.Types.ObjectId,
        required: true   
    }, 
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order; 