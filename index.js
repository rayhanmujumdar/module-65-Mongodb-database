const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000


//use middleware
const cors = require('cors')
app.use(cors())
app.use(express.json())

//user: dbuser1
//password: zsbvUSyfOyLrZylL



const uri = "mongodb+srv://dbuser1:zsbvUSyfOyLrZylL@cluster0.bnf0w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try{
        await client.connect()
        const userCollection = client.db('car-genius').collection('carUser')
        const carUser = {
            carName: 'lemborgini',
            mode: '2022'
        }
        const result = await userCollection.insertOne(carUser);
        console.log(`create a user and find userId ${result.insertedId}`)
    }
    finally{
        await client.close()
    }
}

run().catch(console.dir)

app.get('/',(req,res) => {
    console.log(req)
    res.send('hello bangladesh')
})

app.listen(port,() => {
    console.log('CROU is runing')
})