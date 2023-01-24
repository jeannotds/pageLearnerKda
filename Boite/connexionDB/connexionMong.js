// La connexion à la base de données
// import Dotenv  from "dotenv";
import mongoose from "mongoose";
// require('dotenv').config()
// Dotenv.config()

mongoose.connect(process.env.mongoose_uri)