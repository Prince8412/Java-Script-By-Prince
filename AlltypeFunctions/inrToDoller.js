const transactions = [1000, 2000, 3000, 400, -880, -800];
const inrtoDoller = 80;

const InDoller = transactions.map((amount)=>{
    return amount/inrtoDoller;
})

console.log(InDoller);