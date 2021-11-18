window.onload = function () {
    console.log("Hello world!");

    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => dataReady(data));
}

function dataReady(data) {
    console.log(data.value);

    document.getElementById("joke").innerHTML = data.value;
}