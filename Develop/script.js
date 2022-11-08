// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

var passwordlength = prompt("How many characters would you like? Please choose between 8 to 128")

if (passwordlength <8 && passwordlength >128){
window.alert('Password length must be between 8 and 128 characters, please try again!')
return;
}

confirmUpperCase = confirm('Would you like UPPERCASE characters?')

confirmLowerCase = confirm('Would you like lowercase characters?')

confirmSymbols = confirm('Would you like symbols')

confirmNumbers = confirm('Would you like numbers#?')

  function generatePassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=?.";
        retVal = "";
    for (var i = 0, n = charset.passwordlength; i < passwordlength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);