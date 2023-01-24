import mongoose from 'mongoose'

const Admin = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default mongoose.model.admin || mongoose.model('admin', Admin)
