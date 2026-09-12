// import event
var events=require("events")


// create object to events emitter
var eventEmitter=new events.EventEmitter();

//bind event (called)
const dis=()=>{
    console.log("event called")

}
eventEmitter.on("sathya",dis)

//fire event (calling)
eventEmitter.emit("sathya")
