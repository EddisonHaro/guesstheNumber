
document.write("<body>");

var pcnumber=Math.floor(Math.random() * 100);
//var pcnumber=Math.floor(Math.random() * 10);
var usernumber=0;
var attempts=0;

document.write("<h3>");
document.write("The chosen number is " + pcnumber);
document.write("</h3>");




document.write("<h1>");
document.write("Hello!!!");
document.write("</h1>");

do{


    usernumber=prompt("What is the number,guess the number between 0 and 100???");

    if(usernumber>pcnumber){

        alert("the number you entered is higher than the chosen number");
    }
    else if(usernumber<pcnumber){

        alert("the number you entered is less than the chosen number");
    }
    

    attempts++;
}while(usernumber!=pcnumber);

if(usernumber=pcnumber){
    document.write("<h1>");
    document.write("You WIN!!!!!!!!!!!!!");
    document.write("<br>");


//////////////////

var message=document.getElementById("c_message");
var attemptsNumber=document.getElementById("c_attempts");


    message.value="You got it in";
    message.style.fontSize="25px"
    message.style.color="blue";


    attemptsNumber.value=attempts;
    attemptsNumber.style.fontSize="25px";
    attemptsNumber.style.color="red"
   
/////////////////////////////////////////
    document.write("You got it in,  "+ attempts + " attempts");
    
}

document.write("</body>");