function solution(n, s, a, b, fares) {
    let answer = 10e9
    let dp=[...Array(n)].map((e) => Array(n).fill(10e9))
    let dist=new Array(n).fill(0)
    for(let i=0;i<n;i++) dp[i][i]=0
    for(let [a,b,c] of fares){
        dp[a-1][b-1]=c
        dp[b-1][a-1]=c
    }
    for(let k=0;k<n;k++){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(dp[i][j]>dp[i][k]+dp[k][j]) dp[i][j]=dp[i][k]+dp[k][j]
            }
        }
    }
    for(let i=0;i<n;i++){
        answer=Math.min(answer, dp[s-1][i]+dp[i][a-1]+dp[i][b-1])
    }
    return answer
}