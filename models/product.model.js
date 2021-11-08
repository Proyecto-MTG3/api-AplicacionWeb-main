//llamamos e importamos mongoose
const mongoose = require('mongoose');
// describimos el modelo producto y lo exportamos
const product_schema = new mongoose.Schema ({
    
    idProduct: {
        type: Number,
        required: true,
        min: 1
    },
    description:{
        type: String,
        required: true,
        min: 1       
    },
    unit_cost:{
        type: Number,
        required: true,
    },
    state:{
        type: Boolean,
        default:true
    }
});
module.exports = mongoose.model('product',product_schema);
