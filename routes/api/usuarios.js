const router = require('express').Router();
// en llave por si se van a llamar varios modelos
const models  = require('../../models');
const brcrypt = require('bcryptjs');
const userController = require('../../controllers/UserController.js')

module.exports = router;

// esto pudo haber quedado en los controladores// -> ya esta en controladores
// router.get('/list', async(req, res) =>{
//     const user = await models.Usuario.findAll();
//     res.status(200).json(user)
// });

// esto pudo haber quedado en los controladores// -> ya esta en controladores
//api/user/register
// router.post('/register', async(req, res) =>{
//     req.body.password =  brcrypt.hashSync(req.body.password, 10);
//     const user = await models.Usuario.create(req.body);
//     res.status(200).json(user);
// })

router.get('/list', userController.list)
router.post('/register', userController.register)

router.post('/signin', userController.signin)

router.put('/update', userController.update)