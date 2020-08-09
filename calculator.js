let currentValue = 0;
let operator = null;
let operand1 = 0;
let operand2 = 0;

function buttonHandler(id) {
    // debugging statement, print to the console what is being typed in
    console.log(id);
    let ACValue="AC";

    // if I am getting AC, I need to do something different
    if (id === "AC") {
        currentValue = 0;
        // change id from C to AC
        ACValue='AC';
    } else if (id === '+/-') {
        currentValue = currentValue *= -1;
        ACValue = 'C';
    } else if (id === '%') {
        currentValue = currentValue /= 100;
        ACValue = 'C';
    } else if (id === "Divide" || id === "x" || id === "+" || id === "-" || id === "=") {
        // homework here...
        // hint: you need to save operator and operands
        // hint: you need to handle equal differently
        ACValue = 'C';
    } else {
        // else, I am not getting AC, proceed with the following
        // step1: take the currenValue and move it to the left (means you need to times it by 10)
        currentValue *= 10;
        // step2: and then add the value that is coming in
        currentValue= Number.parseInt(currentValue) + Number.parseInt(id)
        // step3: change AC button to C
        ACValue = 'C';
    }

    document.getElementById("Output").textContent = currentValue;
    document.getElementById("AC").textContent = ACValue;
}
