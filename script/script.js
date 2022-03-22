$(document).ready(function(){
//user logic
$("#place-order").click(()=>{
  $(".order-table").toggle();
  // $("#place-order").toggle();
  // $("#add-another").toggle();
});
$("#place-order").click(()=>{

});




//busssiness logic

  
  // let totalPrice = 0;
  // console.log(crust,size,topping,delivery);





  //constructors
  $("#place-order").click(()=>{

    let crust = $('.crust-type option:selected').val();
    let size = $('.size-of-pizza option:selected').val();
    let topping = $('.topping option:selected').val();
    let delivery = $('.delivery option:selected').val();

    function Pizza (crust, size, topping, delivery){
      this.crust = crust;
      this.size = size;
      this.topping = topping;
      this.delivery = delivery;
      // this.number = number;
    }

    Pizza.prototype.getCrustPrice = function(){
      if (this.crust ==="Neapolitan Pizza"){
        return 150;
      }
      else if (this.crust ==="Wheat Thin Crust"){
        return 90;
      }
      else if (this.crust ==="Cheese  Crust"){
        return 100;
      } else{ return 80}
    };
    Pizza.prototype.getSizePrice = function(){
      if (this.size === "Large"){
        return 800; 
    }
     else if ( this.size ==="Medium"){
       return 600;
    } else {return 450}
    };
    
    Pizza.prototype.getToppingPrice = function(){
    if (this.topping ==="Chicken"){
      return 100
    }
    
    else if (this.topping === "Meat"){
      return 80
    }
    else if (this.topping === "Macon"){
      return 120
    }
    else {return 60}
    };
    Pizza.prototype.getDeliveryPrice =function(){
    if (this.delivery ==="Home"){
      return 200
    }
    else {return 0}
    };

    let newPizza = new Pizza(crust, size, topping, delivery);

    let totalPrice = newPizza.getCrustPrice() + newPizza.getSizePrice() +newPizza.getToppingPrice() +newPizza.getDeliveryPrice();

    $("#ordered-pizzas").append(`<tr>
    <td id="crust-type">${newPizza.crust}</td>
    <td id="crust-size">${newPizza.size}</td>
    <td id="topping">${newPizza.topping}</td>
    <td id="total">${totalPrice}</td>
    </tr>`)





    
  });



































})