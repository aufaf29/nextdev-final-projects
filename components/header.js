function createTemplate(menu = 1) {

    if (menu < 1 || menu > 6) menu = 1;
    
    let templateComponent = document.createElement('template');
    
    templateComponent.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="/assets/css/header.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    
        <nav class="navbar navbar-light navbar-expand-xl bg-faded justify-content-center">
            <div class="container">
                <a href="/" class="navbar-brand d-flex w-50 me-auto">
                    <img src="/assets/img/aufcode-logo.png" width="120" height="auto" alt="">
                </a>
                <button id="navbar-toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-menu" aria-controls="collapse-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse w-100" id="collapse-menu">
                    <ul id="navbar-nav" class="nav navbar-nav ms-auto w-100 justify-content-end animate__animated animate__fadeIn">
                        <li class="nav-item ${(menu == 1) ? "nav-active" : ""}" menu="home">
                            <div class="nav-link" menu="home">HOME</div>
                        </li>
                        <li class="nav-item ${(menu == 2) ? "nav-active" : ""}" menu="about">
                            <div class="nav-link" menu="about">ABOUT US</div>
                        </li>
                        <li class="nav-item ${(menu == 3) ? "nav-active" : ""}" menu="portfolio">
                            <div class="nav-link" menu="portfolio">PORTFOLIO</div>
                        </li>
                        <li class="nav-item ${(menu == 4) ? "nav-active" : ""}" menu="blog">
                            <div class="nav-link" menu="blog">BLOG</div>
                        </li>
                        <li class="nav-item ${(menu == 5) ? "nav-active" : ""}" menu="contact">
                            <div class="nav-link" menu="contact">CONTACT US</div>
                        </li>
                        <li class="nav-item ${(menu == 6) ? "nav-active" : ""}" menu="todos">
                            <div class="nav-link" menu="todos">TODOS</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    `;

    return templateComponent;
}


class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const menu = parseInt(this.attributes.getNamedItem("menu").value);
        shadowRoot.appendChild(createTemplate(menu).content);
    }
}

customElements.define('header-component', Header);