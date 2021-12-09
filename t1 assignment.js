//print one by one in object inside an object

let alien={
      name : 'goj',
      prof : 'student',
      laptop: {

        brand:'hp',
        ram : 6
      } 
}


for (let key in alien)
{
    
  console.log(key , alien[key]);
  if(typeof alien[key]=== "object"){

  for (let k in alien[key]){

    console.log(k,alien[key][k]);
  }
  }
}


