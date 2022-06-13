function solution(numbers) {
    return 45 - numbers.reduce((sum, number) => sum + number, 0);
}