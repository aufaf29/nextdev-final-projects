
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.history.scrollRestoration = 'manual'

const routes = {
    '/': "pages/home.html",
    '/about': "pages/about.html",
    '/portfolio': "pages/portfolio.html",
    '/contact': "pages/contact.html",
    '/blog': "pages/blog.html",
    '/todos': "pages/todos.html",
    '/cyberbullying': "pages/cyberbullying.html",
}

const menus = {
    '/': "home",
    '/about': "about",
    '/portfolio': "portfolio",
    '/contact': "contact",
    '/blog': "blog",
    '/todos': "todos",
    '/cyberbullying': "cyberbullying",
}

function move(menu, history=false) { 

    let pathname = `/${menu != "home" ? menu : ""}`

    let target = $($("#header-component")[0].shadowRoot).find(`#navbar-access-${menu}`)[0]

    let type = target.getAttribute("class").replace(/\s/g, '');
    $($("#header-component")[0].shadowRoot).find(".nav-item.nav-active").removeClass("nav-active");
    
    if (type.localeCompare("nav-item") == 0) {
        target.classList.add("nav-active");
    } else {
        target.parentElement.classList.add("nav-active");
    }

    if (history) {
        window.history.pushState(
            {}, 
            pathname,
            window.location.origin + pathname
        );
    }

    $("#main-area").load(routes[pathname]);
}

window.onpopstate = () => {
    move(menus[window.location.pathname])
}

$(document).ready(() => {

    if (window.location.pathname != "/cyberbullying") {
        move(menus[window.location.pathname]);
    } else {
        $($("#header-component")[0].shadowRoot).find(".nav-item.nav-active").removeClass("nav-active");
        $("#main-area").load(routes[window.location.pathname]);
    }

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

        let pathname = `/${menu != "home" ? menu : ""}`

        console.log("pathname")
        console.log(pathname)
        console.log("origin")
        console.log(window.location.origin)

        window.history.pushState(
            {}, 
            pathname,
            window.location.origin + pathname
        );

        $("#main-area").load(`/pages/${menu}.html`);
    })

    $($("#footer-component")[0].shadowRoot).find(".nav-item").on("click", (event) => {
        let menu = event.target.getAttribute("menu")

        move(menu, history=true)
        window.scrollTo(0, 0);
    })
});