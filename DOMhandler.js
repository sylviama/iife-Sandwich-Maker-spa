var chooser = document.getElementById("choose");
chooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var topping = event.target.id;
  document.getElementById("output").innerHTML+=topping+" ";
});


// Output the price of the topping chosen
document.getElementById("btn").addEventListener("click",price);

function price(){
  var finalSandwichPrice=SandwichMaker.addMeat()+ SandwichMaker.addBread()+SandwichMaker.addCheese()+SandwichMaker.addCondiments()+SandwichMaker.addVegi();
  document.getElementById("price").innerHTML=finalSandwichPrice;
}
