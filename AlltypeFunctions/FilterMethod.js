

///////////////////////////////// First Method using Filter Keyword ////////////////////////////

let transactions = [1,2,3,4,5,6,7,8]
let everArray = []
let resulteven = transactions.filter((n)=>{
    return n%2==0
})
console.log(resulteven)


////////////////////////////// Second and simple method ///////////////////////////////


let num = [1,2,3,4,5,6,,7,8]
let Arrayeven = []
for(let i=0; i<num.length; i++){
    if(num[i]%2==0){
        Arrayeven.push(num[i])
    }
}
console.log(Arrayeven)

/////////////////////////////////////// Home Work - find all the positive numbers


const numbers = [1000, 2000, 3000, 4000, -898, -989]
const positives = []
const resultOFpositives = numbers.filter((n)=>{
    return n>0
})
console.log(resultOFpositives)