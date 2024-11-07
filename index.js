let user = prompt("Hello Friend, please provide your name")
let title= prompt( " Are you a man or a woman? ")
if (title.toLowerCase() == "man"){
  title="Mr. "
}
  else if(title.toLowerCase() == "woman"){
    title="Mrs. "
  }
  else{
    title="Hello "
  }

if ( user.length<1){
  user="Anonymous"
  alert( "I am okay keeping you anonymous")
}
else{
alert(title+user + " you have received this message because you have been chosen to open an important vault.")
}
let acceptance = (prompt(' Are you willing to recieve the code and open the vault. Answer "YES" if you are ready or "NO" if you are not!'))
if (acceptance.toLowerCase()[0] === "y") {
  alert("Great! here is the number 10-40-39")
  let test=prompt("please use the codes now to open the vault");
  if ( test=="10-40-39")
  {alert ("The vault is OPENED!")}
  else{
    alert("You entered the wrong code. Bye-Bye! Refresh the page to start again")
  }
}
else {
  alert("I respect your choice. If you change your mind, comeback and refresh the page!"); 
}
