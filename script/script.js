$(document).ready(function(){
//user logic
$("#place-order").click(()=>{
  $(".order-table").toggle();
  $("#place-order").toggle();
  $("#add-another").toggle();
});
$("#place-order").click(()=>{

});




//busssiness logic

  let crust = $('.crust-type option:selected').value();
  let size = $('.size-of-pizza option:selected').value();
  let topping = $('.topping option:selected').value();
  let delivery = $('.delivery option:selected').value();
  let orderNumber = 1;
  let totalPrice = 0;





  //constructors
  $("#place-order").click(()=>{

  
    function Pizza (crust, size, topping, delivery, number){
      this.crust = crust;
      this.size = size;
      this.topping = topping;
      this.delivery = delivery;
      this.number = number;
    }

    $("#crust-type").html($(".crust-type option:selected").text() + " - " + crust);
    $("#crust-size").html($(".size-of-pizza option:selected").text() + " - " + size);
    $("#topping").html($(".topping option:selected").text() + " - " + topping);
    $("#total").html("total");

  });



































})