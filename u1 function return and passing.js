// return in fn

function student ()

{
    return 'Hello world'; // here return keyword is used for the fn execution is stopped and return the value 

}

let str = student ();   //here the retuned value is assigned in a variable

console.log(str);


// passing a value in fn

function work (name)
{
     return `Hello ${name}`
}

let name = "goj"

let strr =  work(name)

console.log(strr);