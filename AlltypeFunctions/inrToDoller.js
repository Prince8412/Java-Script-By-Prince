const transactions = [1000, 2000, 3000, 400, -880, -800];
const inrtoDoller = 80;

const InDoller = transactions.map((amount)=>{
    return amount/inrtoDoller.toFixed(0);  // Here toFixed(0) is used to convert all the float values in integer
})

console.log(InDoller);