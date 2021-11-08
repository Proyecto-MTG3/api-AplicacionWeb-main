const{product_model} = require('../models');
const joi = require('@hapi/joi');
const { object } = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const product_joi = joi.object({
        _id: joi.optional(),
        idProduct: joi.number().required(),
        description: joi.string().required(),
        unit_cost: joi.number().required(),
        state: joi.boolean().optional()
    });

    //vamos hacer las validaciones
    const{error} = product_joi.validate(req.body)
    if(error) return res.status(400).json({error:true, mensaje:error.details[0].message})
    next();
}
verifyidProduct = (req, res, next) => {
    product_model.findOne({idProduct:req.body.idProduct}).exec((error, product) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        if(product) return res.status(400).json({error:true, mensaje:product.description + " esta registrado con el id producto " + product.idProduct});
        next ();
    });
}

module.exports = Object.freeze ({
    verifyTypes,
    verifyidProduct
});