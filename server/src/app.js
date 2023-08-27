const express = require('express');
const userRouter = require('./routers/userRouter');


const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// Routes 
app.get('/', (req, res) => { 
    res.send(`
    <form action="/users/create-user" method="post" enctype="multipart/form-data">
    <label for="name">Name</label>
    <input type="text" id="name" name="name"> <br>

    <label for="email">Name</label>
    <input type="text" id="email" name="email"> <br>
    
    <label for="image">Upload the image</label>
    <input type="file" id="image" name="image"> <br>  

    <button type="submit">Submit</button>
</form>
    `)
 })

 app.use('/users/', userRouter)


module.exports = app;





