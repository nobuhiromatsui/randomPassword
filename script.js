// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Ask number of passward
function generatePassword() {
var numPass = prompt("Choose number of charasters. It should be 8 < 128");



for (var i = 0; i < numPass.length ; i++) {
    if ( (numPass <= 8 ) || (numPass >= 128) ) {
      var numPass = prompt("Choose number of charasters. It should be 8 < 128");
      var len = numPass;
    }
    else {
      var len = numPass;
      break;
    }
}


// Ask Special Characters
var conSpecial = confirm("Do you want add special Characters?");
// Ask Numbers 
var conNum = confirm("Do you want add numbers?");
// Ask Capital letters
var conCap =  confirm("Do you want add capital letters?");

// name variables for each criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789"
var specialChar = "!@#$%^&*()?><+"
var capLetter = lowercase.toUpperCase();

// Making condition


if (conSpecial === true) {
  specialChar = specialChar;
  console.log(specialChar);
}
else {
  specialChar = lowercase;
  console.log(specialChar);
}

if (conNum === true) {
  num = num;
  console.log(num);
}
else {
  num = lowercase;
  console.log(conNum);
}

if  (conCap === true) {
  capLetter = capLetter;
  console.log(capLetter);
}
else {

  capLetter = lowercase;
  console.log(capLetter);
}



// Combined variables
var str = lowercase + num + specialChar + capLetter;
console.log(str);

var strLen = str.length;
var result = "";

// randam choice 
for (var i = 0; i < len; i++) {
  result += str[Math.floor(Math.random() * strLen)];
}
 
// alert("Your Passward is ..." + " " + result);
console.log("Your Passward is ..." + " " + result);
}

// Calling generatePassword(); function 

// writePassword();


// var generate = document.querySelector(".btn");
// generate.addEventListener("click", function(){

// });







