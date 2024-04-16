//data.js 에서 자료 가져오기
//data.js 가 파일에서 배열 형태로 구성됨
import {questions} from './data.js';

const progressValueE1 = document.querySelector('.progress .value');
const numberE1 = document.querySelector(".number");
const questionE1 = document.querySelector('.question');
const choice1E1 = document.querySelector('.choice1');
const choice2E2 = document.querySelector('.choice2');
let currentNumber = 0;
let mbti = '';

choice1E1.addEventListener('click', function(){
    nextQuestion(0);
}
);

choice2E2.addEventListener('click', function(){
    nextQuestion(1);
}
);


function nextQuestion(choicenumber){
    // console.log(choicenumber);
   const question = questions[currentNumber];
   if(currentNumber === questions.length-1){
    showResultPage();
    return;
   }
   mbti = mbti + question.choices[choicenumber].value;
   console.log("mbti = " + mbti);
   currentNumber = currentNumber+1;
   progressValueE1.style.width = (currentNumber + 1 )* 10 + '%'
   renderQuestion();
}

function showResultPage(){
    location.href = './results.html?mbti='+mbti;
}


function renderQuestion(){
    const question = questions[currentNumber];
    numberE1.innerHTML = question.number;
    questionE1.innerHTML = question.question;
    choice1E1.innerHTML = question.choices[0].text;
    choice2E2.innerHTML = question.choices[1].text;
}

renderQuestion();