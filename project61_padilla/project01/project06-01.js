"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Jorge Padilla
      Date:   04/10/2025

      Filename: project06-01.js
*/

// set variables submitButton, pwd, and pwd2 re
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

//step4 add event listener for click event occuring with submitButton
//that runs anonymous function
document.submitButton.addEventListener("click", function);

//step 5: create anonymouse function with if else structure
//displaying different error messages.
function
{
     //if pwd field fails pattern match display message:
      //"your password must be at least 8 characters with at least
      // one letter and one number".
      if(pwd.validity.patternMismatch)
            {
                 
                  pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
                  
            }
            //if pwd not equal to pwd2 display error message
            else if(pwd != pwd2)
            {
                  pwd.setCustomValidity("Your password must match");
            
            }
            else
            {
                  pwd2.setCustomValidity("");
            } 

}




