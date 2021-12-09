let  alien ={
        
      name: 'Goj',
      tech : 'JS',
      laptop :{
           
        cpu: 'i5',
        ram: 6,
        brand: 'dell'

                   
      }  

}
console.log(alien.laptop.brand);
console.log(alien['laptop']['brand']);

console.log(alien.laptop.brand1?.length)   //? operator(ternary operator) will check whether the brand1 is valid if not it shows undefiend ratherthan error

delete alien.laptop;      // delete the keyword used to simply delete the properties

console.log(alien);