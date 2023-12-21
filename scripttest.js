// Assignment code here

//write a function to create a password from selected criteria

 function generatePassword() {
//
// prompt for those variables in succession
// first ask how long they want the password, restrict to 8-128 characters in length
//if not equal to or greater than 8 or equal to or less than 128, ask again with message that it's not in parameters

let pwdLength = prompt("How long would you want your password? Needs to be 1-128.");

if (!(pwdlength) || pwdLength < 8 || pwdlength > 128) {
  alert("Length must be between 8 and 128 characters, try again.");
  return;}

// then ask for which characters to use (upper/lower case, number, special character)
// if they don't chose one of those four types, alert with "need at least one character type"

let askUpperCase = confirm("Do you want uppercase letters in your password?");
let askLowerCase = confirm("Do you want lowercase letters in your password?");
let askNum = confirm("Do you want numbers in your password");
let askSpecial = confirm("Do you want special characters in your password?");

if (!(askUpperCase) && !(askLowerCase) && !(askNum) && !(askSpecial)) {
  alert("You must choose at least one character type, try again.");
  return;}

let allCharacters = [];

if (askUpperCase) {
    // Add uppercase letters to the password array
    allCharacters = allCharacters.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
}
  
if (askLowerCase) {
    // Add lowercase letters to the password array
    allCharacters = allCharacters.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
}
  
if (askNum) {
    // Add numbers to the password array
    allCharacters = allCharacters.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
}
  
  if (askSpecial) {
    // Add special characters to the password array
    allCharacters = allCharacters.concat(["!", "@", "#", "$", "%", "^", "&", "*"]);
  }
  
  //use this if I want to see the new array of characters.
  console.log(newPassword);
  
// variables of pwdLength and and character types)

//generate random selections for each chosen character type up to the number characters chose


// for all the character types chosen, concatenate variables into one array/list
//for?
// let allCharacters concat()
// Use variable allCharacters for the new array

//count the characters in the array
//for the chosen length of the password, pick randomly from the array (use array length somehow?)
let generatePassword = "";

for (let i = 0; i < 10; i++) {
  let randomIndex = Math.floor(Math.random() * allCharacters.length);
  generatePassword += allCharacters[randomIndex];
}

// to print out the new passw
//console.log(randomPassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
