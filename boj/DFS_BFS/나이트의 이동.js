// 7562

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const N = +input.shift();
const dir = [[-1, -2], [-1, 2], [-2, -1], [-2, 1], [1, -2], [1, 2], [2, -1], [2, 1]];

const func = () => {
    for (let k = 0; k < N * 3; k += 3) {
        const n = +input[k];
        const [i, j] = input[k + 1].split(' ').map(Number);
        const [X, Y] = input[k + 2].split(' ').map(Number);

        let queue = [[i, j]], answer = -1, L = 0;

        const check = [...new Array(n)].map(e => Array(n).fill(false));

        outer: while (queue.length) {
            const tmp = queue.slice();
            queue = [];
            for (const [x, y] of tmp) {
                if (x === X && y === Y) {
                    answer = L;
                    break outer;
                }
                for (let [dx, dy] of dir) {
                    if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && !check[x + dx][y + dy]) {
                        check[x + dx][y + dy] = true;
                        queue.push([x + dx, y + dy]);
                    }
                }
            }
            L++;
        }
        console.log(answer);
    }
}
func();