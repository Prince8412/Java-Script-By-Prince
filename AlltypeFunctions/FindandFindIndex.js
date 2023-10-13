const transactions = [1000, 2000, 4000, -898, 3800, -970, 3000];
let findfirstwidthrawl = transactions.find(function(n){
    return n<0;
})
console.log(findfirstwidthrawl);

const findfirstwidthrawlIndex = transactions.findIndex((n)=>{
    return n<0
})
console.log("Index-> "+findfirstwidthrawlIndex)