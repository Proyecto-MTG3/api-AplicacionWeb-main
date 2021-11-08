const{users_model} = require('../models');
const joi = require('@hapi/joi');


//verificcamos que el usuario no tenga el mismo Id
verifyTypes = (req, res, next) => {

    
    const users_joi = joi.object({                     //se crea la estructura que debe cumplir los datos que son 
                                                       //enviados desde el frontend 
        _id:     joi.optional(),
        idUsers: joi.number().required(),
        nombre:  joi.string().required(),
        apellido:joi.string().required(),
        email:   joi.string().required(),
        password:joi.string().required(),
        rol:     joi.string().required(),
        state:   joi.string().required()

    });
    //vamos hacer las validaciones
    const{error} = users_joi.validate(req.body)
    if(error) return res.status(400).json({error:true, mensaje:error.details[0].message})
    next ();
}

verifyidUsers = (req, res, next) => {
    users_model.findOne({idUsers:req.body.idUsers}).exec((error, users) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        if(users) return res.status(400).json({error:true, mensaje: users.nombre + "se encuentra registrado identificado con el numero " + users.idUsers});
        next ();
    });
}




module.exports = Object.freeze ({
    verifyTypes,
    verifyidUsers
});