// document.write("this is from the file....");

//Anatomy of a function

//Function declaration OR declaring a function
//function nameOfFunction(parameters){code to be executed; code to execute; code to execute;}

// function nameOfFunction(parameters){
//   code to execute;
//   code to execute; 
//}


function greetUser(){
    let name = prompt("State Your Name!");
    document.write("Hi, " + name + "!");
}

function gamePref(){
  if (confirm("Do you love games?")){
    document.write("You came to the right place!");
  }else {
    document.write("Lets change your mind!");
  }
} 

function thanks(){
    document.write("Thanks for stopping by!");
}

function answer(){
    let myAnswer = 3;
    let userAnswer;
    //let usersGuess = prompt("Guess how many games are on my list 1-5");
    
    while (userAnswer != myAnswer){
        userAnswer = prompt("Guess how many games are on my list 1-5?");
        if (userAnswer != myAnswer){
       alert("Wrong try again, how many games are on my list 1-5?");
        }else {
            alert("Correct!")
        }
}
}

function picture(){
let num = prompt("How many ps5's do you want?")
for(let i = 0; i < num; i++)
  document.write("<img src='ps5.jpeg' alt='Your ps5'/>");
}
greetUser();
gamePref();
answer();
picture();

  // while/this evaluates to true){execute this code}
/*
  let x = 0
  while (x < 10){
    console.log(x);
    x += 1;
  }
  */

  /*
  for(initial value; condition to evaluate; increment){code te execute}
  */

  /*
let students = 10;
for(let i =0; i < students; i++){
    console.log(i);
}
let userNum = prompt("Pick a number! (Between 1& 5 please)")
for(let i = 0; i < 5; i++){
    document.write("")
}
 */
