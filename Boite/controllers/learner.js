import learnerModel from '../models/learnerModel'
import bcrypt from 'bcrypt'

export const addOrFindLearner = async (request, response) => {
  const {
    name,
    lastname,
    sexe,
    cohorte,
    profession,
    entreprise,
    password,
    contact,
    description,
    email,
  } = request.body
  await learnerModel
    .findOne({ email: request.body.email })
    .then(learner => {
      if (learner) {
        response.status(200).json(`this learner is already created`)
      } else {
        const hash = bcrypt.hashSync(password, 10)
        try {
          const newLearner = learnerModel.create({
            name,
            lastname,
            sexe,
            cohorte,
            profession,
            entreprise,
            password: hash,
            contact,
            description,
            email,
          })
          if (!newLearner) {
            response.status(400).json({ message: "learner don't added" })
          } else {
            response.status(200).json({ message: 'learner succesfully added' })
          }
        } catch (err) {
          throw err
        }
      }
    })
    .catch(err => {
      throw err
    })
}

export const getLearner = async (request, response) => {
  await learnerModel
    .find()
    .then(learner => {
      response.status(200).json({ message: 'get succesfully learner', learner })
    })
    .catch(err => {
      throw err
    })
}
