const {MongoClient} = require("mongodb")
var exp=require('express')
var app=new exp()

//get method api
app.get("/pwdfun",async(request,response)=>{

    var client=new MongoClient("mongodb://127.0.0.1:27017");
    client.connect()
    const data={"usr":request.query.un};
    response.write("<h1>Delete Record</h1>")
    try
    {
        const result=await client.db("jsd").collection("login").deleteOne(data)
        console.log(result)
        if(result.deletedCount===1)
       {
          response.write("<h1>Successfully deleted</h1>")
       }
       else
       {
        response.write("<h1>data not found</h1>")
       }
    }
    catch
    {
        console.log("error")
        response.write("<h1>data reading error<h1>")
    }
   
   response.end()


}).listen(2007)

console.log("port listening at 2007,,,,,,,")