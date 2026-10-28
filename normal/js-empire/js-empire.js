// 1. checking even or odd
const oddEven = 1;

const check = oddEven % 2 === 0 ? 'even' : 'odd';

console.log('odd or even number: ' + check);

// 2. positive or negative
const positiveNegative = 1;

const check2 = positiveNegative < 0 ? 'negative' : 'positive';

console.log('positive or negative: ' + check2)

// 3. zero or not
const zeroCheck = -1;

const check3 = zeroCheck < 1 && zeroCheck > -2 ? 'zero' : 'not zero';

console.log('zero or not: ' + check3);