// function orderFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Ordered");
//       resolve("Food Ordered");
//     }, 1000);
//   });
// }

// function prepareFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Prepared");
//       resolve("Food Prepared");
//     }, 1000);
//   });
// }
// orderFood()
//     .then((data) => {
//         console.log(data);
//         return prepareFood();
//     })
//     .then((data) => {
//         console.log(data);
//         return deliverFood();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
 
//     async function order(){
//        const data=await orderFood()
//        console.log(data)
//        await prepareFood()
//        await deliverfood()

//     }
//       orderFood(): promise<void>
// order() 
async function getData() {
  try {
    const response = await fetch("https://dummyjson.com/products/200");
    
    if (response.ok === false) {
      throw new Error("Data not found");
    }

    const data = await response.json();
    console.log(data);

    // data.products.forEach((ele) => {
    //   console.log(ele.price);
    // });

  } catch (error) {
    console.log("Data not found");
  }
}

getData();