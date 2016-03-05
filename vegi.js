// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var vegiPrices={
    no_vegi:0,
    tomato:0.5,
    lettuce:0.4,
    onion:0.3
  };

  // Augment the original object with another method
  maker.addVegi = function() {
    var vegi_price=0;
    var el1= document.getElementById("vegi").getElementsByTagName("input");

    //sum all the selected checkbox, capture their id which match the name of the property meatPrices.
    for(i=0;i<el1.length;i++){
      if(el1[i].checked){
      vegi_price+= vegiPrices[el1[i].id]; 
      }
    }
    return vegi_price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);