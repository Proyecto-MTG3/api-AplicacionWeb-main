const{sales_model} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) =>{
    const sales_joi = joi.object({
    _id:         joi.optional(),
    idSales:     joi.number().required(),
    fecha:       joi.date().required(),
    idProduct:   joi.number().required(),
    description: joi.string().required(),
    cantidad:    joi.number().required(),
    unit_cost:   joi.number().required(),
    total_cost:  joi.number().required(),
    idUsers:     joi.number().required(),
    nombreCliente: joi.string().required(),
    nombreVendedor:joi.string().required(),
    state:         joi.string().required()
    });

    //vamos hacer las validaciones
    const{error} = sales_joi.validate(req.body)
    if(error) return res.status(400).json({error:true, mensaje:error.details[0].message})
    next();
}

verifyidSales = (req, res, next) => {
    sales_model.findOne({idSales:req.body.idSales}).exec((error, sales) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        if(sales) return res.status(400).json({error:true, mensaje:"factura " +  sales.idSales + " esta registrada "});
        next ();   
    });
}   

module.exports = Object.freeze ({
    verifyTypes,
    verifyidSales
});   
