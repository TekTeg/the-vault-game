// Created a variabel using the keyword let
let user = prompt("Hello Friend, please provide your name")
let title = prompt(" Are you a man or a woman? ")
if (title.toLowerCase() == "man") {
  title = "Mr. "
}
else if (title.toLowerCase() == "woman") {
  title = "Mrs. "
}
else {
  title = "Hello "
}

if (user.length < 1|| title.length<1) {
  user = "Anonymous"
  alert("I am okay keeping you anonymous")
}
else {
  alert(title + user + " you have received this message because you have been chosen to open an important vault.")
}
const acceptance = (prompt(' Are you willing to recieve the code and open the vault. Answer "YES" if you are ready or "NO" if you are not!'))
if (acceptance.toLowerCase()[0] === "y") {
  alert("Great! Here is the number 10-40-39")
  alert("Hi I am the vault keeper. I need to know if you have the code.")
  alert(" What two numbers when added together give the first code")
  let numOne = Number(prompt("Enter the first number?"))
  let numTwo = Number(prompt("Enter the second number?"))

  if (numOne + numTwo === 10) {
    alert("Good you are clear with the first code. Let's work on the second code. What two numbers when multiplied with each other give the second code")
    numOne = Number(prompt("Enter the first number?"))
    numTwo = Number(prompt("Enter the second number?"))
    if (numOne * numTwo === 40) {
      alert("Good you are clear with the second code too. One more to go. What number when subtracted from the second code gives the third code")
      numOne = Number(prompt("Enter the number?"))
      
      if (40- numOne === 39) { alert("The vault is OPENED!") }
      else { alert("You entered the wrong code. Bye-Bye! Refresh the page to start again") }
    }
      else { alert("You entered the wrong code. Bye-Bye! Refresh the page to start again") }

  }
    else { alert("You entered the wrong code. Bye-Bye! Refresh the page to start again") }

}
  else {
    alert("I respect your choice. If you change your mind, comeback and refresh the page!")}
  