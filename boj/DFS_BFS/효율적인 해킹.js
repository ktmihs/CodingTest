// 1325

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N,M]=input.shift().split(' ').map(Number);
const node = [...new Array(N + 1)].map(e => []);
input.forEach(line => {
  const [a, b] = line.split(' ');
  node[+b].push(+a);
})

const BFS=k=>{
  let queue = [k], cnt=0;
  const check=new Array(N+1).fill(0);
  check[k]=1;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const n of tmp) {
      for (const i of node[n]) {
        if (!check[i]) {
          queue.push(i);
          cnt++;
          check[i]=1;
        }
      }
    }
  }
  return cnt;
}

const answer=[], res=[];
for(let i=1;i<=N;i++) answer.push(BFS(i));

const max=Math.max(...answer);
answer.forEach((num,idx)=>num===max && res.push(idx+1));

console.log(res.join(' '));