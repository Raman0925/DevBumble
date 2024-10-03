const express = require('express');
const {PORT}=require('./config')
const app = express();
const {userRoutes}= require('./routes')

app.use("/api",userRoutes);

app.listen(PORT)


