const express=require('express');
const dbConnect=require('./mongodb');
   const app=express();

app.get('/',(req,resp)=>{ //Require to get data,response to response to api
    resp.send({name:'Ali'})

});
app.listen(5000)