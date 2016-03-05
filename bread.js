// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices={
    italian:0.4,
    white:0.5,
    wheat:0.6
  };

  // Augment the original object with another method
  maker.addBread = function() {
    var bread_price=0;
    var el2= document.getElementById("bread").getElementsByTagName("input");

    //sum all the selected checkbox.
    for(i=0;i<el2.length;i++){
      if(el2[i].checked){
      bread_price+= breadPrices[el2[i].id]; 
      }
    }
    return bread_price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);