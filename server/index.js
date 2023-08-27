require('dotenv').config()
const app = require('./src/app')

const {port} = require('./secret')



app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
