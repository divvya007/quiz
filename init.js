// function for 1st question and eventlistener
function myfunction(e) {
  document.getElementById("demo").innerHTML = "Correct answer";
}

function myfunc1(e) {
  let y = e.target;
  document.getElementById("demo").innerHTML = "Wrong answer";
}

document.getElementById("btn1").addEventListener("click", myfunc1);
document.getElementById("mybtn").addEventListener("click", myfunction);
document.getElementById("btn3").addEventListener("click", myfunc1);
document.getElementById("btn4").addEventListener("click", myfunc1);

// function for 2nd question and eventlistener

function myfunction2(e) {
  let z = e.target;
  document.getElementById("demo2").innerHTML = "Correct answer";
}

function myfunc2(e) {
  let z1 = e.target;
  document.getElementById("demo2").innerHTML = "Wrong answer";
}

document.getElementById("hag2").addEventListener("click", myfunc2);
document.getElementById("oct2").addEventListener("click", myfunction2);
document.getElementById("ear2").addEventListener("click", myfunc2);
document.getElementById("lee2").addEventListener("click", myfunc2);

// function for 3rd question and eventlistener

function myfunction3(e) {
  let z = e.target;
  document.getElementById("demo3").innerHTML = "Correct answer";
}

function myfunc3(e) {
  let z1 = e.target;
  document.getElementById("demo3").innerHTML = "Wrong answer";
}

document.getElementById("hag3").addEventListener("click", myfunc3);
document.getElementById("oct3").addEventListener("click", myfunction3);
document.getElementById("ear3").addEventListener("click", myfunc3);
document.getElementById("lee3").addEventListener("click", myfunc3);

// function for 4th question and eventlistener

function myfunction4(e) {
  let z = e.target;
  document.getElementById("demo4").innerHTML = "Correct answer";
}

function myfunc4(e) {
  let z1 = e.target;
  console.log(z1);
  document.getElementById("demo4").innerHTML = "Wrong answer";
}

document.getElementById("hag4").addEventListener("click", myfunc4);
document.getElementById("oct4").addEventListener("click", myfunction4);
document.getElementById("ear4").addEventListener("click", myfunc4);
document.getElementById("lee4").addEventListener("click", myfunc4);

// function for 5th question and eventlistener

function myfunction5(e) {
  let z = e.target;
  document.getElementById("demo5").innerHTML = "Correct answer";
}

function myfunc5(e) {
  let z1 = e.target;
  document.getElementById("demo5").innerHTML = "Wrong answer";
}

document.getElementById("hag5").addEventListener("click", myfunc5);
document.getElementById("oct5").addEventListener("click", myfunction5);
document.getElementById("ear5").addEventListener("click", myfunc5);
document.getElementById("lee5").addEventListener("click", myfunc5);
