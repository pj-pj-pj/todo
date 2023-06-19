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
    projTt.textContent = project.name;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2xCOEI7QUFDRzs7QUFFakMscURBQUk7QUFDSixzREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2pMaXN0ID0gY3JlYXRlTGlzdCgnVGFza3MnKTsgLy9zdG9yYWdlIG9mIGFsbCBwcm9qZWN0c1xuXG4vLyBwIGZvciBwcm9qLCB0IGZvciB0YXNrXG5wcm9qTGlzdC5nZXRUYXNrT2YgPSBmdW5jdGlvbiAocEluZGV4LCB0SW5kZXgpIHtcbiAgcmV0dXJuIHByb2pMaXN0LmdldExpc3QoKVtwSW5kZXhdLmdldExpc3QoKVt0SW5kZXhdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgbGV0IHRhc2sgPSB7fTtcblxuICB0YXNrLm5hbWUgPSBuYW1lO1xuICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRhc2suaXNGaW4gPSAnVW5maW5pc2hlZCc7XG5cbiAgdGFzay5zZXROYW1lID0gZnVuY3Rpb24gKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9O1xuXG4gIHRhc2suc2V0RHVlRGF0ZSA9IGZ1bmN0aW9uIChuZXdEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgfTtcblxuICB0YXNrLnNldFByaW9yaXR5ID0gZnVuY3Rpb24gKG5ld1ByaW8pIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpbztcbiAgfTtcblxuICB0YXNrLnRvZ2dsZUNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzRmluID09ICdGaW5pc2hlZCcpIHtcbiAgICAgIHRoaXMuaXNGaW4gPSAnVW5maW5pc2hlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNGaW4gPSAnRmluaXNoZWQnO1xuICAgIH1cbiAgfTtcblxuICB0YXNrLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdC5nZXRMaXN0KCkuaW5kZXhPZih0aGlzKTtcbiAgICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHByb2plY3QuZ2V0TGlzdCgpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBhZnRlciBkZWxldGluZyB0aGUgdGFza1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QobmFtZSkge1xuICBsZXQgbGlzdCA9IHt9O1xuXG4gIGxpc3QubmFtZSA9IG5hbWU7XG4gIGxpc3QuaXRlbXMgPSBbXTsgLy8gd2lsbCBzdG9yZSBwcm9qZWN0cyBPUiB0YXNrc1xuXG4gIGxpc3Quc2V0TmFtZSA9IGZ1bmN0aW9uIChuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICBsaXN0LmFkZCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKGEpO1xuICB9O1xuXG4gIGxpc3QuZGVsID0gZnVuY3Rpb24gKHRhc2tJbmRleCkge1xuICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH07XG5cbiAgbGlzdC5nZXRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvKCkge1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgndW5saXN0ZWQnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QgMicpKTtcblxuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZScsICcyMDIzLTA1LTAxJywgJ01lZGl1bScpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzBdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wOC0wOScsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnTG93JykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDgtMDknLCAnSGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcyMDIzLTA4LTA5JywgJ0xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUnLCAnMjAyMy0wNS0wMScsICdNZWRpdW0nKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdMb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMjAyMy0wNy0yMycsICdIaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzIwMjMtMDctMjMnLCAnSGlnaCcpKTtcbn1cbiIsImltcG9ydCBwcm9qTG9nbyBmcm9tICcuL2Fzc2V0cy9wcm9qLnBuZyc7XG5pbXBvcnQgZGVsTG9nbyBmcm9tICcuL2Fzc2V0cy9kZWxldGUucG5nJztcbmltcG9ydCB7IHByb2pMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi90b2RvbGlzdCc7XG5cbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudC1oZWFkZXIgcCcpO1xuY29uc3QgYmFja1RvUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLWJ0bicpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuY29uc3QgbmF2TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24ub3B0aW9ucycpO1xuY29uc3QgdGFza01lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza29wdGlvbi1idG4nKTtcbmNvbnN0IGhlYWRlcm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gbmF2Jyk7XG5jb25zdCB0YXNrbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudScpO1xuY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvaicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsb2FkVGFza1BnKCk7XG4gIGxvYWRQZ09uQ2xpY2soKTtcbiAgY3JlYXRlVGFza0Zvcm0oKTtcblxuICBuYXZNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05hdihoZWFkZXJuYXYpKTtcbiAgdGFza01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TmF2KHRhc2tuYXYpKTtcbiAgYmFja1RvUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuY2hpbGQoY29udGFpbmVyKSk7XG4gIGJhY2tUb1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdFBnKTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBZGRUYXNrRm9ybSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VHQocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5uYW1lICE9ICd1bmxpc3RlZCcpIHtcbiAgICBjb25zdCBwcm9qSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2pIZWFkZXIuZGF0YXNldC5pbmRleCA9IHByb2pMaXN0LmdldExpc3QoKS5pbmRleE9mKHByb2plY3QpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcHJvalR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByb2pJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGx1cy5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJyk7XG4gICAgcGx1cy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBwbHVzLnRleHRDb250ZW50ID0gJysnO1xuICAgIHByb2pJbWcuc3JjID0gcHJvakxvZ287XG4gICAgcHJvalR0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgcHJvakhlYWRlci5hcHBlbmQocHJvakltZywgcHJvalR0LCBwbHVzKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHByb2pIZWFkZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gIG5hbWUuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0ZScpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZS50eXBlID0gJ2RhdGUnO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcbiAgY29uc3QgZGVsSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgc3RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmlzRmluO1xuICBkYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gIGRlbEltZy5zcmMgPSBkZWxMb2dvO1xuXG4gIHRhc2tDYXJkLmFwcGVuZChuYW1lLCBzdGF0ZSwgZGF0ZSwgcHJpb3JpdHksIGRlbEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmQodGFza0NhcmQpO1xuICBkZWxCdG4uYXBwZW5kKGRlbEltZyk7XG5cbiAgLy9mb3IgZWRpdGluZyB0YXNrc1xuXG4gIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhMTI1MzUnO1xuICBpZiAodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM5YzcwMmEnO1xuICBpZiAodGFzay5wcmlvcml0eSA9PSAnTG93JykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzVlM2QnO1xuXG4gIGlmICh0YXNrLmlzRmluID09ICdGaW5pc2hlZCcpIHtcbiAgICBuYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgdGFza0NhcmQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNTAlKSc7XG4gICAgbmFtZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgcHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVsQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFza0NhcmQucmVtb3ZlKCk7XG4gICAgdGFzay5kZWxldGUoKTtcbiAgfVxuXG4gIHByaW9yaXR5Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0hpZ2gnKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdMb3cnKVxuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnTWVkaXVtJykge1xuICAgICAgdGFzay5zZXRQcmlvcml0eSgnSGlnaCcpXG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdMb3cnKSB7XG4gICAgICB0YXNrLnNldFByaW9yaXR5KCdNZWRpdW0nKVxuICAgIH1cblxuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdIaWdoJykgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhMTI1MzUnO1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdNZWRpdW0nKSBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljNzAyYSc7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGM1ZTNkJztcbiAgfVxuXG4gIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRhc2submFtZSA9IG5hbWUudGV4dENvbnRlbnQpO1xuICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB0YXNrLmR1ZURhdGUgPSBkYXRlLnZhbHVlKTtcblxuICBzdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodGFzay5pc0ZpbiA9PSAnVW5maW5pc2hlZCcpIHtcbiAgICAgIG5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIHRhc2tDYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDYwJSknO1xuICAgICAgbmFtZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBwcmlvcml0eS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgIHRhc2tDYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEwMCUpJztcbiAgICAgIG5hbWUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHByaW9yaXR5LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBkYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgICBzdGF0ZS50ZXh0Q29udGVudCA9IHRhc2suaXNGaW47XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNob3dOYXYoZWxlbWVudCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AudGl0bGUnKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpZiAoaGVhZGVyLnRleHRDb250ZW50ICE9PSAnUFJPSkVDVFMnKSBzaG93VGFza05hdkJ0bnMoKTtcblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuY2hpbGQocGFyZW50KSB7XG4gIHZhciBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrUGcoKSB7XG4gIHNob3dUYXNrTmF2QnRucygpO1xuICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1RBU0tTJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudSBidXR0b246Zmlyc3QtY2hpbGQnKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAnYmxvY2snO1xuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvakxpc3QuZ2V0TGlzdCgpKSB7XG4gICAgZGlzcGxheVByb2plY3RUdChwcm9qZWN0KTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QuZ2V0TGlzdCgpKSB7XG4gICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RQZygpIHtcbiAgdW5WaXNpYmxlKCk7XG5cbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrLWNvbnRhaW5lcicpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJztcblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGlmIChwcm9qZWN0Lm5hbWUgIT0gJ3VubGlzdGVkJykge1xuICAgICAgY29uc3QgcHJvakNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2pDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2otY2FyZCcpO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvai1uYW1lJyk7XG4gICAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0YXNrQ291bnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb3VudCcpO1xuICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICAgICAgY29uc3QgZGVsSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIGNvbnN0IHVuY29tcGxldGVkVGFza3MgPSBwcm9qZWN0XG4gICAgICAgIC5nZXRMaXN0KClcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5pc0ZpbiAhPSAnRmluaXNoZWQnKTtcblxuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX0gKCR7cHJvamVjdC5nZXRMaXN0KCkubGVuZ3RofSlgO1xuICAgICAgZGVsSW1nLnNyYyA9IGRlbExvZ287XG5cbiAgICAgIHRhc2tDb3VudC50ZXh0Q29udGVudCA9IGAke3VuY29tcGxldGVkVGFza3MubGVuZ3RofSB1bmZpbmlzaGVkIHRhc2tzYDtcblxuICAgICAgcHJvakNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJhY2tUb1Byb2ouY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB1bmNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudSBidXR0b246Zmlyc3QtY2hpbGQnKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAnYmxvY2snO1xuXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC5nZXRMaXN0KCkpIHtcbiAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHByb2pDYXJkLmFwcGVuZChuYW1lLCB0YXNrQ291bnQsIGRlbEJ0bik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKHByb2pDYXJkKTtcbiAgICAgIGRlbEJ0bi5hcHBlbmQoZGVsSW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFBnT25DbGljaygpIHtcbiAgbGV0IGFjdGl2ZSA9ICcnO1xuICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYnMpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBhY3RpdmUgPSBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgdGFicykge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1blZpc2libGUoKTtcblxuICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICdwcm9qJykgbG9hZFByb2plY3RQZygpO1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICd0YXNrcycpIGxvYWRUYXNrUGcoKTtcblxuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgYWN0aXZlID0gZWxlbWVudDtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgY29uc3QgdFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRULmNsYXNzTmFtZSA9ICdhZGQtdGFzay10aXRsZSc7XG4gIHRULnRleHRDb250ZW50ID0gJ05FVyBUQVNLJztcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUYXNrRGl2LmlkID0gJ2FkZHRhc2stY29udGFpbmVyJztcbiAgY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tOYW1lRmllbGQuaWQgPSAnbmFtZS1maWVsZCc7XG4gIHRhc2tOYW1lRmllbGQudHlwZSA9ICd0ZXh0JztcbiAgdGFza05hbWVGaWVsZC5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUuLi4nO1xuXG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0R1ZURhdGUuaWQgPSAnZHVlZGF0ZS1maWVsZCc7XG4gIHRhc2tEdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG5cbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHktY29udGFpbmVyJztcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQUklPUklUWTonO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBoaWdoLnRleHRDb250ZW50ID0gJ0hJR0gnO1xuICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbWVkaXVtLnRleHRDb250ZW50ID0gJ01FRElVTSc7XG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBsb3cudGV4dENvbnRlbnQgPSAnTE9XJztcbiAgdGFza1ByaW9yaXR5LmFwcGVuZChsb3csIG1lZGl1bSwgaGlnaCk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eUxhYmVsLCB0YXNrUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5pZCA9ICdhZGR0YXNrLWJ0bi1jb250YWluZXInO1xuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU0FWRSc7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ0FOQ0VMJztcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoc2F2ZUJ0biwgY2FuY2VsQnRuKTtcblxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd1Rhc2tOYXZCdG5zKCk7XG4gICAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBhZGRUYXNrRGl2LmFwcGVuZChcbiAgICB0VCxcbiAgICB0YXNrTmFtZUZpZWxkLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHByaW9yaXR5Q29udGFpbmVyLFxuICAgIGJ1dHRvbnNDb250YWluZXJcbiAgKTtcblxuICB0YXNrbmF2LmFwcGVuZChhZGRUYXNrRGl2KTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBsb2FkQWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFzay1jb250YWluZXInKTtcbiAgY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWZpZWxkJyk7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgaGlkZVRhc2tOYXZCdG5zKCk7XG4gIHRhc2tOYW1lRmllbGQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tOYXZCdG5zKCkge1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlVGFza05hdkJ0bnMoKSB7XG4gIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgYWRkUHJvai5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB1blZpc2libGUoKSB7XG4gIGJhY2tUb1Byb2ouY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB0YXNrbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgdG9kbyBmcm9tICcuL3RvZG9saXN0JztcbmltcG9ydCB1aUluaXQgZnJvbSAnLi91aURpc3BsYXknO1xuXG50b2RvKCk7XG51aUluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==