const express = require('express')
const app = express()
const port = process.env.PORT || 5000


//use middleware
const cors = require('cors')
app.use(cors())
app.use(express.json())

//user: dbuser1
//password: zsbvUSyfOyLrZylL

app.get('/',(req,res) => {
    console.log(req)
    res.send('hello bangladesh')
})

app.listen(port,() => {
    console.log('CROU is runing')
})