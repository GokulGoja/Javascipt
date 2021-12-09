let alien ={

    name : 'GOj',
    prof: {
        sub: 'student',
        main : 'programmer'
    },
    computer :{

        ram: 6,
        brand: 'lenovo'
    }
}
for(let key in alien){
    
     console.log(key,alien[key]);
   if(typeof alien[key]=== 'object')
    {
        for(let k in alien[key])

        console.log(k,alien[key][k]);
    }
}