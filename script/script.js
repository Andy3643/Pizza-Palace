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

    
  });



































})