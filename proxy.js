var handle={
  get: function(obj,prop){
    console.log(obj,prop,value)
  },
  set: function(obj,prop,value){
    console.log(obj,prop,value)
  }
}

let person = {
  name:'scyan',
  gender:'female'
}

let me = new Proxy(person,handle)

me.name='haha'
console.lg(me.name)