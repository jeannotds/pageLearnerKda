import bcrypt from 'bcrypt'
import user from '../models/user'

export const addUserOrFind = async (request, response) => {
  const { name, lastname, email } = request.body
  await user
    .findOne({ email: request.body.email })
    .then(user => {
      if (user) {
        response.status(200).json('the user is already created')
      } else {
        const hash = bcrypt.hashSync(request.body.password, 10)
        try {
          const newUser = user.create({
            name,
            email,
            lastname,
            password: hash,
          })
          if (!newUser) {
            response.status(400).json({ message: "user don't added" })
          } else {
            response.status(200).json({ message: 'user succesfully added' })
          }
        } catch (err) {
          console.log(err)
        }
      }
    })
    .catch(err => {
      throw err
    })
}
