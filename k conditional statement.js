// if statement
let num1 = 5;
let num2 = 4;

let result = num1 > num2;

if (result)
    console.log("num1 is greater"); // here the block of codes to be exicuted is num1 is greater

console.log("bye...");    


//if else statement

let num3 = 3;
let num4 = 4;

let resultt = num3 > num4;

if (resultt)
    console.log("num3 is greater");
else
    console.log("num4 is greater");    

console.log("bye...");    

// more than one statement 

 num3 = 3;
 num4 = 4;

// rather than putting this - let resultt = num3 > num4;

if (num3>num4)                         // we can simply write it like this 

    console.log("num3 is greater");
else{
    console.log("num4 is greater"); 
    console.log("yooo");           ///for putting more block of codes insdie the statements we have to put {} otherwise it will shows ouside the statement

}
console.log("bye...");    


// comapring 3 values wiht if , if else , else

let x = 3;
let y = 6 ;
let z = 5;

if (x>y && x>z){

    console.log("x is the greatest");
}
else if ( y>z){

    console.log("y is the greatest");
}
else{
    console.log("z is the greatest");
}
