
var exp=require('express')
var app=new exp()
var usr,pwd;



//get method api
app.get("/testfun",(request,response)=>{

    usr=request.query.un;
    pwd=request.query.pw;

    //response.send("<h1>Welcome to Express JS </h1>")
   // response.end()

   response.write("<h1>user name:"+usr+"</h1>");
   response.write("<h1>password :"+pwd+"</h1>");
   if(usr==="sathya" && pwd==="sathya@123")
   {
    response.write("<font color='green' size='7'>valid user</font>");
   }
   else
   {
    response.write("<font color='red' size='7'>invalid user!!!</font>");
   }
   response.end()


}).listen(2005)

console.log("port listening at 2005,,,,,,,")