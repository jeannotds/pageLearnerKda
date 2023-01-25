import bcrypt from 'bcrypt'
import adminModel from '../models/adminModel'

export const addAdminOrFind = async (request, response) => {
  await adminModel
    .findOne({ email: request.body.email })
    .then(user => {
      if (user) {
        response.status(200).json(`admin is already created`)
      } else {
        const hash = bcrypt.hashSync(request.body.password, 10)
        try {
          const newAdmin = adminModel.create({
            email: request.body.email,
            password: hash,
          })
          if (newAdmin) {
            response.status(200).json({ message: 'the admin is succesfully created' })
          } else {
            response.status(400).json({ message: 'the admin is not created' })
          }
        } catch (err) {
          throw err
        }
      }
    })
    .catch()
}

export const getAllAdmins = async (request, response) => {
  await adminModel
    .find()
    .then(admin => {
      response.status(200).json({ message: 'get succefully user', admin })
    })
    .catch(err => {
      throw err
    })
}
