/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   "default": () => (/* binding */ todo),
/* harmony export */   projList: () => (/* binding */ projList)
/* harmony export */ });
const projList = createList('Tasks'); //storage of all projects

// p for proj, t for task
projList.getTaskOf = function (pIndex, tIndex) {
  return projList.getList()[pIndex].getList()[tIndex];
};

function createTask(name, dueDate, priority) {
  let task = {};

  task.name = name;
  task.dueDate = dueDate;
  task.priority = priority;
  task.isFin = 'Unfinished';

  task.setName = function (newName) {
    this.name = newName;
  };

  task.setDueDate = function (newDate) {
    this.dueDate = newDate;
  };

  task.setPriority = function (newPrio) {
    this.priority = newPrio;
  };

  task.toggleComplete = function () {
    if (this.isFin == 'Finished') {
      this.isFin = 'Unfinished';
    } else {
      this.isFin = 'Finished';
    }
  };

  task.delete = function () {
    for (let project of projList.getList()) {
      const taskIndex = project.getList().indexOf(this);
      if (taskIndex !== -1) {
        project.getList().splice(taskIndex, 1);
        break; // Exit the loop after deleting the task
      }
    }
  };

  return task;
}

function createList(name) {
  let list = {};

  list.name = name;
  list.items = []; // will store projects OR tasks

  list.setName = function (newName) {
    this.name = newName;
  };

  list.add = function (a) {
    this.items.push(a);
  };

  list.getList = function () {
    return this.items;
  };

  return list;
}

function todo() {
  projList.add(createList('General Task'));
  projList.add(createList('Test Project'));
  projList.add(createList('Test Project 2'));

  projList.getList()[0].add(createTask('Task name', '2023-05-01', 'Medium'));
  projList.getList()[0].add(createTask('Task name here', '2023-08-09', 'High'));
  projList.getList()[0].add(createTask('Task name here', '2023-08-09', 'High'));
  projList.getList()[1].add(createTask('Task name here', '2023-08-09', 'Low'));
  projList.getList()[1].add(createTask('Task name here', '2023-08-09', 'High'));
  projList.getList()[1].add(createTask('Task name here', '2023-08-09', 'Low'));
  projList.getList()[2].add(createTask('Task name', '2023-05-01', 'Medium'));
  projList.getList()[2].add(createTask('Task name here', '2023-07-23', 'Low'));
  projList.getList()[2].add(createTask('Task name here', '2023-07-23', 'High'));
  projList.getList()[2].add(createTask('Task name here', '2023-07-23', 'High'));
}


/***/ }),

/***/ "./src/uiDisplay.js":
/*!**************************!*\
  !*** ./src/uiDisplay.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _assets_proj_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/proj.png */ "./src/assets/proj.png");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/delete.png */ "./src/assets/delete.png");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");




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

function init() {
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
  projImg.src = _assets_proj_png__WEBPACK_IMPORTED_MODULE_0__;
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
  delImg.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;

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

  for (let project of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
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

  for (let project of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
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
      delImg.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;

      taskCount.textContent = `${uncompletedTasks.length} unfinished tasks`;

      delBtn.addEventListener('mousedown', () => {
        projCard.remove();
        _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().splice(_todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(project), 1);
      })

      projCard.addEventListener('click', (e) => {
        if (e.target != delBtn || e.target != delImg) {
          backToProj.classList.add('visible');
          unchild(container);

          contentHeader.textContent = project.name;
          contentHeader.dataset.index = `${_todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(project)}`;
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
  for (let proj of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
    const project = document.createElement('option');
    project.dataset.index = _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(proj);
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
        _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()[selectedOption].add((0,_todolist__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskNameField.value, taskDueDate.value, taskPriority.value));

        unchild(container);
        loadTaskPg();
      } else {
        _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()[i].add((0,_todolist__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskNameField.value, taskDueDate.value, taskPriority.value));
        unchild(container);

        for (let task of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()[i].getList()) {
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
    _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.add((0,_todolist__WEBPACK_IMPORTED_MODULE_2__.createList)(projNameField.value));
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
    for (let proj of _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList()) {
      const project = document.createElement('option');
      project.dataset.index = _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(proj);
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


/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92881cf98b591daca7ae.png";

/***/ }),

/***/ "./src/assets/proj.png":
/*!*****************************!*\
  !*** ./src/assets/proj.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0edbe23457b28843cafd.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
/* harmony import */ var _uiDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiDisplay */ "./src/uiDisplay.js");



(0,_todolist__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_uiDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sc0NBQXNDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGeUM7QUFDQztBQUNvQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBUTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBTzs7QUFFdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsK0NBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLCtDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsY0FBYyxHQUFHLHlCQUF5QjtBQUN0RSxtQkFBbUIsK0NBQU87O0FBRTFCLGlDQUFpQyx5QkFBeUI7O0FBRTFEO0FBQ0E7QUFDQSxRQUFRLCtDQUFRLGtCQUFrQiwrQ0FBUTtBQUMxQyxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLCtDQUFRLDRCQUE0QjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBUTtBQUMzQjtBQUNBLDRCQUE0QiwrQ0FBUTtBQUNwQyw2QkFBNkIsVUFBVTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBUSwrQkFBK0IscURBQVU7O0FBRXpEO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSwrQ0FBUSxrQkFBa0IscURBQVU7QUFDNUM7O0FBRUEseUJBQXlCLCtDQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksK0NBQVEsS0FBSyxxREFBVTtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFRO0FBQzdCO0FBQ0EsOEJBQThCLCtDQUFRO0FBQ3RDLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQjhCO0FBQ0c7O0FBRWpDLHFEQUFJO0FBQ0osc0RBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qTGlzdCA9IGNyZWF0ZUxpc3QoJ1Rhc2tzJyk7IC8vc3RvcmFnZSBvZiBhbGwgcHJvamVjdHNcblxuLy8gcCBmb3IgcHJvaiwgdCBmb3IgdGFza1xucHJvakxpc3QuZ2V0VGFza09mID0gZnVuY3Rpb24gKHBJbmRleCwgdEluZGV4KSB7XG4gIHJldHVybiBwcm9qTGlzdC5nZXRMaXN0KClbcEluZGV4XS5nZXRMaXN0KClbdEluZGV4XTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGxldCB0YXNrID0ge307XG5cbiAgdGFzay5uYW1lID0gbmFtZTtcbiAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0YXNrLmlzRmluID0gJ1VuZmluaXNoZWQnO1xuXG4gIHRhc2suc2V0TmFtZSA9IGZ1bmN0aW9uIChuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICB0YXNrLnNldER1ZURhdGUgPSBmdW5jdGlvbiAobmV3RGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIH07XG5cbiAgdGFzay5zZXRQcmlvcml0eSA9IGZ1bmN0aW9uIChuZXdQcmlvKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW87XG4gIH07XG5cbiAgdGFzay50b2dnbGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0ZpbiA9PSAnRmluaXNoZWQnKSB7XG4gICAgICB0aGlzLmlzRmluID0gJ1VuZmluaXNoZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRmluID0gJ0ZpbmlzaGVkJztcbiAgICB9XG4gIH07XG5cbiAgdGFzay5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qTGlzdC5nZXRMaXN0KCkpIHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3QuZ2V0TGlzdCgpLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICBwcm9qZWN0LmdldExpc3QoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgYWZ0ZXIgZGVsZXRpbmcgdGhlIHRhc2tcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgbGV0IGxpc3QgPSB7fTtcblxuICBsaXN0Lm5hbWUgPSBuYW1lO1xuICBsaXN0Lml0ZW1zID0gW107IC8vIHdpbGwgc3RvcmUgcHJvamVjdHMgT1IgdGFza3NcblxuICBsaXN0LnNldE5hbWUgPSBmdW5jdGlvbiAobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgbGlzdC5hZGQgPSBmdW5jdGlvbiAoYSkge1xuICAgIHRoaXMuaXRlbXMucHVzaChhKTtcbiAgfTtcblxuICBsaXN0LmdldExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG8oKSB7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdHZW5lcmFsIFRhc2snKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QgMicpKTtcblxuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZScsICcyMDIzLTA1LTAxJywgJ01lZGl1bScpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzBdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnTG93JykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUnLCAnMjAyMy0wNS0wMScsICdNZWRpdW0nKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdMb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnSGlnaCcpKTtcbn1cbiIsImltcG9ydCBwcm9qTG9nbyBmcm9tICcuL2Fzc2V0cy9wcm9qLnBuZyc7XG5pbXBvcnQgZGVsTG9nbyBmcm9tICcuL2Fzc2V0cy9kZWxldGUucG5nJztcbmltcG9ydCB7IHByb2pMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi90b2RvbGlzdCc7XG5cbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudC1oZWFkZXIgcCcpO1xuY29uc3QgYmFja1RvUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLWJ0bicpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuY29uc3QgbmF2TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24ub3B0aW9ucycpO1xuY29uc3QgdGFza01lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza29wdGlvbi1idG4nKTtcbmNvbnN0IGhlYWRlcm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gbmF2Jyk7XG5jb25zdCB0YXNrbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudScpO1xuY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvaicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsb2FkVGFza1BnKCk7XG4gIGxvYWRQZ09uQ2xpY2soKTtcbiAgY3JlYXRlVGFza0Zvcm0oKTtcbiAgY3JlYXRlUHJvakZvcm0oKTtcblxuICBuYXZNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05hdihoZWFkZXJuYXYpKTtcbiAgdGFza01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TmF2KHRhc2tuYXYpKTtcbiAgYmFja1RvUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuY2hpbGQoY29udGFpbmVyKSk7XG4gIGJhY2tUb1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdFBnKTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBZGRUYXNrRm9ybSk7XG4gIGFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWRkUHJvakZvcm0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFR0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvakhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcHJvalR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwcm9qSW1nID0gbmV3IEltYWdlKCk7XG4gIHByb2pJbWcuc3JjID0gcHJvakxvZ287XG4gIHByb2pUdC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICBpZiAocHJvamVjdC5uYW1lID09ICdHZW5lcmFsIFRhc2snKSB7XG4gICAgcHJvalR0LmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHByb2pUdC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgcHJvalR0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBwcm9qZWN0Lm5hbWUgPSBwcm9qVHQudGV4dENvbnRlbnQpO1xuXG4gIHByb2pIZWFkZXIuYXBwZW5kKHByb2pJbWcsIHByb2pUdCk7XG4gIGNvbnRhaW5lci5hcHBlbmQocHJvakhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gIG5hbWUuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0ZScpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcbiAgY29uc3QgZGVsSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgc3RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmlzRmluO1xuICBkYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gIGRlbEltZy5zcmMgPSBkZWxMb2dvO1xuXG4gIHRhc2tDYXJkLmFwcGVuZChuYW1lLCBzdGF0ZSwgZGF0ZSwgcHJpb3JpdHksIGRlbEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmQodGFza0NhcmQpO1xuICBkZWxCdG4uYXBwZW5kKGRlbEltZyk7XG5cbiAgc2hvd1Rhc2tOYXZCdG5zKCk7XG5cbiAgLy9mb3IgZWRpdGluZyB0YXNrc1xuXG4gIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhMTI1MzUnO1xuICBpZiAodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM5YzcwMmEnO1xuICBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93JykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzVlM2QnO1xuXG4gIGlmICh0YXNrLmlzRmluID09ICdGaW5pc2hlZCcpIHtcbiAgICBuYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgdGFza0NhcmQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNTAlKSc7XG4gICAgbmFtZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgcHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVsQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFza0NhcmQucmVtb3ZlKCk7XG4gICAgdGFzay5kZWxldGUoKTtcbiAgfVxuXG4gIHByaW9yaXR5Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdMb3cnKVxuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykge1xuICAgICAgdGFzay5zZXRQcmlvcml0eSgnSGlnaCcpXG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdMb3cnKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdNZWRpdW0nKVxuICAgIH1cblxuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhMTI1MzUnO1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljNzAyYSc7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGM1ZTNkJztcbiAgfVxuXG4gIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRhc2submFtZSA9IG5hbWUudGV4dENvbnRlbnQpO1xuICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB0YXNrLmR1ZURhdGUgPSBkYXRlLnZhbHVlKTtcblxuICBzdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodGFzay5pc0ZpbiA9PSAnVW5maW5pc2hlZCcpIHtcbiAgICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIHRhc2tDYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDYwJSknO1xuICAgICAgbmFtZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBwcmlvcml0eS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgIHRhc2tDYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEwMCUpJztcbiAgICAgIG5hbWUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHByaW9yaXR5LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBkYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgICBzdGF0ZS50ZXh0Q29udGVudCA9IHRhc2suaXNGaW47XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNob3dOYXYoZWxlbWVudCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFByb2pEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcHJvai1jb250YWluZXInKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNob3dUYXNrTmF2QnRucygpO1xuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5jaGlsZChwYXJlbnQpIHtcbiAgdmFyIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tQZygpIHtcbiAgY29udGVudEhlYWRlci5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUQVNLUyc7XG4gIGNvbnRlbnRIZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUgYnV0dG9uOmZpcnN0LWNoaWxkJykuc3R5bGUuZGlzcGxheSA9XG4gICAgJ2Jsb2NrJztcblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGRpc3BsYXlQcm9qZWN0VHQocHJvamVjdCk7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LmdldExpc3QoKSkge1xuICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0UGcoKSB7XG4gIHVuVmlzaWJsZSgpO1xuICBoaWRlVGFza05hdkJ0bnMoKTtcblxuICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJztcbiAgY29udGVudEhlYWRlci5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgY29udGVudEhlYWRlci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGlmIChwcm9qZWN0Lm5hbWUgIT0gJ3VubGlzdGVkJykge1xuICAgICAgY29uc3QgcHJvakNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2pDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2otY2FyZCcpO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvai1uYW1lJyk7XG4gICAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0YXNrQ291bnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb3VudCcpO1xuICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICAgICAgY29uc3QgZGVsSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIGNvbnN0IHVuY29tcGxldGVkVGFza3MgPSBwcm9qZWN0XG4gICAgICAgIC5nZXRMaXN0KClcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5pc0ZpbiAhPSAnRmluaXNoZWQnKTtcblxuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX0gKCR7cHJvamVjdC5nZXRMaXN0KCkubGVuZ3RofSlgO1xuICAgICAgZGVsSW1nLnNyYyA9IGRlbExvZ287XG5cbiAgICAgIHRhc2tDb3VudC50ZXh0Q29udGVudCA9IGAke3VuY29tcGxldGVkVGFza3MubGVuZ3RofSB1bmZpbmlzaGVkIHRhc2tzYDtcblxuICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgcHJvakNhcmQucmVtb3ZlKCk7XG4gICAgICAgIHByb2pMaXN0LmdldExpc3QoKS5zcGxpY2UocHJvakxpc3QuZ2V0TGlzdCgpLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgfSlcblxuICAgICAgcHJvakNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgIT0gZGVsQnRuIHx8IGUudGFyZ2V0ICE9IGRlbEltZykge1xuICAgICAgICAgIGJhY2tUb1Byb2ouY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgIHVuY2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgY29udGVudEhlYWRlci5kYXRhc2V0LmluZGV4ID0gYCR7cHJvakxpc3QuZ2V0TGlzdCgpLmluZGV4T2YocHJvamVjdCl9YDtcbiAgICAgICAgICBjb250ZW50SGVhZGVyLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgY29udGVudEhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gcHJvamVjdC5uYW1lID0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBjb25zdCBhZGRQcm9qRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHByb2otY29udGFpbmVyJyk7XG4gICAgICAgICAgYWRkUHJvakRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LmdldExpc3QoKSkge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb2plY3QubmFtZSA9PSAnR2VuZXJhbCBUYXNrJykge1xuICAgICAgICBwcm9qQ2FyZC5hcHBlbmQobmFtZSwgdGFza0NvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2pDYXJkLmFwcGVuZChuYW1lLCB0YXNrQ291bnQsIGRlbEJ0bik7XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kKHByb2pDYXJkKTtcbiAgICAgIGRlbEJ0bi5hcHBlbmQoZGVsSW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBnT25DbGljaygpIHtcbiAgbGV0IGFjdGl2ZSA9ICcnO1xuICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYnMpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBhY3RpdmUgPSBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgdGFicykge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1blZpc2libGUoKTtcblxuICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICdwcm9qJykgbG9hZFByb2plY3RQZygpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICd0YXNrcycpIGxvYWRUYXNrUGcoKTtcblxuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgYWN0aXZlID0gZWxlbWVudDtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgY29uc3QgdFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRULmNsYXNzTmFtZSA9ICdhZGQtdGFzay10aXRsZSc7XG4gIHRULnRleHRDb250ZW50ID0gJ05FVyBUQVNLJztcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUYXNrRGl2LmlkID0gJ2FkZHRhc2stY29udGFpbmVyJztcbiAgY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tOYW1lRmllbGQuaWQgPSAnbmFtZS1maWVsZCc7XG4gIHRhc2tOYW1lRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgdGFza05hbWVGaWVsZC5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUuLi4nO1xuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgdGFza0R1ZURhdGUuaWQgPSAnZHVlZGF0ZS1maWVsZCc7XG4gIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG5cbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHktY29udGFpbmVyJztcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQUklPUklUWSc7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBtZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICB0YXNrUHJpb3JpdHkuYXBwZW5kKGxvdywgbWVkaXVtLCBoaWdoKTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHRhc2tQcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcm9qQ29udGFpbmVyLmlkID0gJ3Byb2otc2VsZWN0LWNvbnRhaW5lcic7XG4gIGZvciAobGV0IHByb2ogb2YgcHJvakxpc3QuZ2V0TGlzdCgpKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHByb2plY3QuZGF0YXNldC5pbmRleCA9IHByb2pMaXN0LmdldExpc3QoKS5pbmRleE9mKHByb2opO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBgJHtwcm9qLm5hbWV9YDtcbiAgICBwcm9qQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KTtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5pZCA9ICdhZGR0YXNrLWJ0bi1jb250YWluZXInO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2F2ZUJ0biwgY2FuY2VsQnRuKTtcblxuICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGkgPSBjb250ZW50SGVhZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gcHJvakNvbnRhaW5lci5vcHRpb25zW3Byb2pDb250YWluZXIuc2VsZWN0ZWRJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG5cbiAgICBpZiAodGFza05hbWVGaWVsZC52YWx1ZSAhPSAnJykge1xuICAgICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT0gJ1RBU0tTJykge1xuICAgICAgICBwcm9qTGlzdC5nZXRMaXN0KClbc2VsZWN0ZWRPcHRpb25dLmFkZChjcmVhdGVUYXNrKHRhc2tOYW1lRmllbGQudmFsdWUsIHRhc2tEdWVEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUpKTtcblxuICAgICAgICB1bmNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIGxvYWRUYXNrUGcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2pMaXN0LmdldExpc3QoKVtpXS5hZGQoY3JlYXRlVGFzayh0YXNrTmFtZUZpZWxkLnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlKSk7XG4gICAgICAgIHVuY2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2pMaXN0LmdldExpc3QoKVtpXS5nZXRMaXN0KCkpIHtcbiAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRhc2tOYW1lRmllbGQudmFsdWUgPSAnJztcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRvZGF5O1xuICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICAgIGhpZGVUYXNrTmF2QnRucygpO1xuICB9KTtcblxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd1Rhc2tOYXZCdG5zKCk7XG4gICAgdGFza05hbWVGaWVsZC52YWx1ZSA9ICcnXG4gICAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAnTG93JztcbiAgICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGFkZFRhc2tEaXYuYXBwZW5kKFxuICAgIHRULFxuICAgIHRhc2tOYW1lRmllbGQsXG4gICAgdGFza0R1ZURhdGUsXG4gICAgcHJpb3JpdHlDb250YWluZXIsXG4gICAgcHJvakNvbnRhaW5lcixcbiAgICBidXR0b25zQ29udGFpbmVyXG4gICk7XG5cbiAgdGFza25hdi5hcHBlbmQoYWRkVGFza0Rpdik7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1maWVsZCcpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZS1maWVsZCcpO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otc2VsZWN0LWNvbnRhaW5lcicpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGhpZGVUYXNrTmF2QnRucygpO1xuICB0YXNrTmFtZUZpZWxkLmZvY3VzKCk7XG5cbiAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT0gJ1RBU0tTJykge1xuICAgIHByb2pDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgcHJvakNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cblxuICB0YXNrTmFtZUZpZWxkLnZhbHVlID0gJydcbiAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgdGFza1ByaW9yaXR5LnZhbHVlID0gJ0xvdyc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2pGb3JtKCkge1xuICBjb25zdCB0VCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdFQuY2xhc3NOYW1lID0gJ2FkZC1wcm9qLXRpdGxlJztcbiAgdFQudGV4dENvbnRlbnQgPSAnTkVXIFBST0pFQ1QnO1xuICBjb25zdCBhZGRQcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFByb2pEaXYuaWQgPSAnYWRkcHJvai1jb250YWluZXInO1xuICBjb25zdCBwcm9qTmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvak5hbWVGaWVsZC5pZCA9ICdwcm9qbmFtZS1maWVsZCc7XG4gIHByb2pOYW1lRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgcHJvak5hbWVGaWVsZC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IG5hbWUuLi4nO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5pZCA9ICdhZGRwcm9qLWJ0bi1jb250YWluZXInO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2F2ZUJ0biwgY2FuY2VsQnRuKTtcblxuICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KHByb2pOYW1lRmllbGQudmFsdWUpKTtcbiAgICB1bmNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PSAnVEFTS1MnKSBsb2FkVGFza1BnKCk7XG4gICAgaWYgKGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPT0gJ1BST0pFQ1RTJykgbG9hZFByb2plY3RQZygpO1xuXG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrLWNvbnRhaW5lcicpO1xuICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcHJvak5hbWVGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHNob3dUYXNrTmF2QnRucygpO1xuXG4gICAgLy91cGRhdGUgdGhlIHNlbGVjdCBpbiB0YXNrIGZvcm0gdG8gYWRkIG5ldyBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1zZWxlY3QtY29udGFpbmVyJyk7XG4gICAgdW5jaGlsZChwcm9qQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBwcm9qIG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgcHJvamVjdC5kYXRhc2V0LmluZGV4ID0gcHJvakxpc3QuZ2V0TGlzdCgpLmluZGV4T2YocHJvaik7XG4gICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cHJvai5uYW1lfWA7XG4gICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93VGFza05hdkJ0bnMoKTtcbiAgICBwcm9qTmFtZUZpZWxkLnZhbHVlID0gJydcbiAgICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGFkZFByb2pEaXYuYXBwZW5kKHRULCBwcm9qTmFtZUZpZWxkLCBidXR0b25zQ29udGFpbmVyKTtcbiAgdGFza25hdi5hcHBlbmQoYWRkUHJvakRpdik7XG4gIGFkZFByb2pEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFByb2pGb3JtKCkge1xuICBjb25zdCBhZGRQcm9qRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHByb2otY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2pOYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvam5hbWUtZmllbGQnKTtcblxuICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGhpZGVUYXNrTmF2QnRucygpO1xuICBwcm9qTmFtZUZpZWxkLmZvY3VzKCk7XG5cbiAgcHJvak5hbWVGaWVsZC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza05hdkJ0bnMoKSB7XG4gIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09ICdUQVNLUycpIHtcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSBpZiAoY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9PSAnUFJPSkVDVFMnKSB7XG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZVRhc2tOYXZCdG5zKCkge1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdW5WaXNpYmxlKCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFByb2pEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcHJvai1jb250YWluZXInKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhZGRQcm9qRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGJhY2tUb1Byb2ouY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB0YXNrbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgdG9kbyBmcm9tICcuL3RvZG9saXN0JztcbmltcG9ydCB1aUluaXQgZnJvbSAnLi91aURpc3BsYXknO1xuXG50b2RvKCk7XG51aUluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==