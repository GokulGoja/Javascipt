let x = Number("123 goj")

console.log(x,typeof x)

x = parseInt("123 goj")

console.log(x,typeof x)

x = parseInt("goj 123")   // parseint operator only works if the number comes first

console.log(x,typeof x)
