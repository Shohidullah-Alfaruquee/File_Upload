const path = require('path');
const createUser = (req, res) => {

    const newUser = {
        name: req.body.name,
        email:req.body.email,
        image:req.body.image,
    }
    res.send(newUser)
}




module.exports ={
    createUser
}