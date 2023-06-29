const express = require('express');

const app = express();

app.use(express.json())

const models = require('./models');

app.use('/',(req,res,next) => {
    return res.status(200).json({"msg":"Hello users"})
})

models.db_config
    .sync({
        //    force: true,
        // alter: true,
    })
    .then(() => {
        console.log(`Connected to Database!`);
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err)
        process.exit()
    });

app.listen(6001,  () => {
    console.log("user is listening to port 6001")
})