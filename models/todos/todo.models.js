import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    // we not created another field for user. We take value of user from model
    // we give two keys: (1)type and (2)reference
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ] //Array of sub-todos
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)