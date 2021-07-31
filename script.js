// Assignment Code
var generateBtn = document.querySelector("#generate");

// function () {
//   var passwordLength = prompt("Enter password length between 8 and 128 characters")
//   if (passwordLength < 8 || passwordLength > 128)
//   alert("Please enter a valid password length")

//   return "hello"
// }


//working code
function generatePassword () {
  var passwordLength = prompt("Enter password length between 8 and 128 characters")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid length")
    
  }

  else {
    var lowerCase = confirm("Would you like to include lowercase characters in your password?")
    console.log(lowerCase)
  }
      var upperCase = confirm("Would you like to include uppercase characters in your password?");
      console.log(upperCase)
      var specialCharacters = confirm("Would you like to include special characters in your password?");
      console.log(specialCharacters)
      var numbers = confirm("Would you like to include numbers in your password?");
      console.log(numbers)

  if (lowerCase === false && upperCase === false && specialCharacters === false && numbers === false) {
    alert("Please choose at least one character type")
    
}
else {
  alert("Thank You!")
}


  return "hello"
}


  


// Write password to the #password input
function writePassword() {
  //create generatePassword variable
  
  


  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//create generatePassword variable - this is where all of the 