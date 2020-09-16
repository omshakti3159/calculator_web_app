function calc(n) {
    var displayVal = document.getElementById('expression').innerText;
    console.log(n);

    switch (n) {
        case '=':
            var result = eval(displayVal);
            document.getElementById('resultBox').innerText = "Ans=" + result;
            console.log(result);
            break;
        case 'c':
            document.getElementById('expression').innerText = "";
            document.getElementById('resultBox').innerText = "";
            break;
        default:

            displayVal += n;
            document.getElementById('expression').innerText = displayVal;
    }
}