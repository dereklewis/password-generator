// Assignment Code
var generateBtn = document.querySelector("#generate");
const numberBox = [0,1,2,3,4,5,6,7,8,9]
// console.log(numberBox)
const specialBox = ["~","!","%","^","&","*","(",")","<",">","?"]
// console.log(specialBox)
var lowerBox = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// console.log(lowerBox)
const upperBox = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// console.log(upperBox)

var chooseNumbers = ""
var chooseLowerCase = ""




//working code
function generatePassword () {

  
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters")

  //statement to valid the password length parameters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid length") 
    generatePassword()
  
  }
    //confirm boxes to indicate and log the selections
      var lowerCase = confirm("Would you like to include lowercase characters in your password?")
      console.log(lowerCase)
      var upperCase = confirm("Would you like to include uppercase characters in your password?");
      console.log(upperCase)
      var specialCharacters = confirm("Would you like to include special characters in your password?");
      console.log(specialCharacters)
      var numbers = confirm("Would you like to include numbers in your password?");
      console.log(numbers)
    
  //statement to validate that the character selection criteria was met
  if (
    lowerCase === false && 
    upperCase === false && 
    specialCharacters === false && 
    numbers === false
    ) {
    alert("Please choose at least one character type")
    generatePassword()
  
}
else {
  alert("Thank You!")
}
    
    if (lowerCase === true) {
     chooseLowerCase.concat(lowerBox)
     return chooseLowerCase
    
  }
  else {
    chooseLowerCase = "A"
    return chooseLowerCase
 }
 
}
 console.log(chooseLowerCase)

// function chosenCharacters() {
//   chooseLowerCase = includedCharacters(
//     lowerCase,
//     chooseLowerCase,
//     lowerBox
//   );
// }
// chosenCharacters()
// console.log(chosenCharacters)

  


  // return "hello"

 



  


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

