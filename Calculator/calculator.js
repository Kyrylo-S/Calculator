var One = 0 ;
var Two = 0 ;
var Three = 0 ;
var Four = 0 ;
var Five = 0 ;
var Six = 0 ;
var Seven = 0 ;
var Eight = 0 ;
var Nine = 0 ;
var Zero = 0;
var multiply = 0;
var multiplyOne = 0;
var multiplyTwo = 0;
var result = 0;
var done = false;
var varPlusMinus = false;
var divide = 0;
var plus = 0;
var minus = 0;
var equal = 0;
var firstNumber = 0;
var secondNumber = 0;


function concatOne(one)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   One+=one;
   document.getElementById("inputLabel").innerHTML+=one;      
}
function concatTwo(two)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Two+=two;
   document.getElementById("inputLabel").innerHTML+=two;      
}
function concatThree(three)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Three+=three;
   document.getElementById("inputLabel").innerHTML+=three;      
}
function concatFour(four)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Four+=four;
   document.getElementById("inputLabel").innerHTML+=four;      
}
function concatFive(five)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Five+=five;
   document.getElementById("inputLabel").innerHTML+=five;      
}
function concatSix(six)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Six+=six;
   document.getElementById("inputLabel").innerHTML+=six;      
}
function concatSeven(seven)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Seven+=seven;
   document.getElementById("inputLabel").innerHTML+=seven;      
}
function concatEight(eight)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Eight+=eight;
   document.getElementById("inputLabel").innerHTML+=eight;      
}
function concatNine(nine)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Nine+=nine;
   document.getElementById("inputLabel").innerHTML+=nine;      
}
function concatZero(zero)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Zero+=zero;
   document.getElementById("inputLabel").innerHTML+=zero;      
}
function concatDot(dot)
{
   if (done==true)
   {
      document.getElementById("inputLabel").innerHTML="";
      done=false;
      multiply=1; 
   } 
   Dot=dot;
   document.getElementById("inputLabel").innerHTML+=dot;      
}
function concatErase()
{
   document.getElementById("inputLabel").innerHTML="";    
   varPlusMinus = false;
} 
function squareRoot()
{   
      multiply = document.getElementById("inputLabel").innerHTML; 
      multiply = Math.sqrt(multiply);    
      document.getElementById("inputLabel").innerHTML = multiply;
      done = true;
      varPlusMinus = false;
}
function squareEqual()
{   
      multiply = document.getElementById("inputLabel").innerHTML; 
      multiply = multiply**2 ;    
      document.getElementById("inputLabel").innerHTML = multiply;
      done = true;
      varPlusMinus = false;
}
function plusMinus(m)
{       
      multiply = document.getElementById("inputLabel").innerHTML;
      document.getElementById("inputLabel").innerHTML = " ";
      multiply = multiply*m;
      console.log(multiply);
      document.getElementById("inputLabel").innerHTML = multiply;  
      varPlusMinus=true;   
}
function concatMultiply()
{          
   if (varPlusMinus ==false && (done==false || equal==0))
   {
      concatEqual();
   }  
   multiply = document.getElementById("inputLabel").innerHTML;     
   document.getElementById("inputLabel").innerHTML = " ";
   done = false; 
   plusMinus = false;    
}    

function concatDivide()
{  
    divide = document.getElementById("inputLabel").innerHTML;
    document.getElementById("inputLabel").innerHTML = " "; 
    plusMinus = false;      
}

function concatPlus()
{  
    plus = document.getElementById("inputLabel").innerHTML;
    document.getElementById("inputLabel").innerHTML = " ";
    plusMinus = false;       
}

function concatMinus()
{     
    concatEqual();   
    document.getElementById("inputLabel").innerHTML = " "; 
    if (done>0)  
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      equal = plus+secondNumber;
      document.getElementById("inputLabel").innerHTML=equal; 
      done = 0;  
      plusMinus = false;
    }  
}

function concatEqual()
{
    if(multiply && !divide && !plus && !minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      equal = multiply*secondNumber;   
      console.log(multiply);   
      document.getElementById("inputLabel").innerHTML=equal;      
      done = true;
      plusMinus = false;
    }       
    if(!multiply && divide && !plus && !minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;     
      equal = divide/secondNumber;
      document.getElementById("inputLabel").innerHTML=equal;   
      done = 1; 
      plusMinus = false;        
    } 
    if(!multiply && !divide && plus && !minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      equal = plus+secondNumber;
      document.getElementById("inputLabel").innerHTML=equal; 
      done = 1; 
      plusMinus = false;     
    }
    if(!multiply && !divide && !plus && minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      equal = minus-secondNumber;
      document.getElementById("inputLabel").innerHTML=equal;   
      console.log(equal);
      done = 1;   
      plusMinus = false; 
    }            
}
