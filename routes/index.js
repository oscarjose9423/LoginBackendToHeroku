const router = require('express').Router();
const apiRouterUser = require('./api/usuarios')

router.use('/auth', apiRouterUser);

module.exports = router;

