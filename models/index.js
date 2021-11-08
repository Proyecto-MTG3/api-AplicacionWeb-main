//importamos todos los archivos de product.models que vamos a exportar
//luego los exportamos
const product_model = require('./product.model');
const sales_model = require('./sales.model');
const users_model = require('./users.model');


module.exports = Object.freeze({
    product_model,
    sales_model,
    users_model

});




