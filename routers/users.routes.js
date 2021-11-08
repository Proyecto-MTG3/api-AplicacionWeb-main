const router = require('express').Router();
const {users_controller} = require('../controllers');
const {users_middleware} = require('../middlewares');


router.post('/add',users_middleware.verifyTypes, users_middleware.verifyidUsers, users_controller.addUsers);
router.get('/list',users_controller.getAllUsers); 
router.put('/update',users_middleware.verifyTypes, users_controller.updateUsers); 
router.delete('/delete/:id',users_controller.deleteUsers);


module.exports = router;