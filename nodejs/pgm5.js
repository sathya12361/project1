buf=new Buffer.alloc(250)
                       //syntax: buffer.alloc,fill,encoding);
                       //o/p: default all value 00

console.log(buf);
len=buf.write("Welcome to sathya")
console.log(len)
console.log(buf)
console.log(buf.toString())