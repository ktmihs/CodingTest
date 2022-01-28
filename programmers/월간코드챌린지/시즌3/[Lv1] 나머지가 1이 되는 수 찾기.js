function solution(n) {
    for(let i=2;i<=n;i++){
        if(Math.floor((n-1)/i)===(n-1)/i) return i;
    }
}