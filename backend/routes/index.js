import teachersRoute from './teachersRoute.js'
import express from 'express'
const router = express.Router()
router.use('/', teachersRoute)

export default router
