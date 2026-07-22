
import {  EventEmitter } from "node:events";

const task =new EventEmitter();
// use new keyword to make a object of EventEmitter class
const sayHi=(name)=>{
    console.log(`Logged in ${name}`);
};

const starts= ()=>{//function to be called when event is triggered [starts is the argument in the greet event ]
    console.log("Server started");
}

task.once("greet" , starts); //on method is used to listen to the event // yetask line by line honge 
// once : once is for to execute the event one time only , on : for multiple times
task.on("greet" , sayHi); //on method is used to listen to the event
// greet : event ka naam , sayhi: function subscriber ke liye

task.on("greet" , (name)=>{ //arrow function as a subscriber
    console.log(` ${name}starts shooping`);
});
task.on("greet" , (name)=>{ //arrow function as a subscriber
    console.log(` ${name} is logging out`);
});

task.emit("greet", "aditi"); //emit method is used to trigger the event  [Announcement]
task.emit("greet", "meeeetu"); //emit method is used to trigger the event  [Announcement]
