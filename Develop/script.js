// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
function generatePassword() {
    var numbers = "0123456789"
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var specialChar = "!@#$%^&*()"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var userPossibilities = ""
    var selectedPassword = ""
  //prompt password for lenght
  var userLenght = prompt("How long do you want your password?")
  //prompt capital letters
  var userCap = confirm("Do you want capital letters?")
  //prompt for special letters
  var userSpecial = confirm("Do you want special characters?")
  //prompt for numbers
  var userNumbers = confirm("Do you want numbers?")
  //prompt for lowercase
  var userLower = confirm("Do you want lowercase letters?")
  if (userCap === true) {
    userPossibilities = userPossibilities.concat(uppercase)
  }
  if (userSpecial === true) {
    userPossibilities = userPossibilities.concat(specialChar)
  }
  if (userNumbers === true) {
    userPossibilities = userPossibilities.concat(numbers)
  }
  if (userLower === true) {
    userPossibilities = userPossibilities.concat(lowercase)
  }

  for (var i = 0; i < userLenght; i++) {
   var selectedChar = Math.floor(Math.random() * userPossibilities.length);
   selectedPassword = selectedPassword.concat(userPossibilities[selectedChar])
  }
  return selectedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
