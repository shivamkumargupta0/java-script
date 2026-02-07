// callback hell
// console.log("Starting homework...");

// setTimeout(() => {
//   console.log("Homework done!");
//   console.log("Starting dinner...");

//   setTimeout(() => {
//     console.log("Dinner done!");
//     console.log("Getting ready to go out...");

//     setTimeout(() => {
//       console.log("Going to the playground!");
//     }, 1000); // after dinner

//   }, 1500); // dinner time

// }, 2000); // homework time
3.2
//handeling call back hell

// function finishHomework(callback) {
//   console.log("Starting homework...");
//   setTimeout(() => {
//     console.log("Homework done!");
//     callback();
//   }, 2000);
// }

// function eatDinner(callback) {
//   console.log("Starting dinner...");
//   setTimeout(() => {
//     console.log("Dinner done!");
//     callback();
//   }, 1500);
// }

// function goToPlayground() {
//   console.log("Going to the playground!");
// }

// // Chained in steps, but cleaner
// finishHomework(() => {
//   eatDinner(() => {
//     goToPlayground();
//   });
// });

//

const input=document.querySelector("#task")
const btn=document.querySelector(".btn")
const lists=document.querySelector(".list")

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  const li=document.createElement('li')
  const deleteButton=document.createElement('button')

  deleteButton.innerText="delete"
  li.innerText=input.value

  li.appendchildd(deletebutton)
  lists.appendChild(li)
  deletebutton.addeventListener('click',()=>{
    lists.removeChild(li)
  })
  // li.innerText=input.ariaValue
  // lists.appendChild(li)
  // input. value=""
  input.value=""
})

