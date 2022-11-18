function calc(a, b, c) {
    if (c === '+') {
        return a + b;
    } else if (c === '-') {
        return a - b;
    } else if (c === '*') {
        return a * b;
    } else if (c === '/') {
        if (a === 0 || b === 0) {
            return "0은 나눌 수 없습니다."
        } else {
            return a / b;
        }
    }
}

console.log(calc(5, 0, '/'));