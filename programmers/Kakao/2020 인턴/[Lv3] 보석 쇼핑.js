function solution(gems) {
    const gemset = new Set(gems);
    const hash = new Map();
    hash.set(gems[0], 1);

    let left = 0, right = 0;
    const answer = [1, gems.length];

    while (right < gems.length) {
        if (hash.size < gemset.size) {
            right += 1;
            hash.set(gems[right], (hash.get(gems[right]) || 0) + 1);
        } else {
            if (right - left < answer[1] - answer[0]) {
                answer[0] = left + 1;
                answer[1] = right + 1;
            }
            hash.set(gems[left], hash.get(gems[left]) - 1);
            if (hash.get(gems[left]) === 0) hash.delete(gems[left]);
            left++;
        }
    }
    return answer;
}