class Calculate {
    add(a, b) {
        return (a+b);
    }

    subtract(a,b) {
        return (a-b);
    }

    multiply(a,b) {
        return (a*b);
    }

    divide(a,b) {
        return (a/b);
    }

    calculate(a, b, func) {
        return func(a,b);
    }
}

module.exports = Calculate;