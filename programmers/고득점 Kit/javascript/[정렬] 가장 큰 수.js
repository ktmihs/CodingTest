function solution(numbers) {
    numbers=numbers.map((a)=>String(a).repeat(3))
    numbers.sort().reverse()
    numbers=numbers.map((a)=>a.slice(0,a.length/3))
    let answer=numbers.join('')
    if(parseInt(answer)===0) return '0'
    return answer
}

function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('')
    return answer[0] === '0' ? '0' : answer
}