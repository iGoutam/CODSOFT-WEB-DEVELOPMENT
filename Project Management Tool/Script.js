// document.addEventListener('DOMContentLoaded', function() {
//     const projectForm = document.getElementById('projectForm');
//     const projectList = document.getElementById('projectList');

//     projectForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const projectNameInput = document.getElementById('projectName');
//         const projectName = projectNameInput.value;
//         if (projectName.trim() !== '') {
//             addProject(projectName);
//             projectNameInput.value = '';
//         } else {
//             alert('Please enter a project name');
//         }
//     });

//     function addProject(name) {
//         const projectItem = document.createElement('div');
//         projectItem.classList.add('project-item');
//         projectItem.innerHTML = `
//             <h3>${name}</h3>
//             <button class="delete-btn">Delete</button>
//         `;
//         projectList.appendChild(projectItem);
//     }

//     projectList.addEventListener('click', function(event) {
//         if (event.target.classList.contains('delete-btn')) {
//             const projectItem = event.target.parentElement;
//             projectList.removeChild(projectItem);
//         }
//     });
// });