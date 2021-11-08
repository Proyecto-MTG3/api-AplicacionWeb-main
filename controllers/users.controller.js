//importamos el modelo para la BD
const{users_model} = require('../models')

//funcion que retornara el listado de usarios de la BD
getAllUsers = (req, res)=> {
    users_model.find().exec((error, users) => {
        if(error)return res.status(500).json({error: true, mensaje: error});

        res.json({users});
    });
}

//Funcion que permite ingresar un nuevo usuario al listado de usuarios de la BD
addUsers = (req, res) => {
    const users_new = new users_model(req.body);
    users_new.save((error, users) => {
        if(error) return res.status(500).json({error: true, mensaje:error});
        res.json({mensaje:req.body.nombre + " agregado satisfactoriamente"})
    })
}

deleteUsers = async (req, res) => {
    const users_delete = await users_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(users_delete) return  res.json({mensaje: users_delete.nombre + " eliminado correctamente"})
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch (error){
        return res.status(500).json({error: true, mensaje: error})
    }
}

updateUsers = async (req, res) =>{
    try{
        const users_update = await users_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify:false});
        if (users_update) return res.json({mensaje: "Usuario actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
}

module.exports =Object.freeze({
    getAllUsers,
    addUsers,
    deleteUsers,
    updateUsers
})