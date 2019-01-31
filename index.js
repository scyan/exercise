// var fetch = require('node-fetch');

// function* gen(){
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
//   // console.log(result)
//   console.log(result.bio);
// }

// var g=gen()
// let result = g.next()

// result.value.then(function(data){
//   g.next(data);
// })

function delay(x){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(x+1)  
    },1000)
  })
}


function* gen(){
  const x = 1
  var y = yield delay(x);
  console.log(y)
  var z = yield delay(y);
  console.log(z)
}




function run(gen){
  let g = gen()
  let result = g.next()
  if(result.done){
    return 
  }
  return next(g,result)
}
function next(g,result){
  if(result.done){
    return;
  }
  result.value.then((res)=>{
    next(g,g.next(res))
  })
  // next(g,g.next(result.value))
}

run(gen)


