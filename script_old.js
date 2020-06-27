$(document).ready(function(){
    let first_slot = ""
    let second_slot= ""
    let opt = ""

    function screen(numbers) {
        $( "#screen" ).empty();
        //alert(numbers);
        slot = numbers.slice(0,8);
        for (let char of slot){
            if (char == "."){char = "t";}
            $( "#screen" ).append("<img src='images/"+char+".gif'>");       
            $( "#screen" ).show().css('left', 90);} 
      }
    function miniScreen(first_slot,opt,second_slot){
        $( "#mini_screen" ).empty();
        if (opt == "/") {opt = "d"};
        slot = first_slot+opt+second_slot;
        for (let char of slot){
            if (char == "."){char = "t";}
            $( "#mini_screen" ).append("<img src='images/m"+char+".gif'>");       
            $( "#mini_screen" ).show().css('left', 95);
        }
    }

    function clean() {
        first_slot = "";
        opt = "";
        second_slot = "";}     

    function operation(message,opt){
        if (opt > "") {
            second_slot+= message;
            miniScreen(first_slot,opt,second_slot);
        }
        else {first_slot+= message;
            screen(first_slot);}                
    }

    $('#1').on('click',function(){
        message = "1";
        operation(message,opt);
    });

    $('#2').on('click',function(){
        message = "2";
        operation(message,opt);
    });    

    $('#3').on('click',function(){
        message = "3";
        operation(message,opt);
    });

    $('#4').on('click',function(){
        message = "4";
        operation(message,opt);
    });    

    $('#5').on('click',function(){
        message = "5";
        operation(message,opt);
    });   

    $('#6').on('click',function(){
        message = "6";
        operation(message,opt);
    });      
    
    $('#7').on('click',function(){
        message = "7";
        operation(message,opt);
    });   

    $('#8').on('click',function(){
        message = "8";
        operation(message,opt);
    });    

    $('#9').on('click',function(){
        message = "9";
        operation(message,opt);
    });  
    
    $('#0').on('click',function(){
        message = "0";
        operation(message,opt);
    });   

    $('#neg').on('click',function(){
        if (opt > ""){
            second_slot = eval(second_slot-second_slot*2);
            miniScreen(first_slot,opt,second_slot.toString());}
        else{
            first_slot = eval(first_slot-first_slot*2);
            screen(first_slot.toString())}});       

    $('#dot').on('click',function(){
        message = ".";
        operation(message,opt);
    });   

    $('#AC').on('click',function(){
        clean();
        $("#screen" ).hide();
        $("#mini_screen" ).hide();
    });   
    
    $('#minus').on('click',function(){
        opt = "-";
    });     
    
    $('#plus').on('click',function(){
        opt = "+";
    });  

    $('#multiply').on('click',function(){
        opt = "*";
    });   
    
    $('#divide').on('click',function(){
        opt = "/";
    });      

    $('#eq').on('click',function(){
        numbers = eval(first_slot+opt+second_slot);
        screen(numbers.toString());
        clean();
    });       

});