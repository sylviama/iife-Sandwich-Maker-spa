// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices={
    no_cheese:0,
    american:0.7,
    blue:0.8,
    cheddar:0.6
  };

  // Augment the original object with another method
  maker.addCheese = function() {
    var cheese_price=0;
    var el1= document.getElementById("cheese").getElementsByTagName("input");

    //sum all the selected checkbox, capture their id which match the name of the property meatPrices.
    for(i=0;i<el1.length;i++){
      if(el1[i].checked){
      cheese_price+= cheesePrices[el1[i].id]; 
      }
    }
    return cheese_price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);