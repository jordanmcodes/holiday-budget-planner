document.getElementById("buttonstart").addEventListener("click", startBudget);

function startBudget() {
var budget = document.getElementById("holidaybudget").value; 

if (budget === ""){
  document.getElementById("prebudget").innerHTML = "You must enter your holidaay budget first";
return;

}

  document.getElementById("letsgetstarted").innerHTML = "Now you're ready, let's begin adding some expenses!";
  document.getElementById("prebudget").innerHTML = 
  "Here is your pre-holiday budget £" + budget;
  }

