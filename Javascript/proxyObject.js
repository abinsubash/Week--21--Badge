const target = {
    name:'abin',
}
const handler = {
    get(obj,props){
        console.log(`getting Props ${props}`)
        return obj[props]
    },
    set(obj,props,value){
         console.log(`Setting ${props} to ${value}`);
         obj[props] = value;
        return true;
    }
}

const proxy = new Proxy(target,handler)
console.log(proxy.name)
proxy.age= 12
