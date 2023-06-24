

const isValidId = async (req, res, next)=>{
    try{
        const userId = req.params.id;
        if(!userId || userId == ''){
            res.status(400).send({
                message : "Please provide the userId"

            });
        }

        if(typeof userId !== 'string'){
            res.status(400).send({
                message : "input should be string"
            })
        }

        req.userId = userId;
        next();
    }
    catch(err){
        console.log(`Some error while checking the userId : ${err}`)
        res.status(500).send({
            message : "Internal Server Error",
            success : false
        })
    }
}

module.exports = {
    isValidId
}