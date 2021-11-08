//importamos el modelo para la BD
const{sales_model} = require('../models')

//funcion que retornara el listado de prod de la BD
getAllSales = (req, res)=> {
    sales_model.find().exec((error, sales) => {
        if(error)return res.status(500).json({error: true, mensaje: error});

        res.json({sales});
    });
}

addSales = (req, res) => {
    const sales_new = new sales_model(req.body);
    sales_new.save((error, sales) => {
        if(error) return res.status(500).json({error: true, mensaje:error});
        res.json({mensaje:"Factura " +req.body.idSales + " agregado satisfactoriamente"})
    })
}

deleteSales = async (req, res) => {
    const sales_delete = await sales_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(sales_delete) return  res.json({mensaje:"factura "+ sales_delete.idSales + " eliminada correctamente"})
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch (error){
        return res.status(500).json({error: true, mensaje: error})
    }
}

updateSales = async (req, res) =>{
    try{
        const sales_update = await sales_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify:false});
        if (sales_update) return res.json({mensaje: "Registro actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({eroor: true, mensaje: error});
    }
}

module.exports =Object.freeze({
    getAllSales,
    addSales,
    deleteSales,
    updateSales
})