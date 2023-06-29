const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy')

const app = express();

app.use(cors())
app.use(express.json())

app.use('/users',proxy('http://localhost:6001'))
app.use('/transaction',proxy('http://localhost:6002'))


app.listen(6000,  () => {
    console.log("Gateway is listening to port 6000")
})