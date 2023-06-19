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

      projCard.addEventListener('click', () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xVQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2xCOEI7QUFDRzs7QUFFakMscURBQUk7QUFDSixzREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2pMaXN0ID0gY3JlYXRlTGlzdCgnVGFza3MnKTsgLy9zdG9yYWdlIG9mIGFsbCBwcm9qZWN0c1xuXG4vLyBwIGZvciBwcm9qLCB0IGZvciB0YXNrXG5wcm9qTGlzdC5nZXRUYXNrT2YgPSBmdW5jdGlvbiAocEluZGV4LCB0SW5kZXgpIHtcbiAgcmV0dXJuIHByb2pMaXN0LmdldExpc3QoKVtwSW5kZXhdLmdldExpc3QoKVt0SW5kZXhdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgbGV0IHRhc2sgPSB7fTtcblxuICB0YXNrLm5hbWUgPSBuYW1lO1xuICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRhc2suaXNGaW4gPSAnVW5maW5pc2hlZCc7XG5cbiAgdGFzay5zZXROYW1lID0gZnVuY3Rpb24gKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9O1xuXG4gIHRhc2suc2V0RHVlRGF0ZSA9IGZ1bmN0aW9uIChuZXdEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgfTtcblxuICB0YXNrLnNldFByaW9yaXR5ID0gZnVuY3Rpb24gKG5ld1ByaW8pIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpbztcbiAgfTtcblxuICB0YXNrLnRvZ2dsZUNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzRmluID09ICdGaW5pc2hlZCcpIHtcbiAgICAgIHRoaXMuaXNGaW4gPSAnVW5maW5pc2hlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNGaW4gPSAnRmluaXNoZWQnO1xuICAgIH1cbiAgfTtcblxuICB0YXNrLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdC5nZXRMaXN0KCkuaW5kZXhPZih0aGlzKTtcbiAgICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHByb2plY3QuZ2V0TGlzdCgpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBhZnRlciBkZWxldGluZyB0aGUgdGFza1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QobmFtZSkge1xuICBsZXQgbGlzdCA9IHt9O1xuXG4gIGxpc3QubmFtZSA9IG5hbWU7XG4gIGxpc3QuaXRlbXMgPSBbXTsgLy8gd2lsbCBzdG9yZSBwcm9qZWN0cyBPUiB0YXNrc1xuXG4gIGxpc3Quc2V0TmFtZSA9IGZ1bmN0aW9uIChuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICBsaXN0LmFkZCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKGEpO1xuICB9O1xuXG4gIGxpc3QuZGVsID0gZnVuY3Rpb24gKHRhc2tJbmRleCkge1xuICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH07XG5cbiAgbGlzdC5nZXRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvKCkge1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgndW5saXN0ZWQnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QgMicpKTtcblxuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZScsICcyMDIzLTA1LTAxJywgJ01lZGl1bScpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzBdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnTG93JykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUnLCAnMjAyMy0wNS0wMScsICdNZWRpdW0nKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdMb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnSGlnaCcpKTtcbn1cbiIsImltcG9ydCBwcm9qTG9nbyBmcm9tICcuL2Fzc2V0cy9wcm9qLnBuZyc7XG5pbXBvcnQgZGVsTG9nbyBmcm9tICcuL2Fzc2V0cy9kZWxldGUucG5nJztcbmltcG9ydCB7IHByb2pMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi90b2RvbGlzdCc7XG5cbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5jb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQtaGVhZGVyIHAnKTtcbmNvbnN0IGJhY2tUb1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFjay1idG4nKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250YWluZXInKTtcbmNvbnN0IG5hdk1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgYnV0dG9uLm9wdGlvbnMnKTtcbmNvbnN0IHRhc2tNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tvcHRpb24tYnRuJyk7XG5jb25zdCBoZWFkZXJuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIG5hdicpO1xuY29uc3QgdGFza25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUnKTtcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWInKTtcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcbmNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2onKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgbG9hZFRhc2tQZygpO1xuICBsb2FkUGdPbkNsaWNrKCk7XG4gIGNyZWF0ZVRhc2tGb3JtKCk7XG5cbiAgbmF2TWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOYXYoaGVhZGVybmF2KSk7XG4gIHRhc2tNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05hdih0YXNrbmF2KSk7XG4gIGJhY2tUb1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1bmNoaWxkKGNvbnRhaW5lcikpO1xuICBiYWNrVG9Qcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFByb2plY3RQZyk7XG4gIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWRkVGFza0Zvcm0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFR0KHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QubmFtZSAhPSAndW5saXN0ZWQnKSB7XG4gICAgY29uc3QgcHJvakhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qSGVhZGVyLmRhdGFzZXQuaW5kZXggPSBwcm9qTGlzdC5nZXRMaXN0KCkuaW5kZXhPZihwcm9qZWN0KS50b1N0cmluZygpO1xuICAgIGNvbnN0IHByb2pUdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qSW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgcGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsdXMuY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpO1xuICAgIHBsdXMuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgcGx1cy50ZXh0Q29udGVudCA9ICcrJztcbiAgICBwcm9qSW1nLnNyYyA9IHByb2pMb2dvO1xuICAgIHByb2pUdC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgIHByb2pUdC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgIHByb2pUdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gcHJvamVjdC5uYW1lID0gcHJvalR0LnRleHRDb250ZW50KTtcblxuICAgIHByb2pIZWFkZXIuYXBwZW5kKHByb2pJbWcsIHByb2pUdCwgcGx1cyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9qSGVhZGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICBuYW1lLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0YXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdGUnKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGUudHlwZSA9ICdkYXRlJztcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG4gIGNvbnN0IGRlbEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gIHN0YXRlLnRleHRDb250ZW50ID0gdGFzay5pc0ZpbjtcbiAgZGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICBkZWxJbWcuc3JjID0gZGVsTG9nbztcblxuICB0YXNrQ2FyZC5hcHBlbmQobmFtZSwgc3RhdGUsIGRhdGUsIHByaW9yaXR5LCBkZWxCdG4pO1xuICBjb250YWluZXIuYXBwZW5kKHRhc2tDYXJkKTtcbiAgZGVsQnRuLmFwcGVuZChkZWxJbWcpO1xuXG4gIC8vZm9yIGVkaXRpbmcgdGFza3NcblxuICBpZiAodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTEyNTM1JztcbiAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWM3MDJhJztcbiAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGM1ZTNkJztcblxuICBpZiAodGFzay5pc0ZpbiA9PSAnRmluaXNoZWQnKSB7XG4gICAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgIHRhc2tDYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDUwJSknO1xuICAgIG5hbWUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHByaW9yaXR5LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlbEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRhc2tDYXJkLnJlbW92ZSgpO1xuICAgIHRhc2suZGVsZXRlKCk7XG4gIH1cblxuICBwcmlvcml0eS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykge1xuICAgICAgdGFzay5zZXRQcmlvcml0eSgnTG93JylcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHtcbiAgICAgIHRhc2suc2V0UHJpb3JpdHkoJ0hpZ2gnKVxuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93Jykge1xuICAgICAgdGFzay5zZXRQcmlvcml0eSgnTWVkaXVtJylcbiAgICB9XG5cbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnSGlnaCcpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYTEyNTM1JztcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM5YzcwMmEnO1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdMb3cnKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjNWUzZCc7XG4gIH1cblxuICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB0YXNrLm5hbWUgPSBuYW1lLnRleHRDb250ZW50KTtcbiAgZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGFzay5kdWVEYXRlID0gZGF0ZS52YWx1ZSk7XG5cbiAgc3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHRhc2suaXNGaW4gPT0gJ1VuZmluaXNoZWQnKSB7XG4gICAgICBuYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICB0YXNrQ2FyZC5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcyg2MCUpJztcbiAgICAgIG5hbWUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgZGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICB0YXNrQ2FyZC5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxMDAlKSc7XG4gICAgICBuYW1lLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBwcmlvcml0eS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0YXNrLnRvZ2dsZUNvbXBsZXRlKCk7XG4gICAgc3RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmlzRmluO1xuICB9KVxufVxuXG5mdW5jdGlvbiBzaG93TmF2KGVsZW1lbnQpIHtcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrLWNvbnRhaW5lcicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLnRpdGxlJyk7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaWYgKGhlYWRlci50ZXh0Q29udGVudCAhPT0gJ1BST0pFQ1RTJykgc2hvd1Rhc2tOYXZCdG5zKCk7XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmNoaWxkKHBhcmVudCkge1xuICB2YXIgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVGFza1BnKCkge1xuICBzaG93VGFza05hdkJ0bnMoKTtcbiAgY29udGVudEhlYWRlci5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUQVNLUyc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUgYnV0dG9uOmZpcnN0LWNoaWxkJykuc3R5bGUuZGlzcGxheSA9XG4gICAgJ2Jsb2NrJztcblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGRpc3BsYXlQcm9qZWN0VHQocHJvamVjdCk7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LmdldExpc3QoKSkge1xuICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0UGcoKSB7XG4gIHVuVmlzaWJsZSgpO1xuXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFzay1jb250YWluZXInKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdQUk9KRUNUUyc7XG4gIGNvbnRlbnRIZWFkZXIuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qTGlzdC5nZXRMaXN0KCkpIHtcbiAgICBpZiAocHJvamVjdC5uYW1lICE9ICd1bmxpc3RlZCcpIHtcbiAgICAgIGNvbnN0IHByb2pDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qQ2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qLWNhcmQnKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2otbmFtZScpO1xuICAgICAgY29uc3QgdGFza0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGFza0NvdW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY291bnQnKTtcbiAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcbiAgICAgIGNvbnN0IGRlbEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICBjb25zdCB1bmNvbXBsZXRlZFRhc2tzID0gcHJvamVjdFxuICAgICAgICAuZ2V0TGlzdCgpXG4gICAgICAgIC5maWx0ZXIoKHRhc2spID0+IHRhc2suaXNGaW4gIT0gJ0ZpbmlzaGVkJyk7XG5cbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Lm5hbWV9ICgke3Byb2plY3QuZ2V0TGlzdCgpLmxlbmd0aH0pYDtcbiAgICAgIGRlbEltZy5zcmMgPSBkZWxMb2dvO1xuXG4gICAgICB0YXNrQ291bnQudGV4dENvbnRlbnQgPSBgJHt1bmNvbXBsZXRlZFRhc2tzLmxlbmd0aH0gdW5maW5pc2hlZCB0YXNrc2A7XG5cbiAgICAgIHByb2pDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBiYWNrVG9Qcm9qLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnRlbnRIZWFkZXIuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgY29udGVudEhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gcHJvamVjdC5uYW1lID0gY29udGVudEhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUgYnV0dG9uOmZpcnN0LWNoaWxkJykuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgJ2Jsb2NrJztcblxuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QuZ2V0TGlzdCgpKSB7XG4gICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwcm9qQ2FyZC5hcHBlbmQobmFtZSwgdGFza0NvdW50LCBkZWxCdG4pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZChwcm9qQ2FyZCk7XG4gICAgICBkZWxCdG4uYXBwZW5kKGRlbEltZyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQZ09uQ2xpY2soKSB7XG4gIGxldCBhY3RpdmUgPSAnJztcbiAgZm9yIChsZXQgZWxlbWVudCBvZiB0YWJzKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgYWN0aXZlID0gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYnMpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdW5WaXNpYmxlKCk7XG5cbiAgICAgIHVuY2hpbGQoY29udGFpbmVyKTtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAncHJvaicpIGxvYWRQcm9qZWN0UGcoKTtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAndGFza3MnKSBsb2FkVGFza1BnKCk7XG5cbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgIGFjdGl2ZSA9IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0VC5jbGFzc05hbWUgPSAnYWRkLXRhc2stdGl0bGUnO1xuICB0VC50ZXh0Q29udGVudCA9ICdORVcgVEFTSyc7XG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkVGFza0Rpdi5pZCA9ICdhZGR0YXNrLWNvbnRhaW5lcic7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrTmFtZUZpZWxkLmlkID0gJ25hbWUtZmllbGQnO1xuICB0YXNrTmFtZUZpZWxkLnR5cGUgPSAndGV4dCc7XG4gIHRhc2tOYW1lRmllbGQucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lLi4uJztcblxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEdWVEYXRlLmlkID0gJ2R1ZWRhdGUtZmllbGQnO1xuICB0YXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuXG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmlkID0gJ3ByaW9yaXR5LWNvbnRhaW5lcic7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUFJJT1JJVFk6JztcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaC50ZXh0Q29udGVudCA9ICdISUdIJztcbiAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG1lZGl1bS50ZXh0Q29udGVudCA9ICdNRURJVU0nO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93LnRleHRDb250ZW50ID0gJ0xPVyc7XG4gIHRhc2tQcmlvcml0eS5hcHBlbmQobG93LCBtZWRpdW0sIGhpZ2gpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMYWJlbCwgdGFza1ByaW9yaXR5KTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuaWQgPSAnYWRkdGFzay1idG4tY29udGFpbmVyJztcbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NBTkNFTCc7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHNhdmVCdG4sIGNhbmNlbEJ0bik7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dUYXNrTmF2QnRucygpO1xuICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgYWRkVGFza0Rpdi5hcHBlbmQoXG4gICAgdFQsXG4gICAgdGFza05hbWVGaWVsZCxcbiAgICB0YXNrRHVlRGF0ZSxcbiAgICBwcmlvcml0eUNvbnRhaW5lcixcbiAgICBidXR0b25zQ29udGFpbmVyXG4gICk7XG5cbiAgdGFza25hdi5hcHBlbmQoYWRkVGFza0Rpdik7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1maWVsZCcpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGhpZGVUYXNrTmF2QnRucygpO1xuICB0YXNrTmFtZUZpZWxkLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrTmF2QnRucygpIHtcbiAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgYWRkUHJvai5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZVRhc2tOYXZCdG5zKCkge1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdW5WaXNpYmxlKCkge1xuICBiYWNrVG9Qcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgdGFza25hdi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvbGlzdCc7XG5pbXBvcnQgdWlJbml0IGZyb20gJy4vdWlEaXNwbGF5JztcblxudG9kbygpO1xudWlJbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=