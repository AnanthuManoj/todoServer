const mongoose = require('mongoose')

const connectionString = process.env.DataBase

mongoose.connect(connectionString).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
})