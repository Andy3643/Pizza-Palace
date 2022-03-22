let totalBill = []

$(document).ready(function(){
//user logic
$("#place-order").click(()=>{
  $(".order-table").show();
   $("#place-order").hide();
   $("#add-another").show();
});
$("#check-out").click(()=>{
  $(".show-check-out").show();
})

//busssiness logic
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
    totalBill.push(totalPrice) // pushing the totals into the empty array
    $("#ordered-pizzas").append(`<tr>
    <td id="crust-type">${newPizza.crust}</td>
    <td id="crust-size">${newPizza.size}</td>
    <td id="topping">${newPizza.topping}</td>
    <td id="total">${totalPrice}</td>
    </tr>`)

  });
  //add order function
  $("#add-another").click(()=>{

    let crust = $('.crust-type option:selected').val();
    let size = $('.size-of-pizza option:selected').val();
    let topping = $('.topping option:selected').val();
    let delivery = $('.delivery option:selected').val();

    function Pizza (crust, size, topping, delivery){
      this.crust = crust;
      this.size = size;
      this.topping = topping;
      this.delivery = delivery;
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
    totalBill.push(totalPrice) // pushing the totals into the empty array
    $("#ordered-pizzas").append(`<tr>
    <td id="crust-type">${newPizza.crust}</td>
    <td id="crust-size">${newPizza.size}</td>
    <td id="topping">${newPizza.topping}</td>
    <td id="total">${totalPrice}</td>
    </tr>`)


  });

  $("#check-out").click(()=>{
    let sum = 0;
    parseInt(totalBill);
    for(items of totalBill){
      sum += items
    }
    
    $(".show-check-out h3 span").html(sum);

  })
  
   


































})