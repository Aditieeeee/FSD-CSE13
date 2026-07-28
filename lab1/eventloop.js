const f1=()=>{
    // f2()
    console.log('f1')
}
const f2=()=>{
    // f3()
    console.log('f2')
};
const f3=()=>{

    console.log('f3');
};

const writeData=async()=>{
    await writeFile('note.txt', 'i am fs module');
    console.log('file written');

};

const main=()=>{
    console.log('main');
writeData();
// f1();
setTimeout(f2, 0); // setTimeout is used to execute the function after a certain time interval [5000ms=1second]

// setInterval(f2, 1000); // setInterval is used to execute the function after a certain time interval [5000ms=1second]
// to stop setinterval execution we click on terminal and press ctrl+c
setImmediate(f3); // setImmediate is used to execute the function after the current event loop cycle is completed
process.nextTick(f1); // process.nextTick is used to execute the function after the current operation is completed and before the event loop continues
// f3();
console.log('end');
new Promise((resolve, reject)=>{
    console.log('promise1');
    resolve('resolved');
  
});
new Promise((resolve, reject)=>{
    console.log('promise2');
    resolve('resolved');
    
});
};
main();