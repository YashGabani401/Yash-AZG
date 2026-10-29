// 1. checking even or odd
const oddEven = 0;

if (typeof oddEven === 'number') {
    if (oddEven % 2 === 0) {
        console.log('1. the number is even');
    } else {
        console.log('1. the number is odd');
    }
} else {
    console.log('1. enter a valid number');
}

// 2. positive or negative
const positiveNegative = 0;

if (typeof positiveNegative === 'number') {
    if (positiveNegative > 0) {
        console.log('2. the number is positive');
    } else if (positiveNegative < 0) {
        console.log('2. the number is negative');
    } else {
        console.log('2. enter a number except zero');
    }
} else {
    console.log('2. enter a valid number');
}

// 3. zero or not
const zeroCheck = 0;

if (typeof zeroCheck === 'number') {
    if (zeroCheck == 0) {
        console.log('3. the number is zero');
    } else {
        console.log('3. the number is not zero');
    }
} else {
    console.log('3. enter a valid number');
}

// 4. greater one
const greater1 = 7;
const greater2 = 10;

if (typeof greater1 === 'number' && typeof greater2 === 'number') {
    if (greater1 > greater2) {
        console.log('4. ' + greater1);
    } else {
        console.log('4. ' + greater2);
    }
} else {
    console.log('4. enter a valid number');
}

// 5. equal
const equal1 = 7;
const equal2 = 10;

if (typeof equal1 === 'number' && typeof equal2 === 'number') {
    if (equal1 === equal2) {
        console.log('5. the number is equal');
    } else {
        console.log('5. the number is not equal');
    }
} else {
    console.log('5. enter a valid number');
}

// 6. greatest
const greatest1 = 7;
const greatest2 = 10;
const greatest3 = 2005;

if (typeof greatest1 === 'number' && typeof greatest2 === 'number' && typeof greatest3 === 'number') {
    if (greatest1 > greatest2 && greatest1 > greatest3) {
        console.log('6. ' + greater1);
    } else if (greatest2 > greatest1 && greatest2 > greatest3) {
        console.log('6. ' + greatest2);
    } else {
        console.log('6. ' + greatest3);
    }
} else {
    console.log('6. enter a valid number');
}

// 7. smallest
const smallest1 = 7;
const smallest2 = 10;
const smallest3 = 2005;

if (typeof smallest1 === 'number' && typeof smallest2 === 'number' && typeof smallest3 === 'number') {
    if (smallest1 < smallest2 && smallest1 < smallest3) {
        console.log('7. ' + greater1);
    } else if (smallest2 < smallest1 && smallest2 < smallest3) {
        console.log('7. ' + smallest2);
    } else {
        console.log('7. ' + smallest3);
    }
} else {
    console.log('7. enter a valid number');
}

// 11. eligible for voting
const age = 18;

if (typeof age === 'number') {
    if (age >= 18) {
        console.log('11. you are eligible for voting');
    } else {
        console.log('11. you are not eligible for voting');
    }
} else {
    console.log('11. enter a valid number');
}


// 12. pass or fail
const marks = 70;

if (typeof marks === 'number') {
    if (marks >= 33) {
        console.log('12. you are passed');
    } else {
        console.log('12. you are failed');
    }
} else {
    console.log('12. enter a valid number');
}

// 13. assign grade
const grade1 = 72;

if (typeof grade1 === 'number') {
    if (grade1 >= 90) {
        console.log('13. you got A grade');
    } else if (grade1 >= 70 && grade1 < 80) {
        console.log('13. you got B grade');
    } else if (grade1 >= 50 && grade1 < 70) {
        console.log('13. you got C grade');
    } else {
        console.log('13. your failed');
    }
} else {
    console.log('13. enter a valid number');
}

// 14. bonus eligibility
const salary = 20000;

if (typeof salary === 'number') {
    if (salary >= 25000) {
        console.log('14. you are eligible for bonus');
    } else {
        console.log('14. you are not eligible for bonus');
    }
} else {
    console.log('14. enter a valid number');
}

// 15. greater than 100
const greaterThan100 = 101;

if (typeof greaterThan100 === 'number') {
    if (greaterThan100 > 100) {
        console.log('15. the number is greater than 100');
    } else {
        console.log('15. the number is not greater than 100');
    }
} else {
    console.log('15. enter a valid number');
}

// 16. hot or cold temperature
const temperature = 32;

if (typeof temperature === 'number') {
    if (temperature > 30) {
        console.log('16. temperature is hot');
    } else {
        console.log('16. temperature is cold');
    }
} else {
    console.log('16. enter a valid number');
}

// 17. character vowel or consonant
const vowelsConsonant = 'a';

if (typeof vowelsConsonant === 'string') {
    switch (vowelsConsonant) {
        case 'a':
            console.log('17. the character is vowel');
            break;
        case 'e':
            console.log('17. the character is vowel');
            break;
        case 'i':
            console.log('17. the character is vowel');
            break;
        case 'o':
            console.log('17. the character is vowel');
            break;
        case 'u':
            console.log('17. the character is vowel');
            break;
        default:
            console.log('17. the character is consonant');
    }
} else {
    console.log('17. enter a valid number');
}

// 18. character uppercase or lowercase
const upperLower = 'a';

if (typeof upperLower === 'string') {
    if (upperLower) {
        console.log('18. uppercase');
    }
} else {
    console.log('18. enter a valid number');
}

// 19. between 10 and 50
const between = 21;

if (typeof between === 'number') {
    if (between >= 10 && between <= 50) {
        console.log('19. the number is between 10 and 50');
    } else {
        console.log('19. the number is not between 10 and 50');
    }
} else {
    console.log('19. enter a valid number');
}

// 21. day name
const day = 1;

if (typeof day === 'number') {
    switch (day) {
        case 1:
            console.log('21. day is sunday');
            break;
        case 2:
            console.log('21. day is monday');
            break;
        case 3:
            console.log('21. day is tuesday');
            break;
        case 4:
            console.log('21. day is wednesday');
            break;
        case 5:
            console.log('21. day is thursday');
            break;
        case 6:
            console.log('21. day is friday');
            break;
        case 7:
            console.log('21. day is saturday');
            break;
        default:
            console.log('21. enter a valid number between 1-7');
    }
} else {
    console.log('21. enter a valid number');
}

// 22. month name
const month = 1;

if (typeof month === 'number') {
    switch (month) {
        case 1:
            console.log('22. month is january');
            break;
        case 2:
            console.log('22. month is february');
            break;
        case 3:
            console.log('22. month is march');
            break;
        case 4:
            console.log('22. month is april');
            break;
        case 5:
            console.log('22. month is may');
            break;
        case 6:
            console.log('22. month is jun');
            break;
        case 7:
            console.log('22. month is july');
            break;
        case 8:
            console.log('22. month is august');
            break;
        case 9:
            console.log('22. month is september');
            break;
        case 10:
            console.log('22. month is october');
            break;
        case 11:
            console.log('22. month is november');
            break;
        case 12:
            console.log('22. month is december');
            break;
        default:
            console.log('22. enter a valid number between 1-12');
    }
} else {
    console.log('22. enter a valid number');
}

// 24. single digit or double digit
const digit = 1;

if (typeof digit === 'number') {
    if (digit >= 0 | digit >= 9) {
        console.log('24. the number is single digit');
    } else if (digit >= 10 | digit >= 99) {
        console.log('24. the number is double digit');
    } else {
        console.log('24. enter a valid single or double digit');
    }
} else {
    console.log('24. enter a valid number');
}

// 25. categorize: Child / Teen / Adult
const age1 = 21;

if (typeof age1 === 'number') {
    if (age1 >= 18) {
        console.log('25. you are an adult');
    } else if (age1 >= 13) {
        console.log('25. you are an teen');
    } else {
        console.log('25. you are an child');
    }
} else {
    console.log('25. enter a valid number');
}