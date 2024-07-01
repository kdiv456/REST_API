const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/rest_api')
.then(()=> console.log('MongoDB connected'))
.catch((err)=> console.log(err.message))

const subscriberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate:{
        type: String,
        default: () => Date.now()
    },
})

const Subscriber = mongoose.model('subscriber',subscriberSchema);

module.exports = Subscriber;