// Assignment Code
let generateBtn = document.querySelector("#generate");

//This gets the password length
function getPasswordLength() {
  let passwordLength = 0;
  let again = true;

  while(again) {
    passwordLength = prompt("How many characters would you like? Please choose between 8 to 128");
    
    if(passwordLength == null){
      again = false;
      
    } else if ((passwordLength < 8 || passwordLength > 128) || (isNaN(passwordLength))){
      alert("NO NO NO! Please ensure the number is between 8 and 128.");
      console.log('I said between 8 and 128')
      again = true;

    } else {
      again = false;
    } 
  }
  return passwordLength;
}

//Ask user what kind of characters they wish to have and if they choose none ensure that they choose one
function askUserCharTypePref() {
  let oneChar = true;
  let charSel = "";

  confirmUpperCase = confirm("Would you like UPPERCASE characters?");
  
  confirmLowerCase = confirm("Would you like lowercase characters?");
  
  confirmSpecial = confirm("Would you like special characters");
  
  confirmNumber = confirm("Would you like a number#?");

  if(!confirmUpperCase && !confirmLowerCase && !confirmSpecial && !confirmNumber){
    alert("Please ensure that you select at least one type of character!");
    askUserCharTypePref();
  } 
}

//create password based on user charater preference
function createPassword(passwordLength) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special = '!@#$%^&*()_+~?.';
  let number = '0123456789';
  let passwords = "";
  let selLength = 0;
  let selChar = "";
  let numCat = 0; 

  //based on user selection of type of character, calculate how many total characters we have to generate the password
  if (confirmUpperCase) {
    selLength += upperCase.length;
    selChar += upperCase;
    numCat++;
  }
  if(confirmLowerCase){
    selLength += lowerCase.length;
    selChar += lowerCase;
    numCat++;
  } 
  if(confirmSpecial){
    selLength += special.length;
    selChar += special;
    numCat++;
  }
  if(confirmNumber){
    selLength += number.length;
    selChar += number;
    numCat++;
  }

  //loop till you get all characters equal to passwordLength minus the numCat
  for(let i = 0; i < passwordLength - numCat; i++){
    passwords += selChar.charAt(Math.random() * selLength);
  }
  for (let j = numCat; j >=0; j--){
    if(confirmUpperCase){
      confirmUpperCase = false;
      passwords += upperCase.charAt(Math.random() * upperCase.length);
    }
    if(confirmLowerCase){
      confirmLowerCase = false;
      passwords += lowerCase.charAt(Math.random() * lowerCase.length);
    }
    if(confirmSpecial){
      confirmSpecial = false;
      passwords += special.charAt(Math.random() * special.length);
    }
    if(confirmNumber){
      confirmNumber = false;
      passwords += number.charAt(Math.random() * number.length);
    }
  }

  //This ensures that the password is scrambled and does not go in order or prefrence
  passwords = passwords.split('').sort(function(){return 0.5-Math.random()}).join('');
  return passwords;
}

//Generate password according to user input
function generatePassword() {
  let length = 0;
  let password = "";
  length = getPasswordLength();
  if(length == null){
    password = "";
    return password;
  }

  //Get character types
  askUserCharTypePref();

  //Create the password based on user character preference
  password = createPassword(length);
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  if(password != ""){
    passwordText.value = password;
  }else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);