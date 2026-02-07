const p=new Promise(function(resolve,reject){
    //resolve()
    //reject()
//     setTimeout(()=>{
//         let done=true;
//         if(done){
//             resolve()
//         }else{
//             reject()
//         }   
//     },5000)  
// })
//console.log(p)
// p.then((data)=>{
//     console.log("resolved",data)
// }).catch((err)=>{
//     console.log("rejected",err)
//     //finally method
// }).finally(()=>{
//     console.log("finally block")
// })

function doHomework() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let homeworkDone = true;

      if (homeworkDone) {
        console.log("Homework is done");
        resolve("Homework complete");
      } else {
        reject("Homework not done");
      }
    }, 3000);
  });
  return p
}

function eatDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dinnerEaten = true;

      if (dinnerEaten) {
        console.log("Dinner is eaten");
        resolve("Dinner complete");
      } else {
        reject("Didn't eat dinner");
      }
    }, 2000);
  });
  return p
}

function goToPlayground() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let permission = true;

      if (permission) {
        console.log("Went to the playground");
        resolve("Playground time!");
      } else {
        reject("Not allowed to go out");
      }
    }, 3000);
  });
  return p
}

// Promise Chaining Starts
doHomework()
  .then((data) => {
    console.log(data);
    return eatDinner();
  })
  .then((data) => {
    console.log(data);
    return goToPlayground();
  })
  .catch((error) => {
    console.log("Something went wrong:", error);
  })
  .finally(() => {
    console.log("Day ended Go to sleep");
  })
})
