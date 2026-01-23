
// When the button is pressed, the process begins. 
document.getElementById("buttonstart").addEventListener("click", startBudget);


// If you press the button before entering in a number, a message will appear instructing you to. 
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

 // These functions will calculate the total for the expenses outlined in the table.
for (var i = 0; i < prices.length; i++){
 if (prices[i].value !== "") {
  totalprices = totalprices + Number(prices[i].value);
}
  }

  // That total will then be substracted from the pre-holiday budget. 
  var remaining = budget - totalprices;
  document.getElementById("prebudget").innerHTML = 
  "Here is your remaining budget of £" + remaining;
}
}
