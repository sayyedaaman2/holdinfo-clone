const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const serverConfig = require('./config/server.config');
const {  pool:db, init} = require('./model/index');
const Market = require('./model/market.model')
const bulkSave = require('./utility/RawDataInsert')
const marketRoutes = require('./routes/market.routes')

const app = express();
//Options for the cors;
const corsOption = {
    credentials : true,
    origin : []
}
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));





db.connect((err,client,release)=>{
    if(err){
        console.log(`Some Error while connecting database :  ${err}`);
        return;
    }

    console.log(`Successfully Connected to database `);
    init();
    release();
})

/**Create bulk records */
// bulkSave();


app.use('/api/v1/market', marketRoutes)


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port : ${serverConfig.PORT}`)
})