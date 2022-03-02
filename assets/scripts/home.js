var writerarea = document.getElementById('writerarea');

var typewriter = new Typewriter(writerarea, {
    loop: true
});

document.getElementById("modals-container").innerHTML = 
    `
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="check" viewBox="0 0 16 16">
                                <title>Check</title>
                                <path
                                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                            </symbol>
                        </svg>

                        <main>

                            <h2 id="modal-title-order" class="display-6 text-center mb-4">Order Our Solution</h2>
                
                            <div class="table-responsive">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th style="width: 34%;"></th>
                                            <th style="width: 22%;">IoT</th>
                                            <th style="width: 22%;">AI</th>
                                            <th style="width: 22%;">Web 3.0</th>
                                        </tr>
                                    </thead>
                                    <tbody id="modal-table">
                                        <tr>
                                            <th scope="row" class="text-start">Public</th>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-start">Private</th>
                                            <td></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-start">Permissions</th>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-start">Sharing</th>
                                            <td></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-start">Unlimited</th>
                                            <td></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-start">Extra security</th>
                                            <td></td>
                                            <td></td>
                                            <td><svg class="bi" width="24" height="24">
                                                    <use xlink:href="#check" /></svg></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-start">Order</th>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-sm rounded-0">Order</button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-sm rounded-0">Order</button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-sm rounded-0">Order</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>
    `

typewriter
    .typeString('We provide every technology that you need.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<strong>Machine Learning</strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>IoT</strong>')    
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>Web 3.0</strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>Big Data!</strong>')
    .pauseFor(2000)
    .deleteAll()

    .start();