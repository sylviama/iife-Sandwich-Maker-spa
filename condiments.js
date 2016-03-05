// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices={
    no_condiments:0,
    salt:0.1,
    pepper:0.2,
    oil:0.3
  };

  // Augment the original object with another method
  maker.addCondiments = function() {
    var condiments_price=0;
    var el1= document.getElementById("condiments").getElementsByTagName("input");

    //sum all the selected checkbox, capture their id which match the name of the property meatPrices.
    for(i=0;i<el1.length;i++){
      if(el1[i].checked){
      condiments_price+= condimentsPrices[el1[i].id]; 
      }
    }
    return condiments_price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);