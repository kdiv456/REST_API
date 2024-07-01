const Subscriber = require('../model/subscriber')

const getAllSubscriber = async(req,res)=>{
    try {
        const data = await Subscriber.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }

}

const getSubscriber = async(req,res)=>{
    try {
    const id = req.params.id;
    const result = await Subscriber.findById(id)
    if(!result){
        return res.status(404).json({msg: "Cannot find user"})
    }
    return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
    
}

const createSubscriber = async (req,res)=>{
    try {
        const sub = new Subscriber(req.body)
        const dat = await sub.save()
        res.status(201).json(dat)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const updateSubscriber = async(req,res)=>{
    try {
        const id = req.params.id;
        const temp = await Subscriber.findByIdAndUpdate(id,req.body,{
            new : true
        })

        if(!temp){
            return res.status(404).json({msg:'User not found'})
        }

        return res.json(temp)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

const deleteSubscriber = async(req,res)=>{
    try {
        const data = await Subscriber.findByIdAndDelete(req.params.id);
        if(!data){
           return res.status(404).json({msg:'User not found'})
        }
        res.status(200).json({msg: 'Deleted Successfully'})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

module.exports = {getAllSubscriber,
    getSubscriber,
    createSubscriber,
    updateSubscriber,
    deleteSubscriber };