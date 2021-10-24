function solution(people, limit) {
    let answer=0, left=0, right=people.length-1
            people.sort((a,b)=>a-b)
            while(left<right){
                if(people[left]+people[right]<=limit){
                    answer++
                    left++
                    right--
                }
                else right--
            }
            return people.length-answer
}