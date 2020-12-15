const router = require('express').Router();
const apiRouterUser = require('./api/usuarios')

router.use('/usuario', apiRouterUser);

module.exports = router;

