function getwords() {
    let text = document.getElementById("words").value;
    var d = new Date();
    document.getElementById("para").innerHTML += '<p>' + text + "<br>" + "<i>" + "<small>" + " " + d;
    //document.getElementById("para").innerHTML.style.display = "inline-box";
    document.getElementById("words").value = "";
}