let num = [1,2,3,4,5,6,7,8]
let result = num.reduce((acc, value)=>{
    let updatedSum = acc+value
    return updatedSum
}, 0)
console.log(result)


let product = num.reduce((acc,value)=>{
    let updatedProduct = acc*value
    return updatedProduct
}, 0)
console.log(updatedProduct)