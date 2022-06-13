function solution(a, b) {
    return a.reduce((sum, item, idx) => sum + a[idx]*b[idx], 0);
}