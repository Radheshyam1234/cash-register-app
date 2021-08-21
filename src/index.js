var billAmount = document.querySelector("#billamount");
var cashgiven = document.querySelector("#cashgiven");
var calculateButton = document.querySelector("#btn-calculate");
var nextButton = document.querySelector("#btn-next");
var output = document.querySelector("#outputTxt");
var outputBox = document.querySelector("#output_div");
var cashgivenDiv=document.querySelector(".cashgiven_div");
 


var Avalcurrencies = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];



function showCashgivenInput(){
  var bill = parseInt(billAmount.value);
  if(!bill){
    output.innerText = "Enter the bill amount first!";
  }
  else{
    cashgivenDiv.style.display="block"
    nextButton.style.display="none"
    
  }
  
}

function calculate() {
   
  var bill = parseInt(billAmount.value);
  var given = parseInt(cashgiven.value);
  var balance = given - bill;
  
  if(!bill||!given){
    output.innerText = "Please enter both the amounts";
  }
else
    {
      if (bill == given) {
    output.innerText = "Zero Balance";
     } 
  else if (bill > given) {
    output.innerText = "You have not given a sufficient amount!";
    }
   else {
   
    output.innerText = " Available Balance = ₹ " + balance + "\n"+"\n";
    Avalcurrencies.map((money) => {
      var notes = Math.floor(balance / money);
      balance = balance - money * notes;
      if (notes != 0) {
        output.innerText += "₹" + " " + money + " " + "x" + " " + notes + "\n";
      }
    });
  
  }
}
}

calculateButton.addEventListener("click", calculate);

nextButton.addEventListener("click", showCashgivenInput);
