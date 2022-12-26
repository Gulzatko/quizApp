const quizData = [
    {
        question: 'How old is Florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct:'c'
    },
    {
        question: 'What is the most used programming alguage in 2019',
        a:'java',
        b: 'C',
        c:'Python',
        d: 'JavaScript',
         correct:'a'
    }, {
        question: 'Who is the Presindent of US',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c:'Ivan Saldano',
        d: 'Mihai Andrei',
        correct:'b'
    },
    {
        question:'What does HTML stand for?',
        a:'Hypertext Markup laguage',
        b: 'Cascading Style Sheet',
        c:'Jason Object Notation',
        d: 'helicopters Terminals Motorboats Lamborginis',
        correct:'a'
    },
    {
        question:'What year was JavaScript launched?',
         a: '2020',
         b: '2019',
         c: '2018',
         d: 'none of the above',
         correct:'d'
     }

    

];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");

 const questionEl = document.getElementById('question');
 const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");
 const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
   const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}
function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
       if(answerEl.checked){
        answer= answerEl.id;
       }
    });

    return answer;

}

 function deselectAnswers(){
   answerEls.forEach((answerEl)=>{
    answerEl.checked=false;
   });
 }

submitBtn.addEventListener('click', ()=>{

const answer = getSelected();

if(answer){
    if(answer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;
    
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
       quiz.innerHTML = `<h2>You anwered correctly at ${score}/${quizData.length}quetstions</h2>`;
    }
}
});

