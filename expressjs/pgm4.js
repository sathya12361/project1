const {MongoClient} = require("mongodb")
var exp=require('express')
var app=new exp()
var usr,pwd;



//get method api
app.get("/showall",async(request,response)=>{

    
    var client=new MongoClient("mongodb://127.0.0.1:27017");
    client.connect()
    response.write("<h1>Read All datas from mongodb</h1>")
    try
    {
        const result=await client.db("jsd").collection("login").find({}).toArray()
        console.log(result)
        var len=result.length;
        response.write("<h1>Total Records Avaliable:"+len+"<h1>");
        response.write("<table border='2' align='center' cellpadding='20' bgcolor='pink'>");
        response.write("<tr><th>serial number</th><th>user name</th><th>password</th></tr>")
        for(i=0;i<len;i++)
        {
            response.write("<tr><td>"+(i+1)+"</td><td>"+result[i].usr +"</td><td>"+ result[i].pwd+"</td>");
        }
        response.write("</table>")
    }
    catch
    {
        console.log("error")
        response.write("<h1>data reading error<h1>")
    }
   
   response.end()


}).listen(2004)

console.log("port listening at 2004,,,,,,,")