function cosineLaw(a, b, C) {
    let radianOrDegree = document.getElementById("radian-or-degree-button").innerHTML;
    let cosineValue = 0;
    if (radianOrDegree == 'Radians') {
        cosineValue = Math.cos(C);
    } else {
        cosineValue = Math.cos((C * Math.PI) / 180);
    }
    return Math.sqrt(a * a + b * b - 2 * a * b * cosineValue);
}

function asymptoteFinder(m, n) {
    const asymptoteType = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sextic", "Septic", "Octic", "Nonic", "Decic"];
    if (m == n) {
        return "The asymptote is horizontal";
    } else if (n > m) {
        return "The asymptote is the x-axis";
    } else if (m > n) {
        return "The asymptote is " + asymptoteType[m - n - 1];
    } else {
        return "Error";
    }
}

function piApproximation(n) {
    let approximation = 0;
    for (let i = 0; i < n; i++) {
        approximation += 4 * (Math.pow((-1), i) / (2 * i + 1));
    }
    return approximation;
}

/* Event listeners in order to communicate with HTML */

document.getElementById("radian-or-degree-button").addEventListener("click", function () {
    let button = document.getElementById("radian-or-degree-button");
    if (button.innerHTML == "Degrees") {
        button.innerHTML = "Radians";
    } else if (button.innerHTML == "Radians") {
        button.innerHTML = "Degrees";
    }
})

document.getElementById("cos-button").addEventListener("click", function () {
    let cosA = document.getElementById("cos-a").value;
    let cosB = document.getElementById("cos-b").value;
    let cosC = document.getElementById("cos-C").value;
    document.getElementById("cos-result").value = cosineLaw(cosA, cosB, cosC);
});

document.getElementById("asymp-button").addEventListener("click", function () {
    let asympM = parseInt(document.getElementById("asymp-m").value);
    let asympN = parseInt(document.getElementById("asymp-n").value);
    document.getElementById("asymp-result").value = asymptoteFinder(asympM, asympN);
});

document.getElementById("pi-button").addEventListener("click", function () {
    let piN = document.getElementById("pi-n").value;
    document.getElementById("pi-result").value = piApproximation(piN);
});