function cenaZaPotwora() {
    
   var typ = document.getElementById("potwory").value;
   var mnoznik;
   
   switch(parseInt(typ)){
       case 0:
           mnoznik = 3000;
           break;
        case 1:
           mnoznik = 50;
           break;
           
        case 2:
           mnoznik = 300;
           break;
       
        case 3:
           mnoznik = 100;
           break;
           
        case 4:
           mnoznik = 150;
           break;
           
        case 5:
           mnoznik = 400;
           break;
           
        case 6:
           mnoznik = 100;
           break;
           
        case 7:
           mnoznik = 200;
           break;
           
        case 8:
           mnoznik = 100;
           break;
           
        case 9:
           mnoznik = 170;
           break;
           
        default :
            mnoznik = 0;
            break;
   }
   
   var y = document.getElementById("il").value;
   
   document.getElementById("cena").value = mnoznik*y + " orenów";   
}


    $(document).ready(function(){
                   $(".books1").click(function (){
                       $("#b1").slideToggle(500);
                   });

                   $(".books2").click(function (){
                       $("#b2").slideToggle(500);
                   });

                   $(".books3").click(function (){
                       $("#b3").slideToggle(500);
                   });

                   $(".books4").click(function (){
                       $("#b4").slideToggle(500);
                   });

                   $(".books5").click(function (){
                       $("#b5").slideToggle(500);
                   });
               });