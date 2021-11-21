let tasks=[

{taskName:"Creating new project with JS, CSS and HTML",
status:"Finished"

},
{taskName:"Learning about DOM Manipulation",
status:"In Progress"

},
{taskName:"Updating GitHub projects",
status:"To Do"

}

];
displayTable();

//add new task function
function addTask(){
    let task=document.querySelector("#task");
    tasks.push({
        name: task.value,
        status:"To Do"
    });
    tasks.value="";

    displayTable();

}

function displayTable(){
    let table=document.querySelector("table");

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

        tableRow.appendChild(name);
        tableRow.appendChild(status);
        tableRow.appendChild(deleteTask);

        table.appendChild(tableRow);


    });
}

