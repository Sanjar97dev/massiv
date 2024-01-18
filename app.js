let nums = [4557, 222, 1098, 3455, 7823, 2222, 1090, 8765, 2987, 6544]
result=nums.filter((el, i)=>{return el%2==0*i})

let even=[]
let summ = 0

for (const num of nums) {
    if (num %2 === 0) {
        even.push(num)
    }
}
console.log(even);

for (let i = 0; i < even.length; i++) {
    let numm=even[i]
    summ+=Number(numm)
}
console.log(summ);

for (let i = 1; i < nums.length; i++) {
    if (nums[i]%2!==0) {
        console.log(nums[i]);
    }
}

let summa
summa=result.reduce((total, el)=>{return total+el},0)
console.log(summa);






// parnye  index
// obshi summa
