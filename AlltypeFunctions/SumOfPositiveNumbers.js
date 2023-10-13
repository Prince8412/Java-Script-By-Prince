let transactions = [1000, 2000, 3000, 4000, -898, -989]
let result = transactions.filter((positives)=>{
    return positives>0
}).map((acc, Value)=>{
    let sum = acc+Value
    return sum;
}, 0)

console.log(result)