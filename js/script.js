document.getElementById("buttonstart").addEventListener("click", startBudget);

function startBudget() {
  document.getElementById("letsgetstarted").innerHTML = "Now you're ready, let's begin adding some expenses!";
  var budget = document.getElementById("holidaybudget").value;
  document.getElementById("prebudget").innerHTML = 
  "Here is your pre-holiday budget £" + budget;
}

