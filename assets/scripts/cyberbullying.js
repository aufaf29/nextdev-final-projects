function getPredictions() {
    if (localStorage.getItem("predictions") == "undefined") {
        return []
    }
    return JSON.parse(localStorage.getItem("predictions"));
}

function setPredictions(predictions) {
    localStorage.setItem("predictions", JSON.stringify(predictions));
    printPredictions();
}

function deletePrediction(num) {
    let numint = parseInt(num);
    let predictions = getPredictions();
    predictions.splice(numint, 1);
    setPredictions(predictions);
}

function printPredictions() {
    let predictions = getPredictions();

    if (predictions == null) {
        predictions = [];
    }

    $("#predictions-container").empty();
    predictions.slice().reverse().forEach((element, i) => {
        $("#predictions-container").append(`
            <div class="${ element['label'] == 'Cyberbullying' ? 'predictions-item-red' : 'predictions-item-green'}">
                <div class="container">
                    <div class="row">
                        <div class="prediction-task col-11">
                            <div class="prediction-task-container">
                                <div class="prediction-text">
                                    <p class="text">
                                        ${element.text}
                                    </p>
                                </div>
                                <div class="prediction-class">
                                    <p>
                                        <strong>
                                            ${element.label}
                                        </strong> 
                                    </p>
                                </div>
                                <div class="prediction-score">
                                    <p>
                                        Score : <strong>${element.score}%</strong>
                                    </p>
                                </div>
                                <div class="prediction-notes">
                                    <p>
                                        Notes : ${element.lang} ${element.notes != '' ? 'in ' + element.notes + ' Context' : ''} 
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="prediction-delete col-1" onclick="deletePrediction(${predictions.length - i - 1})">
                            <i class='bx bxs-trash'></i>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

}

async function addPrediction(e) {
    e.preventDefault();

    let predictions = getPredictions() == null ? [] : getPredictions();

    if ($("#input-text").val() != "") {

        await post('https://cyberbullying-service.azurewebsites.net/predict', {
                text: $("#input-text").val(),
                lang: $('#language').val()
            })
            .then(data => {
                console.log(data);
                predictions.push(data)
                setPredictions(predictions);
            
                $("#input-text").val("");
            });
    } else {
        alert("Text can't empty!")
        setPredictions(predictions);
    }

}


async function post(url = '', data = {}) {
    console.log("processing...")
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


$(document).ready(() => {
    printPredictions();

})