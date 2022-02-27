function createTemplate() {

    let templateComponent = document.createElement('template');
    
    templateComponent.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>

        <link href="/assets/css/footer.css" rel="stylesheet">
    
        <div class="footer-component">
        <div class="information">
            <div class="container">
                <footer class="py-5">
                    <div class="row footer-contents">
                        <div class="footer-about">
                            <h5>About Us</h5>
                            <div class="company-logo">
                                <img src="/assets/img/aufcode-logo.png" alt="">
                            </div>
                            <p>We are a company that provides solutions to all problems through a digital technology in the <strong>web internet</strong>, <strong>social media</strong>, <strong>artificial intelligence</strong>, or <strong>machine learning</strong> area.</p>
                            <ul class="nav flex-row">
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        <div class="sosmed-icon facebook">
                                            <i class='bx bxl-facebook'></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        <div class="sosmed-icon twitter">
                                            <i class='bx bxl-twitter'></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        <div class="sosmed-icon instagram">
                                            <i class='bx bxl-instagram'></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        <div class="sosmed-icon google-plus">
                                            <i class='bx bxl-google-plus'></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="footer-contact">
                            <h5>Contact Us</h5>
                            <table class="table table-sm table-borderless">
                                <col style="width: 15%;" />
                                <col style="width: 85%;" />

                                <tbody>
                                    <tr>
                                        <td class="contact-type">
                                            <div class="contact-icon">
                                                <i class='bx bx-current-location' ></i>
                                            </div>
                                        </td>
                                        <td>
                                            <p><strong>Office</strong></p>
                                            <p class="contact-detail">
                                                Margonda Depok, West Java, Indonesia 12345
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="contact-type">
                                            <div class="contact-icon">
                                                <i class='bx bxs-phone' ></i>
                                            </div>
                                        </td>
                                        <td>
                                            <p><strong>Phone</strong></p>
                                            <p class="contact-detail">
                                                +62 812 3456 7890
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="contact-type">
                                            <div class="contact-icon">
                                                <i class='bx bxl-gmail' ></i>
                                            </div>
                                        </td>
                                        <td>
                                            <p><strong>Mail</strong></p>
                                            <p class="contact-detail">
                                                aufafadhlurohman@gmail.com
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    
                        <div class="footer-message">
                            <h5>Ask question</h5>
                            <p>If there is anything you want to know, please drop your question here!.</p>
                            <form class="row  g-3">
                                <div class="col-md-12 w-100 gap-2">
                                    <textarea spellcheck="false" class="form-control" id="textarea-message" rows="3" placeholder="Message or Question"></textarea>
                                </div>
                                <div class="col-md-9">
                                    <input id="email-message" type="text" class="form-control" placeholder="Email address">
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-primary btn-block" type="button">Send</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </footer>
            </div>
        </div>
        <nav class="navbar navbar-light navbar-expand-xl bg-faded justify-content-center">
            <div class="container">
                <p class="navbar-brand d-flex w-50 me-auto">
                    © 2020 Aufa Fadhlurohman
                </p>
                <div class="navbar-collapse collapse w-100 h-100" id="collapse">
                    <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                        <li class="nav-item" menu="home">
                            <div class="nav-link" menu="home">HOME</div>
                        </li>
                        <li class="nav-item" menu="about">
                            <div class="nav-link" menu="about">ABOUT US</div>
                        </li>
                        <li class="nav-item" menu="portfolio">
                            <div class="nav-link" menu="portfolio">PORTFOLIO</div>
                        </li>
                        <li class="nav-item" menu="blog">
                            <div class="nav-link" menu="blog">BLOG</div>
                        </li>
                        <li class="nav-item" menu="contact">
                            <div class="nav-link" menu="contact">CONTACT US</div>
                        </li>
                        <li class="nav-item" menu="todos">
                            <div class="nav-link" menu="todos">TODOS</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    `;

    return templateComponent;
}


class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(createTemplate().content);
    }
}

customElements.define('footer-component', Footer);