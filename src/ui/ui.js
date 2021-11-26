// function updateDisplay() {
//     const display = document.querySelector("#projectList");
//     showProjectList();
//     projectDiv.innerHTML = "";

//     const intro = document.createElement("h2");
//     intro.textContent = "Project List";
//     projectDiv.appendChild(intro);

//     if (projectManager.getProjects().length === 0) {
//         const instructions = document.createElement("p");
//         instructions.textContent = "Click +Project to add your first project!";
//         projectDiv.appendChild(instructions);
//     }

//     projectManager.getProjects().forEach(project => {
//         const div = document.createElement("div");
//         div.classList.add("project-display");

//         const projectHeader = document.createElement("div");
//         projectHeader.classList.add("project-header");
//         const projectName = document.createElement("h3");
//         projectName.textContent = project.getName();
//         projectHeader.appendChild(projectName);

//         const deleteProject = document.createElement("button");
//         deleteProject.textContent = "Delete Project";
//         deleteProject.classList.add("ghost-button");
//         deleteProject.addEventListener('click', (event) => {
//             event.preventDefault();
//             if (confirm("Are you sure you want to delete this project?")) {
//                 projectManager.deleteProject(project);
//             }
//             updateDisplay();
//         });
//         projectHeader.appendChild(deleteProject);
//         div.appendChild(projectHeader);

//         project.getProjectToDos().forEach(toDo => {
//             if (toDo !== undefined && toDo !== null) {
//                 const toDoDiv = document.createElement("div");
//                 toDoDiv.classList.add("toDo-display");

//                 const p = document.createElement("p");
//                 p.textContent = toDo.getTitle();

//                 toDoDiv.appendChild(p);

//                 const editToDo = document.createElement("button");
//                 editToDo.classList.add("ghost-button");
//                 editToDo.textContent = "Details"
//                 editToDo.addEventListener("click", (event) => {
//                     showToDoDetails(project, toDo);
//                 })
//                 toDoDiv.appendChild(editToDo);

//                 div.appendChild(toDoDiv);
//             }
//         });

//         const addToDo = document.createElement("button");
//         addToDo.addEventListener('click', (event) => {
//             event.preventDefault();
//             createToDoForm(project);
//         });
//         addToDo.textContent = "+ Todo";
//         div.appendChild(addToDo);

//         projectDiv.appendChild(div);

//         saveToStorage(projectManager.getProjects());
//     });
// }

// function searchBox() {
//     const projectDiv = document.createElement("div");

//     const intro = document.createElement("h2");
//     intro.textContent = "Add a new project";

//     const form = document.createElement("form");

//     const title = document.createElement("input");
//     title.type = "text";
//     title.placeholder = "Project Name";
//     title.id = "projectName";

//     const submit = document.createElement("button");
//     submit.textContent = "Submit";
//     submit.addEventListener('click', (event) => {
//         event.preventDefault();
//         const name = document.querySelector("#projectName").value;
//         projectManager.createProject(name);
//         document.querySelector("#projectForm").classList.add("hidden");
//         updateDisplay();
//     });

//     const cancel = document.createElement("button");
//     cancel.classList.add('ghost-button');
//     cancel.textContent = "Cancel";
//     cancel.addEventListener('click', (event) => {
//         event.preventDefault();
//         document.querySelector("#projectName").value = "";
//         showProjectList();
//     });

//     form.appendChild(title);
//     form.appendChild(submit);
//     form.appendChild(cancel);

//     projectDiv.appendChild(intro);
//     projectDiv.appendChild(form);
//     projectDiv.classList.add('hidden');
//     projectDiv.id = "projectForm";

//     return projectDiv;
// }

function loadHeader() {
    const header = document.createElement("header");

    const name = document.createElement("h1");
    name.textContent = "Weather App";

    header.appendChild(name);

    const nav = document.createElement("nav");

    const search = document.createElement("button");
    search.addEventListener("click", (event) => {
        event.preventDefault();
    });
    search.textContent = "Search Placeholder";

    nav.appendChild(search);

    header.appendChild(nav);

    return header;
}

function loadMain() {
    return document.createElement("main");
}

function loadFooter() {
    const footer = document.createElement("footer");
    const div = document.createElement("div");
    div.innerHTML =
        '<p>Copyright © <a href="https://www.github.com/jdelles">James Delles</a> 2021</p>';

    footer.appendChild(div);

    return footer;
}

function load() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader());
    content.appendChild(loadMain());
    content.appendChild(loadFooter());
}

export default load;
