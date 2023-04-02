function change_next_direction() {
    var elem = document.getElementById("direction").getElementsByClassName("next_button")[0];
    if(elem.innerHTML === "Crime") {
        elem.innerHTML = "Contact";
    }
    else {
        elem.innerHTML = "Crime";
    }
}