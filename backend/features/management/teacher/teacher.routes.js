/*
- Add a new teacher
- Get all teachers
- Get a teacher by ID
- Update a teacher by ID
- Delete a teacher by ID

*/ 

import express from 'express'

const router = express.Router()

// Testing route
router.get('/test',(req, res)=>{
    res.send('Teachers Management Page.')
})


export default router