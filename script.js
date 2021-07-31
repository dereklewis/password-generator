// Assignment Code
var generateBtn = document.querySelector("#generate");

// function () {
//   var passwordLength = prompt("Enter password length between 8 and 128 characters")
//   if (passwordLength < 8 || passwordLength > 128)
//   alert("Please enter a valid password length")

//   return "hello"
// }



function generatePassword () {
  var passwordLength = prompt("Enter password length between 8 and 128 characters")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid length")
    
  }
  else {
    var lowerCase = confirm("Would you like to include lower case characters?")
    console.log(lowerCase)
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