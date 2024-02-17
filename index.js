require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routing/router')
require('./DataBase/connection')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});