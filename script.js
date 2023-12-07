function modInverse(a, m) {
    a = (a % m + m) % m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m == 1) {
            return x;
        }
    }
    return 1;
}

function encrypt() {
    const inputText = document.getElementById("inputText").value;
    const keyA = parseInt(document.getElementById("keyA").value);
    const keyB = parseInt(document.getElementById("keyB").value);

    const result = inputText
        .split("")
        .map(char => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((keyA * (code - 65) + keyB) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((keyA * (code - 97) + keyB) % 26) + 97);
            } else {
                return char;
            }
        })
        .join("");

    document.getElementById("outputText").value = result;
}

function decrypt() {
    const inputText = document.getElementById("inputText").value;
    const keyA = parseInt(document.getElementById("keyA").value);
    const keyB = parseInt(document.getElementById("keyB").value);

    const modInvKeyA = modInverse(keyA, 26);

    const result = inputText
        .split("")
        .map(char => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((modInvKeyA * (code - 65 - keyB + 26)) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((modInvKeyA * (code - 97 - keyB + 26)) % 26) + 97);
            } else {
                return char;
            }
        })
        .join("");

    document.getElementById("outputText").value = result;
}
