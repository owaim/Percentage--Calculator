let buttonevents = document.getElementById('startbutton');

function start() {
    let num1 = parseFloat(prompt("Enter Your Obtained Marks"))

    let num2 = parseFloat(prompt("Enter The Total Marks"))

    let result = (num1 * 100) / num2

    result = result.toFixed(2)

    alert("Your Percentage is: " +  result)
}