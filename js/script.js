document.getElementById("buttonstart").addEventListener("click", startBudget);

function startBudget() {
  var budget = document.getElementById("holidaybudget").value;
  document.getElementById("letsgetstarted").innerHTML = "Your holiday budget is £" + budget + ". Now you're ready, let's begin adding some expenses!";
}
