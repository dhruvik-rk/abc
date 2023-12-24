import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestams: true }
);

export const User = mongoose.model('User', userSchema);
