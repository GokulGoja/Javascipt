// reverse the number 1258932


let num = 1258932;
let num2= "0";  // string
while(num>0)
{ 
    let remainder = num%10;
    num = parseInt(num/10);
    num2= String (num2 + remainder);  //string operator to concatinate string and a number
    
}
console.log(Number(num2));

//another method

let x = 1258932;

let rev=0

while (x>0)
{
     x1=x%10

     rev=rev *10 +x1;

     x=parseInt (x/10)

}
console.log(rev);