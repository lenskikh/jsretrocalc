$(document).ready(function(){
    let first_slot = ""
    let second_slot= ""
    let opt = ""

    function screen(numbers) {
        $( "#screen" ).empty(); //clean div from old digits
        slot = numbers.slice(0,8);
        for (let char of slot){
            if (char == "."){char = "t";} //dot for screen
            $( "#screen" ).append("<img src='images/"+char+".gif'>");       
            $( "#screen" ).show().css('left', 90);} 
      }
    function miniScreen(first_slot,opt,second_slot){
        screen(second_slot); //clean&show for second operation
        $( "#mini_screen" ).empty(); //clean div from old digits       
        if (opt == "/") {opt = "d"}; //devide for screen
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
        second_slot = "";
    }     

    function operation(message,opt){
        if (opt > "") {
            //if first symbol is 0
            if (second_slot.slice(0,1)=="0"){
                second_slot = second_slot.slice(1)}
            else {
                second_slot+= message;
                miniScreen(first_slot,opt,second_slot);}
        }
        else {if (first_slot.slice(0,1)=="0"){
            first_slot = first_slot.slice(1)};
            first_slot+= message;
            screen(first_slot);}                
    }

    function checkFool(){
        if (first_slot == ""){clean()}
        else{miniScreen(first_slot,opt,second_slot);}
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

    //negative number
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
        checkFool();
    });     
    
    $('#plus').on('click',function(){
        opt = "+";
        checkFool();
    });  

    $('#multiply').on('click',function(){
        opt = "*";
        checkFool();
    });   
    
    $('#divide').on('click',function(){
        opt = "/";
        checkFool();
    });      

    $('#eq').on('click',function(){
        numbers = eval(first_slot+opt+second_slot);
        screen(numbers.toString());
        clean();
    });      
    
    $('#prc').on('click',function(){
        numbers = eval(first_slot/100*second_slot);
        screen(numbers.toString());
        clean();
    });    

    $('#le').on('click',function(){
        $( "#mini_screen" ).empty(); //clean div from old digits   
        numbers = eval(first_slot*0.62137);      
        screen(numbers.toString());
        $( "#mini_screen" ).append("<img src='images/miles.gif'>");       
        $( "#mini_screen" ).show().css('left', 95);
        clean();        
    });  

    $('#vol').on('click',function(){
        $( "#mini_screen" ).empty(); //clean div from old digits   
        numbers = eval(first_slot/3.785411784);        
        screen(numbers.toString());
        $( "#mini_screen" ).append("<img src='images/mv.gif'>");       
        $( "#mini_screen" ).show().css('left', 95);
        clean();        
    });  
    
    $('#weight').on('click',function(){
        $( "#mini_screen" ).empty(); //clean div from old digits   
        numbers = eval(first_slot*2.2046);        
        screen(numbers.toString());
        $( "#mini_screen" ).append("<img src='images/weight.gif'>");       
        $( "#mini_screen" ).show().css('left', 95);
        clean();        
    });      

    $('#temp').on('click',function(){
        $( "#mini_screen" ).empty(); //clean div from old digits   
        numbers = eval(first_slot*1.8+32);        
        screen(numbers.toString());
        $( "#mini_screen" ).append("<img src='images/celsius.gif'>");       
        $( "#mini_screen" ).show().css('left', 95);
        clean();        
    });  
    
    $('#root').on('click',function(){
        $( "#mini_screen" ).empty(); //clean div from old digits 
        counter = 1  
        root = 0
        while (root < first_slot){
            counter+= 0.1
            root = counter * counter
        }
        numbers = counter        
        screen(numbers.toString());
        //$( "#mini_screen" ).append("<img src='images/celsius.gif'>");       
        //$( "#mini_screen" ).show().css('left', 95);
        clean();        
    });        

});