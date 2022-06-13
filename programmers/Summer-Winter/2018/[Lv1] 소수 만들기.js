const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(!(num % i)) return 0;
    }
    return 1;
}
function solution(nums) {
    let answer = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                isPrime(nums[i] + nums[j] + nums[k]) && answer++;
            }
        }
    }
    return answer;
}