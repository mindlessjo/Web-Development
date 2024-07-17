console.log("Automated Math Problem Checker");

var firstc = Math.floor(Math.random() * 101);
var secondc = Math.floor(Math.random() * 101);
var operators = ["*", "/", "+", "-"];
var randomOperator = operators[Math.floor(Math.random() * operators.length)];
var fullequation = firstc + " " + randomOperator + " " + secondc;

console.log(fullequation);

var sum = eval(fullequation);
console.log(sum);

// var randomproblem = Number(document.getElementById("randomized-problem"));
// function randprobappend() {
//   randomproblem.append(fullequation).innerHTML;
// }

function randprobappend() {
  var randomproblem = document.getElementById("randomized-problem");
  randomproblem.innerHTML = fullequation;
}

randprobappend();

// var humananswer = Number(document.getElementById("answerline").innerHTML);

// function check(humananswer, sum) {
//   if (humananswer == sum) {
//     document.getElementById("workarea").style.backgroundColor = "limegreen";
//     console.log(humananswer);
//   } else {
//     document.getElementById("workarea").style.backgroundColor = "red";
//     console.log(humananswer);
//   }
// }

document.getElementById("submitanswer").onclick = function () {
  var humananswer = parseFloat(document.getElementById("answerline").value);
  check(humananswer, sum);
};

function check(humananswer, sum) {
  if (humananswer === sum) {
    document.getElementById("workarea").style.backgroundColor = "limegreen";
    console.log(humananswer);
  } else {
    document.getElementById("workarea").style.backgroundColor = "red";
    console.log(humananswer);
  }
}
