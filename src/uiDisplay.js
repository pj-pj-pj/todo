import projLogo from '/dist/assets/proj.png';
import delLogo from '/dist/assets/delete.png';
import { projList, createList, createTask } from './todolist';

const contentHeader = document.querySelector('div#content-header p');
const backToProj = document.querySelector('#back-btn');
const container = document.querySelector('div#container');
const navMenuBtn = document.querySelector('header button.options');
const taskMenuBtn = document.querySelector('.taskoption-btn');
const headernav = document.querySelector('main nav');
const tasknav = document.querySelector('.task-menu');
const tabs = document.getElementsByClassName('tab');
const addTask = document.querySelector('#add-task');
const addProj = document.querySelector('#add-proj');

export default function init() {
  loadTaskPg();
  loadPgOnClick();
  createTaskForm();
  createProjForm();

  navMenuBtn.addEventListener('click', () => showNav(headernav));
  taskMenuBtn.addEventListener('click', () => showNav(tasknav));
  backToProj.addEventListener('click', () => unchild(container));
  backToProj.addEventListener('click', loadProjectPg);
  addTask.addEventListener('click', loadAddTaskForm);
  addProj.addEventListener('click', loadAddProjForm);
}

function displayProjectTt(project) {
  const projHeader = document.createElement('span');
  const projTt = document.createElement('p');
  const projImg = new Image();
  projImg.src = projLogo;
  projTt.textContent = project.name;

  if (project.name == 'General Task') {
    projTt.contentEditable = false;
  } else {
    projTt.contentEditable = true;
  }

  projTt.addEventListener('blur', () => project.name = projTt.textContent);

  projHeader.append(projImg, projTt);
  container.append(projHeader);
}

function displayTask(task) {
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  const name = document.createElement('p');
  name.classList.add('task-name');
  name.contentEditable = true;
  const state = document.createElement('button');
  state.classList.add('task-state');
  const date = document.createElement('input');
  date.type = 'date';
  date.classList.add('task-date');
  const priority = document.createElement('button');
  priority.classList.add('priority');
  const delBtn = document.createElement('button');
  delBtn.classList.add('del-btn');
  const delImg = new Image();

  name.textContent = task.name;
  state.textContent = task.isFin;
  date.value = task.dueDate;
  priority.textContent = task.priority;
  delImg.src = delLogo;

  taskCard.append(name, state, date, priority, delBtn);
  container.append(taskCard);
  delBtn.append(delImg);

  showTaskNavBtns();

  //for editing tasks

  if (task.priority == 'High') priority.style.backgroundColor = '#a12535';
  if (task.priority == 'Medium') priority.style.backgroundColor = '#9c702a';
  if (task.priority == 'Low') priority.style.backgroundColor = '#4c5e3d';

  if (task.isFin == 'Finished') {
    name.style.textDecoration = 'line-through';
    taskCard.style.filter = 'brightness(50%)';
    name.disabled = true;
    priority.disabled = true;
    date.disabled = true;
  }

  delBtn.onclick = function () {
    taskCard.remove();
    task.delete();
  }

  priority.onclick = function () {
    if (task.priority == 'High') {
      task.setPriority('Low')
    } else if (task.priority == 'Medium') {
      task.setPriority('High')
    } else if (task.priority == 'Low') {
      task.setPriority('Medium')
    }

    priority.textContent = task.priority;

    if (task.priority == 'High') priority.style.backgroundColor = '#a12535';
    if (task.priority == 'Medium') priority.style.backgroundColor = '#9c702a';
    if (task.priority == 'Low') priority.style.backgroundColor = '#4c5e3d';
  }

  name.addEventListener('blur', () => task.name = name.textContent);
  date.addEventListener('blur', () => task.dueDate = date.value);

  state.addEventListener('click', () => {
    if (task.isFin == 'Unfinished') {
      name.style.textDecoration = 'line-through';
      taskCard.style.filter = 'brightness(60%)';
      name.disabled = true;
      priority.disabled = true;
      date.disabled = true;
    } else {
      name.style.textDecoration = 'none';
      taskCard.style.filter = 'brightness(100%)';
      name.disabled = false;
      priority.disabled = false;
      date.disabled = false;
    }
    task.toggleComplete();
    state.textContent = task.isFin;
  })
}

function showNav(element) {
  const addTaskDiv = document.querySelector('#addtask-container');
  const addProjDiv = document.querySelector('#addproj-container');
  addTaskDiv.style.display = 'none';
  addProjDiv.style.display = 'none';
  showTaskNavBtns();

  if (element.classList.contains('visible')) {
    element.classList.remove('visible');
  } else {
    element.classList.add('visible');
  }
}

function unchild(parent) {
  var child = parent.firstChild;
  while (child) {
    child.remove();
    child = parent.firstChild;
  }
}

function loadTaskPg() {
  contentHeader.contentEditable = false;
  contentHeader.textContent = 'TASKS';
  contentHeader.removeAttribute('data-index');
  document.querySelector('.task-menu button:first-child').style.display =
    'block';

  for (let project of projList.getList()) {
    displayProjectTt(project);
    for (let task of project.getList()) {
      displayTask(task);
    }
  }
}

function loadProjectPg() {
  unVisible();
  hideTaskNavBtns();

  contentHeader.textContent = 'PROJECTS';
  contentHeader.contentEditable = false;
  contentHeader.removeAttribute('data-index');

  for (let project of projList.getList()) {
    if (project.name != 'unlisted') {
      const projCard = document.createElement('div');
      projCard.classList.add('proj-card');
      const name = document.createElement('p');
      name.classList.add('proj-name');
      const taskCount = document.createElement('p');
      taskCount.classList.add('task-count');
      const delBtn = document.createElement('button');
      delBtn.classList.add('del-btn');
      const delImg = new Image();

      const uncompletedTasks = project
        .getList()
        .filter((task) => task.isFin != 'Finished');

      name.textContent = `${project.name} (${project.getList().length})`;
      delImg.src = delLogo;

      taskCount.textContent = `${uncompletedTasks.length} unfinished tasks`;

      delBtn.addEventListener('mousedown', () => {
        projCard.remove();
        projList.getList().splice(projList.getList().indexOf(project), 1);
      })

      projCard.addEventListener('click', (e) => {
        if (e.target != delBtn || e.target != delImg) {
          backToProj.classList.add('visible');
          unchild(container);

          contentHeader.textContent = project.name;
          contentHeader.dataset.index = `${projList.getList().indexOf(project)}`;
          contentHeader.contentEditable = true;
          contentHeader.addEventListener('blur', () => project.name = contentHeader.textContent);
          addTask.style.display = 'block';
          const addProjDiv = document.querySelector('#addproj-container');
          addProjDiv.style.display = 'none';

          for (let task of project.getList()) {
            displayTask(task);
          }
        }
      });

      if (project.name == 'General Task') {
        projCard.append(name, taskCount);
      } else {
        projCard.append(name, taskCount, delBtn);
      }
      container.append(projCard);
      delBtn.append(delImg);
    }
  }
}

function loadPgOnClick() {
  let active = '';
  for (let element of tabs) {
    if (element.classList.contains('active')) {
      active = element;
    }
  }

  for (let element of tabs) {
    element.addEventListener('click', () => {
      unVisible();

      unchild(container);
      if (element.getAttribute('id') == 'proj') loadProjectPg();
      if (element.getAttribute('id') == 'tasks') loadTaskPg();

      active.classList.remove('active');
      element.classList.add('active');

      active = element;
    });
  }
}

function createTaskForm() {
  const tT = document.createElement('p');
  tT.className = 'add-task-title';
  tT.textContent = 'NEW TASK';
  const addTaskDiv = document.createElement('div');
  addTaskDiv.id = 'addtask-container';
  const taskNameField = document.createElement('input');
  taskNameField.id = 'name-field';
  taskNameField.type = 'text';
  taskNameField.placeholder = 'Task name...';

  const today = new Date().toISOString().split('T')[0];
  const taskDueDate = document.createElement('input');
  taskDueDate.value = today;
  taskDueDate.id = 'duedate-field';
  taskDueDate.type = 'date';

  const priorityContainer = document.createElement('div');
  priorityContainer.id = 'priority-container';
  const priorityLabel = document.createElement('p');
  priorityLabel.textContent = 'PRIORITY';
  const taskPriority = document.createElement('select');
  const high = document.createElement('option');
  high.textContent = 'High';
  const medium = document.createElement('option');
  medium.textContent = 'Medium';
  const low = document.createElement('option');
  low.textContent = 'Low';
  taskPriority.append(low, medium, high);
  priorityContainer.append(priorityLabel, taskPriority);

  const projContainer = document.createElement('select');
  projContainer.id = 'proj-select-container';
  for (let proj of projList.getList()) {
    const project = document.createElement('option');
    project.dataset.index = projList.getList().indexOf(proj);
    project.textContent = `${proj.name}`;
    projContainer.append(project);
  }

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'addtask-btn-container';
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'SAVE';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'CANCEL';
  buttonsContainer.append(saveBtn, cancelBtn);

  saveBtn.addEventListener('click', () => {
    const i = contentHeader.getAttribute('data-index');
    const selectedOption = projContainer.options[projContainer.selectedIndex].getAttribute('data-index');

    if (taskNameField.value != '') {
      if (contentHeader.textContent == 'TASKS') {
        projList.getList()[selectedOption].add(createTask(taskNameField.value, taskDueDate.value, taskPriority.value));

        unchild(container);
        loadTaskPg();
      } else {
        projList.getList()[i].add(createTask(taskNameField.value, taskDueDate.value, taskPriority.value));
        unchild(container);

        for (let task of projList.getList()[i].getList()) {
          displayTask(task);
        }
      }
    }

    taskNameField.value = '';
    taskDueDate.value = today;
    taskPriority.value = 'Low';
    hideTaskNavBtns();
  });

  cancelBtn.addEventListener('click', () => {
    showTaskNavBtns();
    taskNameField.value = ''
    taskDueDate.value = today;
    taskPriority.value = 'Low';
    addTaskDiv.style.display = 'none';
  });

  addTaskDiv.append(
    tT,
    taskNameField,
    taskDueDate,
    priorityContainer,
    projContainer,
    buttonsContainer
  );

  tasknav.append(addTaskDiv);
  addTaskDiv.style.display = 'none';
}

function loadAddTaskForm() {
  const addTaskDiv = document.querySelector('#addtask-container');
  const taskNameField = document.querySelector('#name-field');
  const taskPriority = document.querySelector('select');
  const taskDueDate = document.querySelector('#duedate-field');
  const today = new Date().toISOString().split('T')[0];
  const projContainer = document.querySelector('#proj-select-container');
  addTaskDiv.style.display = 'flex';
  hideTaskNavBtns();
  taskNameField.focus();

  if (contentHeader.textContent == 'TASKS') {
    projContainer.style.display = 'block';
  } else {
    projContainer.style.display = 'none'
  }

  taskNameField.value = ''
  taskDueDate.value = today;
  taskPriority.value = 'Low';
}

function createProjForm() {
  const tT = document.createElement('p');
  tT.className = 'add-proj-title';
  tT.textContent = 'NEW PROJECT';
  const addProjDiv = document.createElement('div');
  addProjDiv.id = 'addproj-container';
  const projNameField = document.createElement('input');
  projNameField.id = 'projname-field';
  projNameField.type = 'text';
  projNameField.placeholder = 'Project name...';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'addproj-btn-container';
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'SAVE';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'CANCEL';
  buttonsContainer.append(saveBtn, cancelBtn);

  saveBtn.addEventListener('click', () => {
    projList.add(createList(projNameField.value));
    unchild(container);

    if (contentHeader.textContent == 'TASKS') loadTaskPg();
    if (contentHeader.textContent == 'PROJECTS') loadProjectPg();

    const addTaskDiv = document.querySelector('#addtask-container');
    addTaskDiv.style.display = 'none';
    addProjDiv.style.display = 'none';
    projNameField.value = '';
    showTaskNavBtns();

    //update the select in task form to add new projects
    const projContainer = document.querySelector('#proj-select-container');
    unchild(projContainer);
    for (let proj of projList.getList()) {
      const project = document.createElement('option');
      project.dataset.index = projList.getList().indexOf(proj);
      project.textContent = `${proj.name}`;
      projContainer.append(project);
    }
  });

  cancelBtn.addEventListener('click', () => {
    showTaskNavBtns();
    projNameField.value = ''
    addProjDiv.style.display = 'none';
  });

  addProjDiv.append(tT, projNameField, buttonsContainer);
  tasknav.append(addProjDiv);
  addProjDiv.style.display = 'none';
}

function loadAddProjForm() {
  const addProjDiv = document.querySelector('#addproj-container');
  const projNameField = document.querySelector('#projname-field');

  addProjDiv.style.display = 'flex';
  hideTaskNavBtns();
  projNameField.focus();

  projNameField.value = '';
}

function showTaskNavBtns() {
  if (contentHeader.textContent == 'TASKS') {
    addTask.style.display = 'block';
    addProj.style.display = 'block';
  } else if (contentHeader.textContent == 'PROJECTS') {
    addTask.style.display = 'none';
    addProj.style.display = 'block';
  } else {
    addTask.style.display = 'block';
    addProj.style.display = 'none';
  }
}

function hideTaskNavBtns() {
  addTask.style.display = 'none';
  addProj.style.display = 'none';
}

function unVisible() {
  const addTaskDiv = document.querySelector('#addtask-container');
  const addProjDiv = document.querySelector('#addproj-container');
  addTaskDiv.style.display = 'none';
  addProjDiv.style.display = 'none';
  backToProj.classList.remove('visible');
  tasknav.classList.remove('visible');
}
