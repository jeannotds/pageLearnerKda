import { addUserOrFind, getAllUsers } from '../../Boite/controllers/user'

export async function handler(request, response) {
  const { method } = request

  switch (method) {
    case 'GET':
      try {
        const user = await getAllUsers({})
        if (user) {
          response.status(200).json({ message: 'succes', user })
        }
        response.status(400).json({ message: 'not found' })
      } catch (err) {
        console.log(err)
      }
      break

    case 'POST':
      try {
        const user = await addUserOrFind(request.body)
        response.status(200).json({ message: 'user succesfully created', user })
      } catch (err) {
        console.log(err)
      }
      break
      
    default:
      response.status(400).json({ message: 'error' })
      break
  }
}
