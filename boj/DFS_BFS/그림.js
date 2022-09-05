// 1926

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N,M]=input.shift().split(' ').map(Number);
const sketchbook=input.map(line=>line.split(' ').map(Number));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const answer=[];

const BFS=(i,j)=>{
  sketchbook[i][j]=0;
  let queue=[[i,j]], cnt=1;
  while(queue.length){
    const tmp=queue.slice();
    queue=[];

    for(const [x,y] of tmp){
      for(const [dx,dy] of DIR){
        if (x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < M && sketchbook[x+dx][y+dy]) {
          sketchbook[x+dx][y+dy]=0;
          queue.push([x+dx,y+dy]);
          cnt++;
        }
      }
    }
  }
  answer.push(cnt);
}

for(let i=0;i<N;i++){
  for(let j=0;j<M;j++){
    if(sketchbook[i][j]) BFS(i,j);
  }
}

console.log(answer.length);
console.log(answer.length?Math.max(...answer):0);