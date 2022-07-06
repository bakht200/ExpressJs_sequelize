const express = require('express');
const app = express();
const cors  = require('cors');

var corOptions = {
    origin: 'https://127.0.0.1:8081'
}


//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routers/

const router = require('./routes/productRouters.js');
app.use('/api/products',router)

const route = require('./routes/reviewRoutes.js');
app.use('/api/rating',route)


//testing api//

app.get('/',(req,res)=>{
    res.json({message:'hello from api'});
})

///server//

app.listen(3000,()=>{
    console.log('server is running');
})