function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings:
  this.price = 0;
}

Pizza.prototype.getPrice = function () {
  this.toppings = forEach(function(veggie){
    this.price += 1;
  });
  if (this.size === large ){
    this.price += 30;
  } else if (this.size === medium){
    this.price += 20;
  } else if (this.size === small) {
    this.price += 10;
  }
  return this.price;
};

$(document).ready(function(){

});
