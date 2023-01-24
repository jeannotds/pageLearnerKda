import mongoose from 'mongoose'

const Dev = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  sexe: {
    type: String,
    required: true,
  },
  cohorte: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  entreprise: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
    max: 10,
  },
  profession: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})
export default mongoose.model('dev', Dev) || mongoose.model.dev
