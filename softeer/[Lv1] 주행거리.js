const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
if (A === B) console.log('same');
else if (A > B) console.log('A');
else if (A < B) console.log('B');