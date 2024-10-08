let radians = True

function cosineLaw(a, b, C) {
    if (radians == True) {
        cosineValue = Math.cos(C);
    }
    else {
        cosineValue = Math.cos((C * Math.PI) / 180);
    }
    return Math.sqrt(a * a + b * b - 2 * a * b * cosineValue)
}

function asymptoteFinder(m, n) {
    if (m == n) {
        return "The asymptote is horizontal"
    }
    else if (n > m) {
        return "The asymptote is the x-axis"
    }
    /* TODO cuz i aint doin this rn */

}
function piApproximation(n) {
    let approximation = 0;
    for (let i = 0; i < n; i++) {
        approximation += (Math.pow(-1, n) / (2*n + 1));
    }
    approximation *= 4;
    return approximation;
}

console.log(piApproximation(1000000))