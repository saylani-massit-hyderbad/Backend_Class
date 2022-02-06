const exp = require('express')
const router = exp.Router();
 

router.use('/auth',require('./auth_Router'))

router.use('/todo',require('./TODO_ROUTER'))

module.exports = router;