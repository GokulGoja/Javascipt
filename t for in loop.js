let alien = {
      
    name : 'gok',
    prof : 'student',
    age  : 24,
    laptop: {
        brand: 'Hp',
        ram: 4
    }
}
for(let key in alien){       //we ae putting the key as the properties... for in loop used to print each property

    console.log(key);
}
for(key in alien ){

    console.log(key ,alien.prof);   // we can fetch the value of prof here 

}
for (key in alien){

    console.log(key ,alien[key]);  //here with each property their values can also be printed
}
 



