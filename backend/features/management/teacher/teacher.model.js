// Teacher model schema
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email."],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please add a valid email address."],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number."],
      trim: true,
      unique: true,
      match: [/^[0-9]{11}$/, "Please add a valid phone number."],
    },
    password: {
      type: String,
      required: [true, "Please add a password."],
      trim: true,
      minlength: [6, "Password must be at least 6 characters."],
    },
    role: {
      type: String,
      required: [true, "Please add a role."],
      default: "teacher",
      enum: {
        values: ["teacher", "admin"],
        message:
          "{VALUE} is not a valid role. Valid roles are teacher or admin.",
      },
    },
  },
  {timestamps: true }
);

// Hash password before saving
teacherSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
teacherSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Teacher = mongoose.model.Teacher || mongoose.model("Teacher", teacherSchema);
export default Teacher;
