const number = document.querySelector(".number")
const submitbtn = document.querySelector(".submitbtn")
const lowerbar = document.querySelector(".lowerbar")
const num = JSON.parse(localStorage.getItem("score"))
console.log(num)

number.innerHTML = num

lowerbar.style.width = (num * 100) / 25 + '%';



