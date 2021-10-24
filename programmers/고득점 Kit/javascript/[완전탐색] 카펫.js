function solution(brown, yellow) {
    for(let x=1;x<Number(brown/2+2)-1;x++){
        let y=Number(brown/2+2)-x
        if (x*y===(brown+yellow)) return [y,x]
    }
}