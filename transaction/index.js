const express = require('express');

const app = express();

app.use(express.json())

const models = require('./models');

app.use('/',(req,res,next) => {
    return res.status(200).json({"msg":"Hello transaction"})
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
    
app.listen(6002,  () => {
    console.log("transaction is listening to port 6002")
})