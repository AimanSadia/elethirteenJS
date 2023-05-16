/* -----------------------ASSIGNMENT 9-11 -------------------------------- */

/* ===========QUESTION NO 01 =============*/

/* var userInput = prompt("Enter a character:");

if (!isNaN(userInput)) {
  document.write("The user enter a number.");
} else if (userInput === userInput.toUpperCase()) {
  document.write("The user enter an uppercase letter.");
} else if (userInput === userInput.toLowerCase()) {
  document.write("The user enter a lowercase letter.");
} else {
  document.write("The user enter neither a number nor a letter.");
} */
 
/* ===========QUESTION NO 02 =============*/

/* var userInput1 = parseInt(prompt("Enter the first integer:"));
var userInput2 = parseInt(prompt("Enter the second integer:"));

if (userInput1 > userInput2) {
  document.write("The larger number is: " + userInput1 );
} else if (userInput2 > userInput1) {
  document.write("The larger number is: " + userInput2);
} else {
  document.write("Both integers are equal.");
} */

/* ===========QUESTION NO 03 =============*/

/* var userInput = parseInt(prompt("Enter the number"));
if (userInput > 0) {
    document.write("The number is positive which is " + userInput );
  } else if (userInput < 0) {
    document.write("The  number is negative which is " + userInput);
  } else {
    document.write("Number is zero");
  } */

/* ===========QUESTION NO 04 =============*/


/* var character = prompt("Enter a character:");
    
   if (
      character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' |character === 'I' || character === 'O' || character === 'U'
    ) {
      var isVowel = true;
      document.write("The character is a vowel.");
    } else{
        var isVowel = false;
        document.write("The character is not a vowel.");
    } 
     */

    /* ===========QUESTION NO 05 =============*/

/*     var correctPassword = "myPassword";

    var userPassword = prompt("Enter your password:"); 
    
    if (userPassword.length === 0 ) {
      alert("Please enter your password."); 
    } else if (userPassword === correctPassword) {
      alert("Correct! The password you entered matches the original password."); 
    } else {
      alert("Incorrect password.");
    } */
    

/* ===========QUESTION NO 06 =============*/
  
/* var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";

}
document.write(greeting); */

/* ===========QUESTION NO 07 =============*/

/* var timeInput = parseInt(prompt("Enter the time in 24-hour clock format"));

var hour = Math.floor(timeInput / 100);
var minute = timeInput % 100;
var period;

if (hour >= 0 && hour <= 12) {
  period = "AM";
} else if (hour >= 12 && hour <= 23) {
  period = "PM";
} else {
    document.write("Invalid data");
}

document.write("The time in 12-hour clock format is: " + hour + ":" + (minute < 10 ? "0" + minute : minute) + " " + period); */
