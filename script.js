var money = 10.00;
var coke = 0;
var chips = 0;
var snacks = ["coke", "chips"];
var prices = [1.5, 1.25];

function elem(str){
  return document.querySelector(str);
}

function update(target, val){
  elem(target).innerHTML = val;
}

function purchase(inpt){
  snacks.forEach(function(val, idx){
    var snack = snacks[idx];
    var price = prices[idx];
    
    if(inpt === snack){
      money -= price;
      if(snack === "coke"){
        coke++;
      } else {
        chips++;
      }
      
      update(".money", `I have $${money}`);
      update(".message", `You have bought ${snack}, costing $${price}`);
    }
  });
}

function bought(item){
  
}

elem(".buy").addEventListener("click", function(){
  var buying = elem("input").value;
  
  if(money != 0 && money >= 1.25){
    purchase(buying);
  } else {
    update(".message", "Sorry you do not have enough funds to purchase this.");
  }
  update(".bought", "Currently Bought: " + coke + " coke and " + chips + " chips.")
});