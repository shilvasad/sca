// Teacher model schema
import mongoose from 'mongoose'

const teacherSchema = new mongoose.Schema({
    name:{
        type:  String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        required: true,
        default: 'teacher',
        enum: ['teacher', 'admin']
    },
})

const Teacher = mongoose.model('Teacher', teacherSchema)
export default Teacher