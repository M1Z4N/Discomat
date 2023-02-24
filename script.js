// Dynamic display of current input value
function inputValue() {
    document.getElementById("inputRangeValue").innerHTML = document.getElementById("inputRange").value;
}


// Random color for <h1> Discomat!
let intervalHandler;

function discomatLogo() {   
    intervalHandler = setInterval(() => {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.getElementById("discomatLogo").style.color = color;
        document.querySelector("button").style.borderColor = color;
        document.querySelector("button").style.color = color;
    }, 1000);
}

function startParty() {
    const frequency = document.getElementById("inputRange").value;

    // Hides menu and background (disco ball)
    document.getElementById("menu").setAttribute("hidden", "");
    document.body.style.backgroundImage = "url()";

    // Stops discomatLogo()
    clearInterval(intervalHandler);

    setInterval(() => {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        console.log("Current body color:", color);
        document.body.style.backgroundColor = color;
    }, frequency);
}