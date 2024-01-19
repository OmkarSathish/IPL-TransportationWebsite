const mongoose = require('mongoose');

const connectToDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE)
        console.log(`Using ${connect.connection.name} DataBase`);
    } catch (e) {
        console.log(e);
        process.exit(1)
    }
}

module.exports = connectToDB