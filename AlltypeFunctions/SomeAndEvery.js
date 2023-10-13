const transactions = [1000, 2000, 3000, 400, -880, -800];
const resultsome = transactions.some((n)=>{
    return n>0
})
console.log(resultsome)

const resultevery = transactions.every((n)=>{
    return n<0
})
console.log(resultevery)