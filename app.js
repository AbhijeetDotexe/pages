const express = require('express');

const app = express();

var pageRouter = require('./index');

app.use('/page',pageRouter);

app.listen(3000,()=>{
    console.log("Server has started");
});