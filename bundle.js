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

  navMenuBtn.addEventListener('click', () => showNav(headernav));
  taskMenuBtn.addEventListener('click', () => showNav(tasknav));
  backToProj.addEventListener('click', () => unchild(container));
  backToProj.addEventListener('click', loadProjectPg);
  addTask.addEventListener('click', loadAddTaskForm);
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
  const header = document.querySelector('p.title');
  addTaskDiv.style.display = 'none';
  if (header.textContent !== 'PROJECTS') showTaskNavBtns();

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
  showTaskNavBtns();
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

  const addTaskDiv = document.querySelector('#addtask-container');
  addTaskDiv.style.display = 'none';
  addProj.style.display = 'block';
  addTask.style.display = 'none';

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
  priorityLabel.textContent = 'PRIORITY:';
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

function showTaskNavBtns() {
  addTask.style.display = 'block';
  addProj.style.display = 'block';
}

function hideTaskNavBtns() {
  addTask.style.display = 'none';
  addProj.style.display = 'none';
}

function unVisible() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQjhCO0FBQ0c7O0FBRWpDLHFEQUFJO0FBQ0osc0RBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qTGlzdCA9IGNyZWF0ZUxpc3QoJ1Rhc2tzJyk7IC8vc3RvcmFnZSBvZiBhbGwgcHJvamVjdHNcblxuLy8gcCBmb3IgcHJvaiwgdCBmb3IgdGFza1xucHJvakxpc3QuZ2V0VGFza09mID0gZnVuY3Rpb24gKHBJbmRleCwgdEluZGV4KSB7XG4gIHJldHVybiBwcm9qTGlzdC5nZXRMaXN0KClbcEluZGV4XS5nZXRMaXN0KClbdEluZGV4XTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGxldCB0YXNrID0ge307XG5cbiAgdGFzay5uYW1lID0gbmFtZTtcbiAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0YXNrLmlzRmluID0gJ1VuZmluaXNoZWQnO1xuXG4gIHRhc2suc2V0TmFtZSA9IGZ1bmN0aW9uIChuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICB0YXNrLnNldER1ZURhdGUgPSBmdW5jdGlvbiAobmV3RGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIH07XG5cbiAgdGFzay5zZXRQcmlvcml0eSA9IGZ1bmN0aW9uIChuZXdQcmlvKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW87XG4gIH07XG5cbiAgdGFzay50b2dnbGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0ZpbiA9PSAnRmluaXNoZWQnKSB7XG4gICAgICB0aGlzLmlzRmluID0gJ1VuZmluaXNoZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRmluID0gJ0ZpbmlzaGVkJztcbiAgICB9XG4gIH07XG5cbiAgdGFzay5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qTGlzdC5nZXRMaXN0KCkpIHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3QuZ2V0TGlzdCgpLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICBwcm9qZWN0LmdldExpc3QoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgYWZ0ZXIgZGVsZXRpbmcgdGhlIHRhc2tcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgbGV0IGxpc3QgPSB7fTtcblxuICBsaXN0Lm5hbWUgPSBuYW1lO1xuICBsaXN0Lml0ZW1zID0gW107IC8vIHdpbGwgc3RvcmUgcHJvamVjdHMgT1IgdGFza3NcblxuICBsaXN0LnNldE5hbWUgPSBmdW5jdGlvbiAobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgbGlzdC5hZGQgPSBmdW5jdGlvbiAoYSkge1xuICAgIHRoaXMuaXRlbXMucHVzaChhKTtcbiAgfTtcblxuICBsaXN0LmdldExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG8oKSB7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdHZW5lcmFsIFRhc2snKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QgMicpKTtcblxuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZScsICcyMDIzLTA1LTAxJywgJ01lZGl1bScpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzBdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnTG93JykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUnLCAnMjAyMy0wNS0wMScsICdNZWRpdW0nKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdMb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnSGlnaCcpKTtcbn1cbiIsImltcG9ydCBwcm9qTG9nbyBmcm9tICcuL2Fzc2V0cy9wcm9qLnBuZyc7XG5pbXBvcnQgZGVsTG9nbyBmcm9tICcuL2Fzc2V0cy9kZWxldGUucG5nJztcbmltcG9ydCB7IHByb2pMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi90b2RvbGlzdCc7XG5cbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudC1oZWFkZXIgcCcpO1xuY29uc3QgYmFja1RvUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLWJ0bicpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuY29uc3QgbmF2TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24ub3B0aW9ucycpO1xuY29uc3QgdGFza01lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza29wdGlvbi1idG4nKTtcbmNvbnN0IGhlYWRlcm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gbmF2Jyk7XG5jb25zdCB0YXNrbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudScpO1xuY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvaicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsb2FkVGFza1BnKCk7XG4gIGxvYWRQZ09uQ2xpY2soKTtcbiAgY3JlYXRlVGFza0Zvcm0oKTtcblxuICBuYXZNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05hdihoZWFkZXJuYXYpKTtcbiAgdGFza01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TmF2KHRhc2tuYXYpKTtcbiAgYmFja1RvUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuY2hpbGQoY29udGFpbmVyKSk7XG4gIGJhY2tUb1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdFBnKTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBZGRUYXNrRm9ybSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VHQocHJvamVjdCkge1xuICBjb25zdCBwcm9qSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBwcm9qVHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHByb2pJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcHJvakltZy5zcmMgPSBwcm9qTG9nbztcbiAgcHJvalR0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGlmIChwcm9qZWN0Lm5hbWUgPT0gJ0dlbmVyYWwgVGFzaycpIHtcbiAgICBwcm9qVHQuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcHJvalR0LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gIH1cblxuICBwcm9qVHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHByb2plY3QubmFtZSA9IHByb2pUdC50ZXh0Q29udGVudCk7XG5cbiAgcHJvakhlYWRlci5hcHBlbmQocHJvakltZywgcHJvalR0KTtcbiAgY29udGFpbmVyLmFwcGVuZChwcm9qSGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNhcmQnKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgbmFtZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXRlJyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICBjb25zdCBkZWxJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBuYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICBzdGF0ZS50ZXh0Q29udGVudCA9IHRhc2suaXNGaW47XG4gIGRhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgZGVsSW1nLnNyYyA9IGRlbExvZ287XG5cbiAgdGFza0NhcmQuYXBwZW5kKG5hbWUsIHN0YXRlLCBkYXRlLCBwcmlvcml0eSwgZGVsQnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZCh0YXNrQ2FyZCk7XG4gIGRlbEJ0bi5hcHBlbmQoZGVsSW1nKTtcblxuICAvL2ZvciBlZGl0aW5nIHRhc2tzXG5cbiAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ExMjUzNSc7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljNzAyYSc7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09ICdMb3cnKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjNWUzZCc7XG5cbiAgaWYgKHRhc2suaXNGaW4gPT0gJ0ZpbmlzaGVkJykge1xuICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICB0YXNrQ2FyZC5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcyg1MCUpJztcbiAgICBuYW1lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwcmlvcml0eS5kaXNhYmxlZCA9IHRydWU7XG4gICAgZGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBkZWxCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrQ2FyZC5yZW1vdmUoKTtcbiAgICB0YXNrLmRlbGV0ZSgpO1xuICB9XG5cbiAgcHJpb3JpdHkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHtcbiAgICAgIHRhc2suc2V0UHJpb3JpdHkoJ0xvdycpXG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdIaWdoJylcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcbiAgICAgIHRhc2suc2V0UHJpb3JpdHkoJ01lZGl1bScpXG4gICAgfVxuXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ExMjUzNSc7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWM3MDJhJztcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93JykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzVlM2QnO1xuICB9XG5cbiAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGFzay5uYW1lID0gbmFtZS50ZXh0Q29udGVudCk7XG4gIGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRhc2suZHVlRGF0ZSA9IGRhdGUudmFsdWUpO1xuXG4gIHN0YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YXNrLmlzRmluID09ICdVbmZpbmlzaGVkJykge1xuICAgICAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgdGFza0NhcmQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNjAlKSc7XG4gICAgICBuYW1lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHByaW9yaXR5LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgdGFza0NhcmQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTAwJSknO1xuICAgICAgbmFtZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgcHJpb3JpdHkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGRhdGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgIHN0YXRlLnRleHRDb250ZW50ID0gdGFzay5pc0ZpbjtcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2hvd05hdihlbGVtZW50KSB7XG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFzay1jb250YWluZXInKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC50aXRsZScpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlmIChoZWFkZXIudGV4dENvbnRlbnQgIT09ICdQUk9KRUNUUycpIHNob3dUYXNrTmF2QnRucygpO1xuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5jaGlsZChwYXJlbnQpIHtcbiAgdmFyIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tQZygpIHtcbiAgc2hvd1Rhc2tOYXZCdG5zKCk7XG4gIGNvbnRlbnRIZWFkZXIuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVEFTS1MnO1xuICBjb250ZW50SGVhZGVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tZW51IGJ1dHRvbjpmaXJzdC1jaGlsZCcpLnN0eWxlLmRpc3BsYXkgPVxuICAgICdibG9jayc7XG5cbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qTGlzdC5nZXRMaXN0KCkpIHtcbiAgICBkaXNwbGF5UHJvamVjdFR0KHByb2plY3QpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC5nZXRMaXN0KCkpIHtcbiAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdFBnKCkge1xuICB1blZpc2libGUoKTtcblxuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgYWRkUHJvai5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnUFJPSkVDVFMnO1xuICBjb250ZW50SGVhZGVyLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICBjb250ZW50SGVhZGVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvakxpc3QuZ2V0TGlzdCgpKSB7XG4gICAgaWYgKHByb2plY3QubmFtZSAhPSAndW5saXN0ZWQnKSB7XG4gICAgICBjb25zdCBwcm9qQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvakNhcmQuY2xhc3NMaXN0LmFkZCgncHJvai1jYXJkJyk7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qLW5hbWUnKTtcbiAgICAgIGNvbnN0IHRhc2tDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRhc2tDb3VudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvdW50Jyk7XG4gICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG4gICAgICBjb25zdCBkZWxJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgY29uc3QgdW5jb21wbGV0ZWRUYXNrcyA9IHByb2plY3RcbiAgICAgICAgLmdldExpc3QoKVxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlzRmluICE9ICdGaW5pc2hlZCcpO1xuXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfSAoJHtwcm9qZWN0LmdldExpc3QoKS5sZW5ndGh9KWA7XG4gICAgICBkZWxJbWcuc3JjID0gZGVsTG9nbztcblxuICAgICAgdGFza0NvdW50LnRleHRDb250ZW50ID0gYCR7dW5jb21wbGV0ZWRUYXNrcy5sZW5ndGh9IHVuZmluaXNoZWQgdGFza3NgO1xuXG4gICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICBwcm9qQ2FyZC5yZW1vdmUoKTtcbiAgICAgICAgcHJvakxpc3QuZ2V0TGlzdCgpLnNwbGljZShwcm9qTGlzdC5nZXRMaXN0KCkuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICB9KVxuXG4gICAgICBwcm9qQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPSBkZWxCdG4gfHwgZS50YXJnZXQgIT0gZGVsSW1nKSB7XG4gICAgICAgICAgYmFja1RvUHJvai5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICBjb250ZW50SGVhZGVyLmRhdGFzZXQuaW5kZXggPSBgJHtwcm9qTGlzdC5nZXRMaXN0KCkuaW5kZXhPZihwcm9qZWN0KX1gO1xuICAgICAgICAgIGNvbnRlbnRIZWFkZXIuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICBjb250ZW50SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBwcm9qZWN0Lm5hbWUgPSBjb250ZW50SGVhZGVyLnRleHRDb250ZW50KTtcbiAgICAgICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LmdldExpc3QoKSkge1xuICAgICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb2plY3QubmFtZSA9PSAnR2VuZXJhbCBUYXNrJykge1xuICAgICAgICBwcm9qQ2FyZC5hcHBlbmQobmFtZSwgdGFza0NvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2pDYXJkLmFwcGVuZChuYW1lLCB0YXNrQ291bnQsIGRlbEJ0bik7XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kKHByb2pDYXJkKTtcbiAgICAgIGRlbEJ0bi5hcHBlbmQoZGVsSW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBnT25DbGljaygpIHtcbiAgbGV0IGFjdGl2ZSA9ICcnO1xuICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYnMpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBhY3RpdmUgPSBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgdGFicykge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1blZpc2libGUoKTtcblxuICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICdwcm9qJykgbG9hZFByb2plY3RQZygpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICd0YXNrcycpIGxvYWRUYXNrUGcoKTtcblxuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgYWN0aXZlID0gZWxlbWVudDtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgY29uc3QgdFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRULmNsYXNzTmFtZSA9ICdhZGQtdGFzay10aXRsZSc7XG4gIHRULnRleHRDb250ZW50ID0gJ05FVyBUQVNLJztcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUYXNrRGl2LmlkID0gJ2FkZHRhc2stY29udGFpbmVyJztcbiAgY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tOYW1lRmllbGQuaWQgPSAnbmFtZS1maWVsZCc7XG4gIHRhc2tOYW1lRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgdGFza05hbWVGaWVsZC5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUuLi4nO1xuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgdGFza0R1ZURhdGUuaWQgPSAnZHVlZGF0ZS1maWVsZCc7XG4gIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG5cbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHktY29udGFpbmVyJztcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQUklPUklUWTonO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBsb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgdGFza1ByaW9yaXR5LmFwcGVuZChsb3csIG1lZGl1bSwgaGlnaCk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eUxhYmVsLCB0YXNrUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJvakNvbnRhaW5lci5pZCA9ICdwcm9qLXNlbGVjdC1jb250YWluZXInO1xuICBmb3IgKGxldCBwcm9qIG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcm9qZWN0LmRhdGFzZXQuaW5kZXggPSBwcm9qTGlzdC5nZXRMaXN0KCkuaW5kZXhPZihwcm9qKTtcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cHJvai5uYW1lfWA7XG4gICAgcHJvakNvbnRhaW5lci5hcHBlbmQocHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuaWQgPSAnYWRkdGFzay1idG4tY29udGFpbmVyJztcbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NBTkNFTCc7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHNhdmVCdG4sIGNhbmNlbEJ0bik7XG5cbiAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpID0gY29udGVudEhlYWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHByb2pDb250YWluZXIub3B0aW9uc1twcm9qQ29udGFpbmVyLnNlbGVjdGVkSW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuXG4gICAgaWYgKHRhc2tOYW1lRmllbGQudmFsdWUgIT0gJycpIHtcbiAgICAgIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09ICdUQVNLUycpIHtcbiAgICAgICAgcHJvakxpc3QuZ2V0TGlzdCgpW3NlbGVjdGVkT3B0aW9uXS5hZGQoY3JlYXRlVGFzayh0YXNrTmFtZUZpZWxkLnZhbHVlLCB0YXNrRHVlRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlKSk7XG5cbiAgICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuICAgICAgICBsb2FkVGFza1BnKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qTGlzdC5nZXRMaXN0KClbaV0uYWRkKGNyZWF0ZVRhc2sodGFza05hbWVGaWVsZC52YWx1ZSwgdGFza0R1ZURhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSkpO1xuICAgICAgICB1bmNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qTGlzdC5nZXRMaXN0KClbaV0uZ2V0TGlzdCgpKSB7XG4gICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0YXNrTmFtZUZpZWxkLnZhbHVlID0gJyc7XG4gICAgdGFza0R1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAnTG93JztcbiAgICBoaWRlVGFza05hdkJ0bnMoKTtcbiAgfSk7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dUYXNrTmF2QnRucygpO1xuICAgIHRhc2tOYW1lRmllbGQudmFsdWUgPSAnJ1xuICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gdG9kYXk7XG4gICAgdGFza1ByaW9yaXR5LnZhbHVlID0gJ0xvdyc7XG4gICAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBhZGRUYXNrRGl2LmFwcGVuZChcbiAgICB0VCxcbiAgICB0YXNrTmFtZUZpZWxkLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHByaW9yaXR5Q29udGFpbmVyLFxuICAgIHByb2pDb250YWluZXIsXG4gICAgYnV0dG9uc0NvbnRhaW5lclxuICApO1xuXG4gIHRhc2tuYXYuYXBwZW5kKGFkZFRhc2tEaXYpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrLWNvbnRhaW5lcicpO1xuICBjb25zdCB0YXNrTmFtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtZmllbGQnKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUtZmllbGQnKTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLXNlbGVjdC1jb250YWluZXInKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBoaWRlVGFza05hdkJ0bnMoKTtcbiAgdGFza05hbWVGaWVsZC5mb2N1cygpO1xuXG4gIGlmIChjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID09ICdUQVNLUycpIHtcbiAgICBwcm9qQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIHByb2pDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG5cbiAgdGFza05hbWVGaWVsZC52YWx1ZSA9ICcnXG4gIHRhc2tEdWVEYXRlLnZhbHVlID0gdG9kYXk7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza05hdkJ0bnMoKSB7XG4gIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVUYXNrTmF2QnRucygpIHtcbiAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHVuVmlzaWJsZSgpIHtcbiAgYmFja1RvUHJvai5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIHRhc2tuYXYuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB0b2RvIGZyb20gJy4vdG9kb2xpc3QnO1xuaW1wb3J0IHVpSW5pdCBmcm9tICcuL3VpRGlzcGxheSc7XG5cbnRvZG8oKTtcbnVpSW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9