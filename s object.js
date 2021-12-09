let alien = { };
console.log(alien , typeof alien);

let student ={                          // student is the object with some properties
     
    name : 'Gokul' ,                    // these are the properties of the object

    tech : "JS"  ,

    'work exp'  : 2
        

}
console.log(student);                  //here the whole object will be printed

console .log(student.name);             // dot operator helps to define the property to be printed

console.log(student['tech']);           // square brackets with single quotes also helps to print the property

console.log(student['work exp']);        //property with 2 words can only be put in the []

let input = 'name'                     //assuming user putting input of properties

console.log(student[input]);           // it can also be printed 