// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices={
    no_meat:0,
    beef:1,
    bacon:1.1,
    chicken:0.9
  };

  // Augment the original object with another method
  maker.addMeat = function() {
    var meat_price=0;
    var el1= document.getElementById("meat").getElementsByTagName("input");

    //sum all the selected checkbox, capture their id which match the name of the property meatPrices.
    for(i=0;i<el1.length;i++){
      if(el1[i].checked){
      meat_price+= meatPrices[el1[i].id]; 
      }
    }
    return meat_price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);