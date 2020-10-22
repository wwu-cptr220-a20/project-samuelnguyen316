function getwords() {
    let text = document.getElementById("words").value;
    document.getElementById("para").innerHTML += '<p>' + text;
    document.getElementById("words").value = "";
}