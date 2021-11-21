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

function displayTable(){
    let table=document.querySelector("table");

    tasks.forEach(task=>{
        let tableRow=document.createElement("tr");
        let name=document.createElement("td");
        let status=document.createElement("td");
        let deleteTask=document.createElement("td");

        name.innerText=tasks.taskName;

        tableRow.appendChild(name);
        tableRow.appendChild(name);






    })
}

