
function getTODOS() {
    if(localStorage.getItem("todos") == "undefined") {
        return []
    } 
    return JSON.parse(localStorage.getItem("todos"));
}

function setTODOS(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
    printTODO();
}

function deleteTODO(num) {
    let numint = parseInt(num);
    let todos = getTODOS();
    todos.splice(numint, 1);
    setTODOS(todos);
    
}

function printTODO() {
    let todos = getTODOS();
    console.log("todos");
    console.log(todos);
    
    if (todos == null) {
        todos = [];
    }

    $("#todos-container").empty();
    todos.forEach((element, i) => {
        $("#todos-container").append(`
            <div class="todos-item">
                <div class="container">
                    <div class="row">
                        <div class="todo-task col-11">
                            <div class="form-check">
                                <input class="form-check-input rounded-0" type="checkbox" value="checked" id="${'todo-' + i}" ${(element.checked) ? "checked" : ""}>
                                <label class="form-check-label" for="${'todo-' + i}">
                                    ${(element.checked) ? "<s>"+element.task+"</s>" : element.task}
                                </label>
                            </div>
                        </div>
                        <div class="todo-delete col-1" onclick="deleteTODO(${i})">
                            <i class='bx bxs-trash'></i>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
    
}

function addTODOS() {

    
    let todos = getTODOS() == null ? [] : getTODOS();
    todos.push({
        "task": $("#newtodo").val(),
        "checked": false
    })
    setTODOS(todos);
    $("#newtodo").val("");
}

$(document).ready(() => {
    
    
    printTODO();

})