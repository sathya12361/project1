var fs=require("fs")
var data=fs.readFileSync("test.txt")
console.log("answer : "+data.toString())
console.log("porgram end")