document.getElementById("buttonstart").addEventListener("click", startBudget);

function startBudget() {
var budget = document.getElementById("holidaybudget").value;
if (budget === ""){
  document.getElementById("prebudget").innerHTML = 
  "You must enter your holiday budget first";
return;
}
 else {
 var prices = document.getElementsByClassName("Price");
 var totalprices = 0;

for (var i = 0; i < prices.length; i++){
 if (prices[i].value !== "") {
  totalprices = totalprices + Number(prices[i].value);
}
  }

  var remaining = budget - totalprices;
  document.getElementById("prebudget").innerHTML = 
  "Here is your remaining budget of £" + remaining;
}
}
