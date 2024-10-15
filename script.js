const startpage = document.querySelector(".startpage");
const startbtn = document.querySelector(".startbtn");
const nextoption = document.querySelector(".nextoption");
const question = document.querySelector(".question")
const no = document.querySelector(".no");
const options = document.querySelector(".options")
const option11 = document.querySelector(".option11")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const stopwatch = document.querySelector(".stopwatch")
const nextpage = document.querySelector(".nextpage")
const optiondiv = document.querySelectorAll(".option11>div")
const submitbtn = document.querySelector(".submitbtn")
const number = document.querySelector(".number")
const soundbtn = document.querySelector(".soundicon img")
const audioplay = document.querySelector("#audio-play")

soundbtn.click()
soundbtn.addEventListener("click" , ()=>{
console.log("on")
  if(audioplay.paused){
    audioplay.play()
  }
  else{
    audioplay.pause()
  }
})
console.log(optiondiv)
let correct = 0;
let questionIndex = 0;
let timerInterval = null;
let questions = [
  {
    id: 1,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    correctAnswer: "Tokyo"
  },
  {
    id: 2,
    question: "Which element's chemical symbol is O?",
    options: ["Oxygen", "Osmium", "Oganesson", "Oxide"],
    correctAnswer: "Oxygen"
  },
  {
    id: 3,
    question: "What is the square root of 64?",
    options: ["6", "8", "7", "9"],
    correctAnswer: "8"
  },
  {
    id: 4,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Leo Tolstoy"],
    correctAnswer: "William Shakespeare"
  },
  {
    id: 5,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    correctAnswer: "Mercury"
  },
  {
    id: 6,
    question: "Which country is known for inventing pizza?",
    options: ["France", "Greece", "Italy", "Spain"],
    correctAnswer: "Italy"
  },
  {
    id: 7,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    id: 8,
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O"
  },
  {
    id: 9,
    question: "Which country is home to the kangaroo?",
    options: ["India", "Australia", "South Africa", "Brazil"],
    correctAnswer: "Australia"
  },
  {
    id: 10,
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1918", "1950"],
    correctAnswer: "1945"
  },
  {
    id: 11,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 12,
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Antarctic", "Arabian"],
    correctAnswer: "Antarctic"
  },
  {
    id: 13,
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Tiger", "Elephant"],
    correctAnswer: "Cheetah"
  },
  {
    id: 14,
    question: "Which is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "K2", "Mount Everest", "Mount Fuji"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 15,
    question: "Which country won the 2018 FIFA World Cup?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    correctAnswer: "France"
  },
  {
    id: 16,
    question: "What is the longest river in the world?",
    options: ["Amazon River", "Yangtze River", "Mississippi River", "Nile River"],
    correctAnswer: "Nile River"
  },
  {
    id: 17,
    question: "Which city is known as the Big Apple?",
    options: ["San Francisco", "Los Angeles", "New York", "Chicago"],
    correctAnswer: "New York"
  },
  {
    id: 18,
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: "Albert Einstein"
  },
  {
    id: 19,
    question: "What is the smallest country in the world by area?",
    options: ["Monaco", "Vatican City", "Malta", "Liechtenstein"],
    correctAnswer: "Vatican City"
  },
  {
    id: 20,
    question: "What is the hardest natural substance on Earth?",
    options: ["Iron", "Gold", "Diamond", "Quartz"],
    correctAnswer: "Diamond"
  },
  {
    id: 21,
    question: "Which is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 22,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan"
  },
  {
    id: 23,
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Samuel Morse"],
    correctAnswer: "Alexander Graham Bell"
  },
  {
    id: 24,
    question: "Which organ in the human body is responsible for pumping blood?",
    options: ["Lungs", "Kidney", "Heart", "Liver"],
    correctAnswer: "Heart"
  },
  {
    id: 25,
    question: "Which element is needed for photosynthesis to occur?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
  }
]

function startTimer() {
  let timeLeft = 30;

  clearInterval(timerInterval); // Clear any previous timer
  timerInterval = setInterval(() => {

    if (timeLeft >= 0) {
      stopwatch.innerHTML = `${timeLeft}`;
      if (timeLeft <= 15) {
        nextpage.classList.remove("bgchanger")
        nextpage.classList.add("bgchangey")
      }
      if (timeLeft <= 5) {  
        nextpage.classList.remove("bgchangey")
        nextpage.classList.add("bgchanger")
      }
      if (timeLeft === 0) {
        nextoption.click()
        nextpage.classList.remove("bgchanger")
        
      }
      timeLeft--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function loadQuestion(index) {
  const currentQuestion = questions[index];
  // Set question number and text
  no.innerHTML = currentQuestion.id;
  question.innerHTML = currentQuestion.question;

  // Set options
  one.innerHTML = currentQuestion.options[0];
  two.innerHTML = currentQuestion.options[1];
  three.innerHTML = currentQuestion.options[2];
  four.innerHTML = currentQuestion.options[3];
}
submitbtn.addEventListener("click", () => {
  localStorage.setItem("score", JSON.stringify(correct))
  console.log(correct)

})


startbtn.addEventListener("click", () => {
  startpage.parentElement.classList.add("next")
  loadQuestion(questionIndex);

  startTimer();
})
  
  let clickedelement;
  option11.addEventListener("click", (event) => {
     clickedelement = event.target
    console.log(clickedelement.classList)
    // console.log(questions[questionIndex].correctAnswer)
  
    // console.log(clickedelement.textContent)
    if (clickedelement.textContent === questions[questionIndex].correctAnswer) {
      clickedelement.style.border = "2px solid green"
      correct++;
      console.log(correct)
    }
    else{
      if(clickedelement.classList.value != "option11"){
        clickedelement.style.border = "2px solid red"   
        
      }
      option11.style.border = "none"
     }
  })





// let count = 0;
// let opt = questionTexts[count].options
// one.innerHTML = opt[0]
// two.innerHTML = opt[1]
// three.innerHTML = opt[2]
// four.innerHTML = opt[3]

// question.innerHTML = `${questionTexts[count].question}`

// no.innerHTML = `${questionTexts[count].id}`

nextoption.addEventListener("click", () => {

    optiondiv.forEach((divs)=>{
      divs.style.border = "3px solid #D9D9D9"
    }) 

  if (questionIndex < questions.length - 1) {
    questionIndex++; // Move to the next question
    loadQuestion(questionIndex); // Load the new question
    startTimer();
    window.scrollTo(0, 0);
// Restart the timer
  } else {
    alert("Quiz is over!");
    clearInterval(timerInterval); 
    localStorage.setItem("score" , JSON.stringify(correct))// Stop the timer when quiz is over
 
    
  }
  
});

// nextoption.addEventListener("click", () => {
//   count++;
//   opt = questionTexts[count].options
//   question.innerHTML = `${questionTexts[count].question}`
//   no.innerHTML = `${questionTexts[count].id}`
//   one.innerHTML = opt[0]
//   two.innerHTML = opt[1]
//   three.innerHTML = opt[2]
//   four.innerHTML = opt[3]

// })


// for (let i = 0; i < questions.length; i++) {
//   console.log(questions[i].question);


//   nextoption.addEventListener("click",()=>{
//     question.innerHTML = `${questions[i].question}`
//   })
// }


