const { Router } = require('express')
const router = Router()

const todoRouter = require('./todoRouter')

router.use('/todos', todoRouter);

module.exports = router