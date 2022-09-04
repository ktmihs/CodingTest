// 2251

const [A,B,C] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

const visited=[...new Array(A+1)].map(e=>Array(B+1).fill(false));
visited[0][0]=true;

const answer=[];

let queue=[[0,0]];

const pour =(x,y)=>{
  if(x>=0 && x<=A &&y>=0&& y<=B && !visited[x][y]){
    visited[x][y]=true;
    queue.push([x,y]);
  }
}

while(queue.length){
  const tmp=queue.slice();
  queue=[];

  for(const [x,y] of tmp){
    let z = C-x-y, water;

    if(!x) answer.push(z);

    water=Math.min(x, B-y);
    pour(x-water, y+water);
    water=Math.min(x, C-z);
    pour(x-water, y);
    water=Math.min(y, A-x);
    pour(x+water, y-water);
    water=Math.min(z, A-x);
    pour(x+water, y);
    water=Math.min(y, C-z);
    pour(x, y-water);
    water=Math.min(z, B-y);
    pour(x, y+water);
  }
}

console.log(answer.sort((a,b)=>a-b).join(' '));