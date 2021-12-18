const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

let [N,K]=input.shift().split(' ').map((a)=>parseInt(a))
let arr=[]
for(let i of input) arr.push(i.split(' ').map((a)=>parseInt(a)))
arr.sort((a,b)=>a[0]-b[0])

let dp=new Array(K+1).fill(0)

for(let i=0;i<arr.length;i++){
  for(let j=K;j>=arr[i][0];j--) dp[j]=Math.max(dp[j], dp[j-arr[i][0]]+arr[i][1])
}
console.log(Math.max(...dp))