var handle={
  get: function(obj,prop){

    console.log('get',obj,prop)
  },
  set: function(obj,prop,value){
    console.log('set',obj,prop,value)
  }
}

let person = {
  name:'scyan',
  gender:'female'
}

let me = new Proxy(person,handle)

// me.name='haha'
console.log(me.name)