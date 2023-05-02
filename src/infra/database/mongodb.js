const mongoose = require('mongoose')
require('dotenv').config()

const User = process.env.user
const Password = process.env.password

const startConnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${User}:${Password}@fynsyc.l7bfa21.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Mongo started connection')
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
  }
}

const closeConnection = async () => {
    try {
        await mongoose.disconnect()
        console.log('Mongo disconnected')
    }catch (error) {
        console.error('Error while disconnecting from MongoDB', error);
    }
}


module.exports = {
    startConnection,
    closeConnection
}