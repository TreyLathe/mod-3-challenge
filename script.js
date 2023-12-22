var generateBtn = document.querySelector("#generate");

//create a function to generate a  password
function generatePassword() {
  //ask user how long they want the password
    let pwdLength = parseInt(prompt("How long would you want your password? Needs to be 8-128."));
  // if they don't answer or the length doesn't fit the parameters, refresh(?)
    if (!pwdLength || pwdLength < 8 || pwdLength > 128) {
      alert("Length must be between 8 and 128 characters, try again.");
      return;
    }
  //now ask user what character types they want to include
    let askUpperCase = confirm("Do you want uppercase letters in your password?");
    let askLowerCase = confirm("Do you want lowercase letters in your password?");
    let askNum = confirm("Do you want numbers in your password");
    let askSpecial = confirm("Do you want special characters in your password?");
  
  //if they don't chose any character types, refresh (?)
  //aside: the confirm gives an "ok" or "cancel" choice. This seems
  //confusing for the user, is there a way for the confirm to say "yes" and "no instead"
    if (!askUpperCase && !askLowerCase && !askNum && !askSpecial) {
      alert("You must choose at least one character type, try again.");
      return;
    }
   
  //create a variable with no value which to add our characters 
    let allCharacters = [];
  
  //if they say "ok" to a character type, append that in the new array allCharacters
    if (askUpperCase) {
      allCharacters = allCharacters.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    }
    if (askLowerCase) {
      allCharacters = allCharacters.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    }
    if (askNum) {
      allCharacters = allCharacters.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    }
    if (askSpecial) {
      allCharacters = allCharacters.concat(["!", "@", "#", "$", "%", "^", "&", "*"]);
    }
  
  //create a new password (generatePassword) by randomly selecting characters from the above array (allCharacters)
    let generatedPassword = "";
  
    for (let i = 0; i < pwdLength; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters[randomIndex];
    }
    return generatedPassword;
  }

//     // Get references to the #generate element

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
