import mongoose from 'mongoose'
require('dotenv').config()

mongoose.connect(process.env.mongoose_uri)
