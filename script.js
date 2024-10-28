let radians = true

function cosineLaw(a, b, C) {
    if (radians == true) {
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

function piApproximation(n) {
    let approximation = 0;
    for (let i = 0; i < n; i++) {
        approximation += 4*(Math.pow((-1), i) / (2*i + 1))
    }
    return approximation;
}

document.getElementById("cos-button").addEventListener("click", function(){ 
    let cosA = parseInt(document.getElementById("input-a").value);
    let cosB = parseInt(document.getElementById("input-b").value);
    let cosC = parseInt(document.getElementById("input-C").value);
    document.getElementById("cos-result").value = cosineLaw(cosA, cosB, cosC);
    });

document.getElementById("asymp-button").addEventListener("click", function(){ 
    let asympM = parseInt(document.getElementById("input-m").value);
    let asympN = parseInt(document.getElementById("input-asymp-n").value);
    document.getElementById("asymp-result").value = asymptoteFinder(asympM, asympN);
    });
    
document.getElementById("pi-button").addEventListener("click", function(){ 
    let piN = parseInt(document.getElementById("input-pi-n").value);
    document.getElementById("pi-result").value = piApproximation(piN);
});