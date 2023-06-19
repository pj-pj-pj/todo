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

  list.del = function (taskIndex) {
    this.items.splice(taskIndex, 1);
  };

  list.getList = function () {
    return this.items;
  };

  return list;
}

function todo() {
  projList.add(createList('unlisted'));
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




const section = document.querySelector('section');
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
  if (project.name != 'unlisted') {
    const projHeader = document.createElement('span');
    projHeader.dataset.index = _todolist__WEBPACK_IMPORTED_MODULE_2__.projList.getList().indexOf(project).toString();
    const projTt = document.createElement('p');
    const projImg = new Image();
    const plus = document.createElement('button');
    plus.classList.add('add-btn');
    plus.classList.add('btn');
    plus.textContent = '+';
    projImg.src = _assets_proj_png__WEBPACK_IMPORTED_MODULE_0__;
    projTt.contentEditable = true;
    projTt.textContent = project.name;

    projTt.addEventListener('blur', () => project.name = projTt.textContent);

    projHeader.append(projImg, projTt, plus);
    container.append(projHeader);
  }
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
          contentHeader.contentEditable = true;
          contentHeader.addEventListener('blur', () => project.name = contentHeader.textContent);
          document.querySelector('.task-menu button:first-child').style.display =
            'block';

          for (let task of project.getList()) {
            displayTask(task);
          }
        }
      });

      projCard.append(name, taskCount, delBtn);
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

  const taskDueDate = document.createElement('input');
  taskDueDate.id = 'duedate-field';
  taskDueDate.type = 'date';

  const priorityContainer = document.createElement('div');
  priorityContainer.id = 'priority-container';
  const priorityLabel = document.createElement('p');
  priorityLabel.textContent = 'PRIORITY:';
  const taskPriority = document.createElement('select');
  const high = document.createElement('option');
  high.textContent = 'HIGH';
  const medium = document.createElement('option');
  medium.textContent = 'MEDIUM';
  const low = document.createElement('option');
  low.textContent = 'LOW';
  taskPriority.append(low, medium, high);
  priorityContainer.append(priorityLabel, taskPriority);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'addtask-btn-container';
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'SAVE';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'CANCEL';
  buttonsContainer.append(saveBtn, cancelBtn);

  cancelBtn.addEventListener('click', () => {
    showTaskNavBtns();
    addTaskDiv.style.display = 'none';
  });

  addTaskDiv.append(
    tT,
    taskNameField,
    taskDueDate,
    priorityContainer,
    buttonsContainer
  );

  tasknav.append(addTaskDiv);
  addTaskDiv.style.display = 'none';
}

function loadAddTaskForm() {
  const addTaskDiv = document.querySelector('#addtask-container');
  const taskNameField = document.querySelector('#name-field');
  addTaskDiv.style.display = 'flex';
  hideTaskNavBtns();
  taskNameField.focus();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6VUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQjhCO0FBQ0c7O0FBRWpDLHFEQUFJO0FBQ0osc0RBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qTGlzdCA9IGNyZWF0ZUxpc3QoJ1Rhc2tzJyk7IC8vc3RvcmFnZSBvZiBhbGwgcHJvamVjdHNcblxuLy8gcCBmb3IgcHJvaiwgdCBmb3IgdGFza1xucHJvakxpc3QuZ2V0VGFza09mID0gZnVuY3Rpb24gKHBJbmRleCwgdEluZGV4KSB7XG4gIHJldHVybiBwcm9qTGlzdC5nZXRMaXN0KClbcEluZGV4XS5nZXRMaXN0KClbdEluZGV4XTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGxldCB0YXNrID0ge307XG5cbiAgdGFzay5uYW1lID0gbmFtZTtcbiAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0YXNrLmlzRmluID0gJ1VuZmluaXNoZWQnO1xuXG4gIHRhc2suc2V0TmFtZSA9IGZ1bmN0aW9uIChuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICB0YXNrLnNldER1ZURhdGUgPSBmdW5jdGlvbiAobmV3RGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIH07XG5cbiAgdGFzay5zZXRQcmlvcml0eSA9IGZ1bmN0aW9uIChuZXdQcmlvKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW87XG4gIH07XG5cbiAgdGFzay50b2dnbGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0ZpbiA9PSAnRmluaXNoZWQnKSB7XG4gICAgICB0aGlzLmlzRmluID0gJ1VuZmluaXNoZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRmluID0gJ0ZpbmlzaGVkJztcbiAgICB9XG4gIH07XG5cbiAgdGFzay5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qTGlzdC5nZXRMaXN0KCkpIHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3QuZ2V0TGlzdCgpLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICBwcm9qZWN0LmdldExpc3QoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgYWZ0ZXIgZGVsZXRpbmcgdGhlIHRhc2tcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgbGV0IGxpc3QgPSB7fTtcblxuICBsaXN0Lm5hbWUgPSBuYW1lO1xuICBsaXN0Lml0ZW1zID0gW107IC8vIHdpbGwgc3RvcmUgcHJvamVjdHMgT1IgdGFza3NcblxuICBsaXN0LnNldE5hbWUgPSBmdW5jdGlvbiAobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgbGlzdC5hZGQgPSBmdW5jdGlvbiAoYSkge1xuICAgIHRoaXMuaXRlbXMucHVzaChhKTtcbiAgfTtcblxuICBsaXN0LmRlbCA9IGZ1bmN0aW9uICh0YXNrSW5kZXgpIHtcbiAgICB0aGlzLml0ZW1zLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9O1xuXG4gIGxpc3QuZ2V0TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kbygpIHtcbiAgcHJvakxpc3QuYWRkKGNyZWF0ZUxpc3QoJ3VubGlzdGVkJykpO1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgnVGVzdCBQcm9qZWN0JykpO1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgnVGVzdCBQcm9qZWN0IDInKSk7XG5cbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzBdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUnLCAnMjAyMy0wNS0wMScsICdNZWRpdW0nKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsxXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdMb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lJywgJzIwMjMtMDUtMDEnLCAnTWVkaXVtJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnTG93JykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA3LTIzJywgJ0hpZ2gnKSk7XG59XG4iLCJpbXBvcnQgcHJvakxvZ28gZnJvbSAnLi9hc3NldHMvcHJvai5wbmcnO1xuaW1wb3J0IGRlbExvZ28gZnJvbSAnLi9hc3NldHMvZGVsZXRlLnBuZyc7XG5pbXBvcnQgeyBwcm9qTGlzdCwgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vdG9kb2xpc3QnO1xuXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50LWhlYWRlciBwJyk7XG5jb25zdCBiYWNrVG9Qcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2stYnRuJyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGFpbmVyJyk7XG5jb25zdCBuYXZNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGJ1dHRvbi5vcHRpb25zJyk7XG5jb25zdCB0YXNrTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrb3B0aW9uLWJ0bicpO1xuY29uc3QgaGVhZGVybmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiBuYXYnKTtcbmNvbnN0IHRhc2tuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tZW51Jyk7XG5jb25zdCB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFiJyk7XG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJyk7XG5jb25zdCBhZGRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGxvYWRUYXNrUGcoKTtcbiAgbG9hZFBnT25DbGljaygpO1xuICBjcmVhdGVUYXNrRm9ybSgpO1xuXG4gIG5hdk1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TmF2KGhlYWRlcm5hdikpO1xuICB0YXNrTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOYXYodGFza25hdikpO1xuICBiYWNrVG9Qcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5jaGlsZChjb250YWluZXIpKTtcbiAgYmFja1RvUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQcm9qZWN0UGcpO1xuICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFkZFRhc2tGb3JtKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RUdChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0Lm5hbWUgIT0gJ3VubGlzdGVkJykge1xuICAgIGNvbnN0IHByb2pIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvakhlYWRlci5kYXRhc2V0LmluZGV4ID0gcHJvakxpc3QuZ2V0TGlzdCgpLmluZGV4T2YocHJvamVjdCkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBwcm9qVHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJvakltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwbHVzLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcbiAgICBwbHVzLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIHBsdXMudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgcHJvakltZy5zcmMgPSBwcm9qTG9nbztcbiAgICBwcm9qVHQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICBwcm9qVHQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBwcm9qVHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHByb2plY3QubmFtZSA9IHByb2pUdC50ZXh0Q29udGVudCk7XG5cbiAgICBwcm9qSGVhZGVyLmFwcGVuZChwcm9qSW1nLCBwcm9qVHQsIHBsdXMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvakhlYWRlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNhcmQnKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgbmFtZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXRlJyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlLnR5cGUgPSAnZGF0ZSc7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICBjb25zdCBkZWxJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBuYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICBzdGF0ZS50ZXh0Q29udGVudCA9IHRhc2suaXNGaW47XG4gIGRhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgZGVsSW1nLnNyYyA9IGRlbExvZ287XG5cbiAgdGFza0NhcmQuYXBwZW5kKG5hbWUsIHN0YXRlLCBkYXRlLCBwcmlvcml0eSwgZGVsQnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZCh0YXNrQ2FyZCk7XG4gIGRlbEJ0bi5hcHBlbmQoZGVsSW1nKTtcblxuICAvL2ZvciBlZGl0aW5nIHRhc2tzXG5cbiAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ExMjUzNSc7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljNzAyYSc7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09ICdMb3cnKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjNWUzZCc7XG5cbiAgaWYgKHRhc2suaXNGaW4gPT0gJ0ZpbmlzaGVkJykge1xuICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICB0YXNrQ2FyZC5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcyg1MCUpJztcbiAgICBuYW1lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwcmlvcml0eS5kaXNhYmxlZCA9IHRydWU7XG4gICAgZGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBkZWxCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrQ2FyZC5yZW1vdmUoKTtcbiAgICB0YXNrLmRlbGV0ZSgpO1xuICB9XG5cbiAgcHJpb3JpdHkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHtcbiAgICAgIHRhc2suc2V0UHJpb3JpdHkoJ0xvdycpXG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdIaWdoJylcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcbiAgICAgIHRhc2suc2V0UHJpb3JpdHkoJ01lZGl1bScpXG4gICAgfVxuXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ExMjUzNSc7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWM3MDJhJztcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93JykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzVlM2QnO1xuICB9XG5cbiAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGFzay5uYW1lID0gbmFtZS50ZXh0Q29udGVudCk7XG4gIGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRhc2suZHVlRGF0ZSA9IGRhdGUudmFsdWUpO1xuXG4gIHN0YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YXNrLmlzRmluID09ICdVbmZpbmlzaGVkJykge1xuICAgICAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgdGFza0NhcmQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNjAlKSc7XG4gICAgICBuYW1lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHByaW9yaXR5LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgdGFza0NhcmQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTAwJSknO1xuICAgICAgbmFtZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgcHJpb3JpdHkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGRhdGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgIHN0YXRlLnRleHRDb250ZW50ID0gdGFzay5pc0ZpbjtcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2hvd05hdihlbGVtZW50KSB7XG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFzay1jb250YWluZXInKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC50aXRsZScpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlmIChoZWFkZXIudGV4dENvbnRlbnQgIT09ICdQUk9KRUNUUycpIHNob3dUYXNrTmF2QnRucygpO1xuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5jaGlsZChwYXJlbnQpIHtcbiAgdmFyIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tQZygpIHtcbiAgc2hvd1Rhc2tOYXZCdG5zKCk7XG4gIGNvbnRlbnRIZWFkZXIuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnVEFTS1MnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tZW51IGJ1dHRvbjpmaXJzdC1jaGlsZCcpLnN0eWxlLmRpc3BsYXkgPVxuICAgICdibG9jayc7XG5cbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qTGlzdC5nZXRMaXN0KCkpIHtcbiAgICBkaXNwbGF5UHJvamVjdFR0KHByb2plY3QpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC5nZXRMaXN0KCkpIHtcbiAgICAgIGRpc3BsYXlUYXNrKHRhc2spO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdFBnKCkge1xuICB1blZpc2libGUoKTtcblxuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgYWRkUHJvai5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnUFJPSkVDVFMnO1xuICBjb250ZW50SGVhZGVyLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvakxpc3QuZ2V0TGlzdCgpKSB7XG4gICAgaWYgKHByb2plY3QubmFtZSAhPSAndW5saXN0ZWQnKSB7XG4gICAgICBjb25zdCBwcm9qQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvakNhcmQuY2xhc3NMaXN0LmFkZCgncHJvai1jYXJkJyk7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qLW5hbWUnKTtcbiAgICAgIGNvbnN0IHRhc2tDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRhc2tDb3VudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvdW50Jyk7XG4gICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG4gICAgICBjb25zdCBkZWxJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgY29uc3QgdW5jb21wbGV0ZWRUYXNrcyA9IHByb2plY3RcbiAgICAgICAgLmdldExpc3QoKVxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlzRmluICE9ICdGaW5pc2hlZCcpO1xuXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfSAoJHtwcm9qZWN0LmdldExpc3QoKS5sZW5ndGh9KWA7XG4gICAgICBkZWxJbWcuc3JjID0gZGVsTG9nbztcblxuICAgICAgdGFza0NvdW50LnRleHRDb250ZW50ID0gYCR7dW5jb21wbGV0ZWRUYXNrcy5sZW5ndGh9IHVuZmluaXNoZWQgdGFza3NgO1xuXG4gICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICBwcm9qQ2FyZC5yZW1vdmUoKTtcbiAgICAgICAgcHJvakxpc3QuZ2V0TGlzdCgpLnNwbGljZShwcm9qTGlzdC5nZXRMaXN0KCkuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICB9KVxuXG4gICAgICBwcm9qQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPSBkZWxCdG4gfHwgZS50YXJnZXQgIT0gZGVsSW1nKSB7XG4gICAgICAgICAgYmFja1RvUHJvai5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICBjb250ZW50SGVhZGVyLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgY29udGVudEhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gcHJvamVjdC5uYW1lID0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudSBidXR0b246Zmlyc3QtY2hpbGQnKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgICdibG9jayc7XG5cbiAgICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QuZ2V0TGlzdCgpKSB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwcm9qQ2FyZC5hcHBlbmQobmFtZSwgdGFza0NvdW50LCBkZWxCdG4pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZChwcm9qQ2FyZCk7XG4gICAgICBkZWxCdG4uYXBwZW5kKGRlbEltZyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQZ09uQ2xpY2soKSB7XG4gIGxldCBhY3RpdmUgPSAnJztcbiAgZm9yIChsZXQgZWxlbWVudCBvZiB0YWJzKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgYWN0aXZlID0gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYnMpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdW5WaXNpYmxlKCk7XG5cbiAgICAgIHVuY2hpbGQoY29udGFpbmVyKTtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAncHJvaicpIGxvYWRQcm9qZWN0UGcoKTtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAndGFza3MnKSBsb2FkVGFza1BnKCk7XG5cbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgIGFjdGl2ZSA9IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0VC5jbGFzc05hbWUgPSAnYWRkLXRhc2stdGl0bGUnO1xuICB0VC50ZXh0Q29udGVudCA9ICdORVcgVEFTSyc7XG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkVGFza0Rpdi5pZCA9ICdhZGR0YXNrLWNvbnRhaW5lcic7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrTmFtZUZpZWxkLmlkID0gJ25hbWUtZmllbGQnO1xuICB0YXNrTmFtZUZpZWxkLnR5cGUgPSAndGV4dCc7XG4gIHRhc2tOYW1lRmllbGQucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lLi4uJztcblxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEdWVEYXRlLmlkID0gJ2R1ZWRhdGUtZmllbGQnO1xuICB0YXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuXG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmlkID0gJ3ByaW9yaXR5LWNvbnRhaW5lcic7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUFJJT1JJVFk6JztcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaC50ZXh0Q29udGVudCA9ICdISUdIJztcbiAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG1lZGl1bS50ZXh0Q29udGVudCA9ICdNRURJVU0nO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93LnRleHRDb250ZW50ID0gJ0xPVyc7XG4gIHRhc2tQcmlvcml0eS5hcHBlbmQobG93LCBtZWRpdW0sIGhpZ2gpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMYWJlbCwgdGFza1ByaW9yaXR5KTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuaWQgPSAnYWRkdGFzay1idG4tY29udGFpbmVyJztcbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NBTkNFTCc7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHNhdmVCdG4sIGNhbmNlbEJ0bik7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dUYXNrTmF2QnRucygpO1xuICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgYWRkVGFza0Rpdi5hcHBlbmQoXG4gICAgdFQsXG4gICAgdGFza05hbWVGaWVsZCxcbiAgICB0YXNrRHVlRGF0ZSxcbiAgICBwcmlvcml0eUNvbnRhaW5lcixcbiAgICBidXR0b25zQ29udGFpbmVyXG4gICk7XG5cbiAgdGFza25hdi5hcHBlbmQoYWRkVGFza0Rpdik7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1maWVsZCcpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGhpZGVUYXNrTmF2QnRucygpO1xuICB0YXNrTmFtZUZpZWxkLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrTmF2QnRucygpIHtcbiAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgYWRkUHJvai5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZVRhc2tOYXZCdG5zKCkge1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdW5WaXNpYmxlKCkge1xuICBiYWNrVG9Qcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgdGFza25hdi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgdWlJbml0IGZyb20gJy4vdWlEaXNwbGF5JztcblxudG9kbygpO1xudWlJbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=