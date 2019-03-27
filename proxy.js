var handle={
  get: function(obj,prop){

    console.log('get',obj,prop)
    return obj[prop];
  },
  set: function(obj,prop,value){
    obj[prop] = value
    console.log('set',obj,prop,value)
    return true;
  }
}

let person = {
  name:'scyan',
  gender:'female'
}

let me = new Proxy(person,handle)

me.name='haha'
console.log(me.name)