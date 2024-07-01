const express = require('express')
const app = express()

const subscriberRouter = require('./routes/subscriber')
app.use(express.json());
app.use(express.urlencoded({ encoded:false}));


app.use('/api/subscriber',subscriberRouter);

app.listen(3000,()=>{
    console.log('Server Connected')
})

// {
//     "name": "xxxx",
//     "gender": "xxxx",
//     "email": "xxxx@gmail.com",
//     "subscribedToChannel": "xxxx"
// } 