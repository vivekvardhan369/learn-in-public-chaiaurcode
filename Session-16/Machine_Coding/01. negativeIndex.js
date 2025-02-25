


const user = {
    name : "vivek",
    age : 25,
    password : "123"
}

const proxyUser = new Proxy(user,{
    get(target,prop){
        if(prop === 'password'){
            throw new Error("Access Denied")
        }
        
        return target[prop]
    },
    set(target,prop,user){

    }
})

// console.log(proxyUser.password);



function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index]
            }
            return target[index]
        },
        set(target,prop,value){
            const index = Number(prop)
            if(index < 0){
                target[target.length+index] = value
            }else {
                target[index] = value
            }
            return true
        }
    })
}

let arr = [1,2,3,4,5]
 let newArr = negativeIndex(arr)

 console.log(arr[-1]);
 
 console.log(newArr[-2]);

 newArr[-1] =  25
 console.log(newArr);
 console.log(arr);
 
 // Prepare a polyfill of proxy

