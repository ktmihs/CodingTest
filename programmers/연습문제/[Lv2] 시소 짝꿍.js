function solution(weights) {
    const hash = new Map();
    weights.forEach(weight => hash.set(weight, (hash.get(weight) || 0) + 1));
        
    return weights.sort((a, b) => a - b).reduce((total, w) => {
        total += ((hash.get(w) || 0) - 1) + (hash.get(w * 2) || 0) + (hash.get(w * 1.5) || 0) + (hash.get(w * 4 / 3) || 0);
        
        hash.set(w, hash.get(w) - 1);
        return total;
    }, 0)
}