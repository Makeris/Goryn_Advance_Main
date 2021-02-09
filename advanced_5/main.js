'use strict'

// console.log('a');

// Завдання 1.
 
// Напишіть функцію яка приймає одне число. При першому виклику, вона його запам'ятовує, при другому - сумує з попереднім і так далі. Для виконання цього завдання використайте замикання. 
// Наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236



function number() {

  
    let zero = 0;
    function zeroIncrement(num) {
        zero += num;
        return zero
    }
    return zeroIncrement
}


let counter = number();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));




 
// ------------------------------------------------------------------------------------------

// Завдання 2.
 
// Напишіть модуть який буде обробляти покупку товарів. В модулі має бути тільки логіка, весь зв’язок з html, тобто кліки, зміна даних в html робити там не потрібно. Все має працювати. Можете добавити додатковий функціонал від себе.




// ------------------------------------------------------------------------------------------




const shop = (function(){

    let balance = 1000;

    let products = {
        beer: {
            count: 100,
            price: 40
        },
        vine: {
            count: 100,
            price: 50
        },
        pepsi: {
            count: 50,
            price: 30 
        },
    }

    function sell(name, count){
        // remove items from storage
        // 
        products[name].count -= count;
        // increase balance by sell
        // 
        balance += count * products[name].price;
    }

    function storage(name) {
        return products[name].count;
    }

    function bank(){
        return balance;
    }

    return {
        sell: sell,
        storage: storage,
        bank: bank
    }


}());


let getSel = x => document.querySelector(x);
let form = document.forms['radio_buttons_form'];

let a =  document.querySelectorAll('.radio_select');

let oldBalnce = shop.bank();
let totalPrice = null;
$(function(){


    $('#balance').val(shop.bank());
    $('#beer').val(shop.storage('beer'));
    $('#vine').val(shop.storage('vine'));
    $('#pepsi').val(shop.storage('pepsi'));

    let count = 0;
    
    $("#count").val(count);
    // count = $("#count").val();
    $('.inc_count').click(function(){
       if(count >= 0) {
            count++
            $("#count").val(count);
       }
    });
    $('.dec_count').click(function(){
        if(count > 0) {
            count--
            $("#count").val(count);
       }
    });

   $('.add_btn').click(function(){
       count = $("#count").val();
       if(count > 0) {

           a.forEach(element => {
               if(element.checked == true) {
                   console.log(element.value);
               }  
           });

           if(shop.storage(form.radio.value) >= count) {

               getSel('.area_count').innerHTML += `<div>` + count  + " of " + form.radio.value + `</div>`;
        
               shop.sell(form.radio.value, count);
           } else {
               alert(`Not enoth product, count of ${form.radio.value} at storage - ${shop.storage(form.radio.value)}!`)
           }
    
       }



   })


   $('.buy_btn').click(function() {
    
    if( getSel('.area_count').innerHTML != '') {

        totalPrice = shop.bank() - oldBalnce;
       
    
        $('#balance').val(shop.bank());
        $('#beer').val(shop.storage('beer'));
        $('#vine').val(shop.storage('vine'));
        $('#pepsi').val(shop.storage('pepsi'));
    
        $('.textarea_total').val('');
    
        getSel('.area_total').innerHTML = getSel('.area_count').innerHTML;
        getSel('.area_count').innerHTML = '';
        getSel('.area_total').innerHTML += `Total price is ${totalPrice}grn`;
        oldBalnce =  shop.bank();
    }


   })



   



})

