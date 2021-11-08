const mongoose = require ('mongoose');

const sales_schema = new mongoose.Schema ({

    idSales: {
        type: String,
        required: true,
        min: 1
    },    
    fecha:{
        type: Date,
        required:true
    },
    idProduct: {
        type: String,
        required: true,
        min: 1
    },
    description:{
        type: String,
        required: true,
        min: 1       
    },        
    cantidad:{
        type: Number,
        required :true,
        min: 1
    },
    unit_cost:{
        type: Number,
        required: true,
    },
    total_cost: {
        type: Number,
        required: true
    },
     idUsers: {
        type: Number,
        required: true,
        min: 1
    },
    nombreCliente: {
        type: String,
        required: true,
        min: 1
    },
    nombreVendedor: {
        type: String,
        required: true,
        min: 1
    },         
    state:{
        type: String,
        required : true
    },    

});

module.exports = mongoose.model('sales',sales_schema);