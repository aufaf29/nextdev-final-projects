
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


$(document).ready(() => {

    $("#main-area").load("/pages/home.html");

    $($("#header-component")[0].shadowRoot).find("#navbar-toggler").click(() => {
        let state = $("#header-component")[0].shadowRoot.querySelector("#collapse-menu");
        if (state.style.display == "contents") {
            state.style.display = "none";
        } else {
            state.style.display = "contents";
        }
    });
    
    $($("#header-component")[0].shadowRoot).find(".nav-item").on("click", (event) => {
        let menu = event.target.getAttribute("menu");
        let type = event.target.getAttribute("class").replace(/\s/g, '');
        $($("#header-component")[0].shadowRoot).find(".nav-item.nav-active").removeClass("nav-active");
                
        if (type.localeCompare("nav-item") == 0) {
            event.target.classList.add("nav-active");
        } else {
            event.target.parentElement.classList.add("nav-active");
        }

        $("#main-area").load(`/pages/${menu}.html`);
    })

    $($("#footer-component")[0].shadowRoot).find(".nav-item").on("click", (event) => {
        let menu = event.target.getAttribute("menu")
        $("#main-area").load(`/pages/${menu}.html`);
        window.scrollTo(0, 0);
    })



});