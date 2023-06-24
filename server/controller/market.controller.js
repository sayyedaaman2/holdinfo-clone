const Market = require('../model/market.model')

exports.findById = async (req, res)=>{
    try{
        

        const data = await Market.findById(req.userId)

        if(!data){
            return res.status(404).send({
                message : 'No Records !!!'
            })
        }
        return res.status(200).send({
            success : false,
            message : `Successfully fetched records.`,
            data : [data],
        })
        
    }catch(err){
        console.log(`Some error while fetching data : `,err);
        res.status(500).send({
            message : "Internal Server Error "
        })
    }
}


exports.find = async (req, res)=>{
    try{
        

        const data = await Market.find()

        if(!data){
            return res.status(404).send({
                message : 'No Records !!!'
            })
        }
        return res.status(200).send({
            success : false,
            message : `Successfully fetched all records.`,
            data : data,
        })
        
    }catch(err){
        console.log(`Some error while fetching data : `,err);
        return res.status(500).send({
            message : "Internal Server Error "
        })
    }
}


exports.currencyList = async (req, res)=>{
    try{
        const data = await Market.getCurrencyList();
        
        if(!data){
            return res.status(404).send({
                message : 'No Currency !!!'
            })
        }
        return res.status(200).send({
            success : false,
            message : `Successfully fetched all currency.`,
            data : data,
        })
        
    }catch(err){
        console.log(`Some error while fetching data : `,err);
        return res.status(500).send({
            message : "Internal Server Error "
        })
    }
}

