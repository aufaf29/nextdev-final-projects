
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function text() {
    $("#header-component")[0].shadowRoot.querySelector("#collapse-menu").style.display = "none"
}
 
$(document).ready(() => {
    
    $(".nav-item").click((event) => {
        $(".nav-item.nav-active").removeClass("nav-active");
        $(event.target).addClass("nav-active");
    });

    console.log($("#header-component")[0].shadowRoot.querySelector("#navbar-toggler"))

    $($("#header-component")[0].shadowRoot).find("#navbar-toggler").click(() => {
        let state = $("#header-component")[0].shadowRoot.querySelector("#collapse-menu");
        if (state.style.display == "contents") {
            state.style.display = "none";
        } else {
            state.style.display = "contents";
        }
    });


});