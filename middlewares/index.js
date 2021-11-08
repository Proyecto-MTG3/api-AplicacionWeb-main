const product_middleware = require('./product.middleware');
const sales_middleware = require('./sales.middleware');
const users_middleware = require('./users.middleware')


module.exports = Object.freeze({
    product_middleware,
    sales_middleware,
    users_middleware
})