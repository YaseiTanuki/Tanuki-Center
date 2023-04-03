document.addEventListener("DOMContentLoaded", function(event) {
    function change_next_direction()
    {
    var x = document.getElementById("direction").getElementsByClassName("next_button")[0];
    if(x.innerHTML == "Crime")
    {
        x.innerHTML = "Contact";
    }
    else
    {
        x.innerHTML = "Crime";
    };
    }

    var elem = (document.getElementById("direction").getElementsByClassName("next_button"))[0];
    elem.addEventListener("click", change_next_direction);
})