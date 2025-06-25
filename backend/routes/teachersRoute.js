import express from 'express'
import teachersRoute from '../features/management/teacher/teacher.routes.js'
const router = express.Router()
router.use('/manage/teachers', teachersRoute)

export default router