
//constructor
function Question(text,choices,answer){
this.text=text;
this.choices=choices;
this.answer=answer;
}

//Question prototype
 Question.prototype.checkAnswer=function(answer){
    return this.answer===answer;//true değeri döner
 }
 //Quiz Constructor
 function Quiz(questions){
    this.questions=questions;
    this.score=0;//bildigi soru kadar puan alacak
    this.questionIndex=0;

 }
 //Quiz Prototype
 Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex];
    
 }
 //Quiz isFinish metod
 Quiz.prototype.isFinish=function(){
    return this.questions.length===this.questionIndex;
 }

//Quiz guess
Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();
    if(question.checkAnswer(answer)){
        this.score++;//true ise score bir artır
    }
    this.questionIndex++;//diger soruya geç
}



var q1 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var q2 = new Question("what's the most popular programming language ?",["c#","visual basic","nodejs","javascript"],"javascript");

var q3 = new Question("what's the best modern programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var q4 = new Question("what's language ?",["C#","javascript","css","asp.net"],"javascript");

var questions=[q1,q2,q3,q4]

//start quiz
var quiz=new Quiz(questions);

loadQuesttion();
function loadQuesttion(){
if(quiz.isFinish()){
 //show score
 showScore();

}
else{
var question=quiz.getQuestion();
var choices=question.choices;
//console.log(choices)
document.querySelector("#question").textContent=question.text;
for(var i=0;i<choices.length;i++ ){
 var element=document.querySelector("#choice"+i);

 element.innerHTML=choices[i];
 guess("btn"+i,choices[i]);
}
showProgress();
}

}

function guess(id,guess){
 var btn=document.getElementById(id);
 btn.onclick=function(){
    quiz.guess(guess);
    loadQuesttion();

 }
}

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
 
    document.querySelector('.card-body').innerHTML = html;
 }
 
 function showProgress(){
     var totalQuestion = quiz.questions.length;
     var questionNumber = quiz.questionIndex+1;
     var html = 'Question '+ questionNumber + ' of ' + totalQuestion;
 
     if(totalQuestion === questionNumber){
         document.querySelector('#progress').innerHTML = "Quiz is Ended";
     }else{
         document.querySelector('#progress').innerHTML = html;
     }
 
   
 }