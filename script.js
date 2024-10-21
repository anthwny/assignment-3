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
    const asymptoteType = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sextic", "Septic", 
    "Octic", "Nonic", "Decic"];
    if (m == n) {
        return "The asymptote is horizontal";
    }
    else if (n > m) {
        return "The asymptote is the x-axis";
    }
    else if (m > n) {
        return "The asymptote is " + asymptoteType[m-n-1];
    }
    else {
        return "bruh";
    }
}
console.log(asymptoteFinder(3,2));

function piApproximation(n) {
    let approximation = 0;
    for (let i = 0; i < n; i++) {
        approximation += 4*(Math.pow((-1), i) / (2*i + 1))
    }
    return approximation;
}