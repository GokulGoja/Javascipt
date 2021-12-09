let x = Boolean(5)

    console.log(x, typeof x)      //bollean truthy value because of numbers

let y = Boolean(0)

console.log(y, typeof y)            //bollean falsy value because of 0

let zz = Boolean("goja")

console.log(zz,typeof zz)          //boolean truthy value because of string 



let z = 5

z=!z                               // "!" - not operator will covert the number or string to boolean with a false output

console.log(z, typeof z)

let jj = "gg"

jj=!jj

console.log(jj,typeof jj)

let gog = 0

gog = !gog

console.log(gog, typeof gog)       // here the not operator convert the boolean falsy value ( 0 ) to true (as the fn. of not operator is to coonvert the true to false and viceversa  )