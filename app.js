let tasks=[

{taskName:"Creating new project with JS, CSS and HTML",
status:"Finished"

},
{taskName:"Learning about DOM Manipulation",
status:"In-Progress"

},
{taskName:"Updating GitHub projects",
status:"Todo"

}

];
displayTable();

//add new task function
function addTask(){
    let task=document.querySelector("#task");
    tasks.push({
        taskName: task.value,
        status:"Todo"
    });
    task.value="";

    displayTable();

}

//updated status for clicked task
function updateStatus(index){

    let statuses=["Todo","In-Progress","Finished"];
    let statusIndex=statuses.indexOf(tasks[index].status);
    ++statusIndex;
    if(statusIndex>2) statusIndex=0;
    tasks[index].status=statuses[statusIndex];
    displayTable();

}

function deleteTask(index){
tasks.splice(index,1);
displayTable();

}

function displayTable(){
    let table=document.querySelector("table");

    while(table.childNodes.length>2){
        table.removeChild(table.lastChild);
    }

    let index=0;

    tasks.forEach(task=>{
        let tableRow=document.createElement("tr");
        let name=document.createElement("td");
        let status=document.createElement("td");
        let deleteTask=document.createElement("td");

        name.innerText=task.taskName;
        status.innerText=task.status;
        status.classList.add(task.status.toLocaleLowerCase());

        deleteTask.classList.add("fa");
        deleteTask.classList.add("fa-trash");

        deleteTask.setAttribute("onclick","deleteTask("+index+")");
        status.setAttribute("onclick","updateStatus("+index+")");
        ++index;

        tableRow.appendChild(name);
        tableRow.appendChild(status);
        tableRow.appendChild(deleteTask);

        table.appendChild(tableRow);


    });
}

