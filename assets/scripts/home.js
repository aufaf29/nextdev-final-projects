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
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
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