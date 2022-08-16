statusColorChange = function () {
    const selectedStatus = document.querySelector("#status-select").value;
    // document.querySelector("#status-color1").style.BackgroundColor = "green";
    // console.log(document.querySelector("#ass").style.BackgroundColor);
    CurrentColor = document.querySelector("#status-color1").style.backgroundColor;
    switch (selectedStatus) {
        case "playing":
            document.querySelector("#status-color1").style.backgroundColor = "green";
            break;
        case "completed":
            document.querySelector("#status-color1").style.backgroundColor = "blue";
            break;
        case "on-hold":
            document.querySelector("#status-color1").style.backgroundColor = "yellow";
            break;
        case "dropped":
            document.querySelector("#status-color1").style.backgroundColor = "red";
            break;
        case "plan-to-play":
            document.querySelector("#status-color1").style.backgroundColor = "#f0ffff";
            break;
        default:
            document.querySelector("#status-color1").style.backgroundColor = "grey";
    }
}