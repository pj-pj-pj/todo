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
    if (this.isFin == 'Finished') this.isFin = 'Unfinished';
    if (this.isFin != 'Finished') this.isFin = 'Finished';
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

  projList.getList()[0].add(createTask('Task name', '01-05-2023', 'medium'));
  projList.getList()[0].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[0].add(createTask('Task name here', '01-07-2023', 'low'));
  projList.getList()[0].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[0].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[1].add(createTask('Task name here', '01-07-2023', 'low'));
  projList.getList()[1].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[1].add(createTask('Task name here', '01-07-2023', 'low'));
  projList.getList()[1].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[1].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[1].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[1].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[2].add(createTask('Task name', '01-05-2023', 'medium'));
  projList.getList()[2].add(createTask('Task name here', '01-07-2023', 'low'));
  projList.getList()[2].add(createTask('Task name here', '01-06-2023', 'high'));
  projList.getList()[2].add(createTask('Task name here', '01-06-2023', 'high'));

  projList.getTaskOf(0, 0).toggleComplete();
  projList.getTaskOf(1, 1).toggleComplete();
  projList.getTaskOf(2, 0).setDueDate('10-12-2023');
  projList.getTaskOf(0, 1).setName('Different task name here');
  projList.getTaskOf(2, 2).setPriority('high');
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
  const state = document.createElement('button');
  state.classList.add('task-state');
  const date = document.createElement('p');
  date.classList.add('task-date');
  const priority = document.createElement('button');
  priority.classList.add('priority');
  const delBtn = document.createElement('button');
  delBtn.classList.add('del-btn');
  const delImg = new Image();

  name.textContent = task.name;
  state.textContent = task.isFin;
  date.textContent = task.dueDate;
  priority.textContent = task.priority;
  delImg.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;

  taskCard.append(name, state, date, priority, delBtn);
  container.append(taskCard);
  delBtn.append(delImg);
}

function showNav(element) {
  const addTaskDiv = document.querySelector('#addtask-container');
  addTaskDiv.style.display = 'none';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEI4QjtBQUNHOztBQUVqQyxxREFBSTtBQUNKLHNEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvakxpc3QgPSBjcmVhdGVMaXN0KCdUYXNrcycpOyAvL3N0b3JhZ2Ugb2YgYWxsIHByb2plY3RzXG5cbi8vIHAgZm9yIHByb2osIHQgZm9yIHRhc2tcbnByb2pMaXN0LmdldFRhc2tPZiA9IGZ1bmN0aW9uIChwSW5kZXgsIHRJbmRleCkge1xuICByZXR1cm4gcHJvakxpc3QuZ2V0TGlzdCgpW3BJbmRleF0uZ2V0TGlzdCgpW3RJbmRleF07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBsZXQgdGFzayA9IHt9O1xuXG4gIHRhc2submFtZSA9IG5hbWU7XG4gIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGFzay5pc0ZpbiA9ICdVbmZpbmlzaGVkJztcblxuICB0YXNrLnNldE5hbWUgPSBmdW5jdGlvbiAobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgdGFzay5zZXREdWVEYXRlID0gZnVuY3Rpb24gKG5ld0RhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICB9O1xuXG4gIHRhc2suc2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAobmV3UHJpbykge1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvO1xuICB9O1xuXG4gIHRhc2sudG9nZ2xlQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNGaW4gPT0gJ0ZpbmlzaGVkJykgdGhpcy5pc0ZpbiA9ICdVbmZpbmlzaGVkJztcbiAgICBpZiAodGhpcy5pc0ZpbiAhPSAnRmluaXNoZWQnKSB0aGlzLmlzRmluID0gJ0ZpbmlzaGVkJztcbiAgfTtcblxuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QobmFtZSkge1xuICBsZXQgbGlzdCA9IHt9O1xuXG4gIGxpc3QubmFtZSA9IG5hbWU7XG4gIGxpc3QuaXRlbXMgPSBbXTsgLy8gd2lsbCBzdG9yZSBwcm9qZWN0cyBPUiB0YXNrc1xuXG4gIGxpc3Quc2V0TmFtZSA9IGZ1bmN0aW9uIChuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICBsaXN0LmFkZCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKGEpO1xuICB9O1xuXG4gIGxpc3QuZGVsID0gZnVuY3Rpb24gKHRhc2tJbmRleCkge1xuICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH07XG5cbiAgbGlzdC5nZXRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvKCkge1xuICBwcm9qTGlzdC5hZGQoY3JlYXRlTGlzdCgndW5saXN0ZWQnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QnKSk7XG4gIHByb2pMaXN0LmFkZChjcmVhdGVMaXN0KCdUZXN0IFByb2plY3QgMicpKTtcblxuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZScsICcwMS0wNS0yMDIzJywgJ21lZGl1bScpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzBdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcwMS0wNi0yMDIzJywgJ2hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMDEtMDctMjAyMycsICdsb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVswXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMDEtMDYtMjAyMycsICdoaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMF0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzAxLTA2LTIwMjMnLCAnaGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcwMS0wNy0yMDIzJywgJ2xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcwMS0wNi0yMDIzJywgJ2hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsxXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMDEtMDctMjAyMycsICdsb3cnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsxXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMDEtMDYtMjAyMycsICdoaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMV0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZSBoZXJlJywgJzAxLTA2LTIwMjMnLCAnaGlnaCcpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzFdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcwMS0wNi0yMDIzJywgJ2hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsxXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMDEtMDYtMjAyMycsICdoaWdoJykpO1xuICBwcm9qTGlzdC5nZXRMaXN0KClbMl0uYWRkKGNyZWF0ZVRhc2soJ1Rhc2sgbmFtZScsICcwMS0wNS0yMDIzJywgJ21lZGl1bScpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcwMS0wNy0yMDIzJywgJ2xvdycpKTtcbiAgcHJvakxpc3QuZ2V0TGlzdCgpWzJdLmFkZChjcmVhdGVUYXNrKCdUYXNrIG5hbWUgaGVyZScsICcwMS0wNi0yMDIzJywgJ2hpZ2gnKSk7XG4gIHByb2pMaXN0LmdldExpc3QoKVsyXS5hZGQoY3JlYXRlVGFzaygnVGFzayBuYW1lIGhlcmUnLCAnMDEtMDYtMjAyMycsICdoaWdoJykpO1xuXG4gIHByb2pMaXN0LmdldFRhc2tPZigwLCAwKS50b2dnbGVDb21wbGV0ZSgpO1xuICBwcm9qTGlzdC5nZXRUYXNrT2YoMSwgMSkudG9nZ2xlQ29tcGxldGUoKTtcbiAgcHJvakxpc3QuZ2V0VGFza09mKDIsIDApLnNldER1ZURhdGUoJzEwLTEyLTIwMjMnKTtcbiAgcHJvakxpc3QuZ2V0VGFza09mKDAsIDEpLnNldE5hbWUoJ0RpZmZlcmVudCB0YXNrIG5hbWUgaGVyZScpO1xuICBwcm9qTGlzdC5nZXRUYXNrT2YoMiwgMikuc2V0UHJpb3JpdHkoJ2hpZ2gnKTtcbn1cbiIsImltcG9ydCBwcm9qTG9nbyBmcm9tICcuL2Fzc2V0cy9wcm9qLnBuZyc7XG5pbXBvcnQgZGVsTG9nbyBmcm9tICcuL2Fzc2V0cy9kZWxldGUucG5nJztcbmltcG9ydCB7IHByb2pMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi90b2RvbGlzdCc7XG5cbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudC1oZWFkZXIgcCcpO1xuY29uc3QgYmFja1RvUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLWJ0bicpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuY29uc3QgbmF2TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24ub3B0aW9ucycpO1xuY29uc3QgdGFza01lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza29wdGlvbi1idG4nKTtcbmNvbnN0IGhlYWRlcm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gbmF2Jyk7XG5jb25zdCB0YXNrbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbWVudScpO1xuY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvaicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsb2FkVGFza1BnKCk7XG4gIGxvYWRQZ09uQ2xpY2soKTtcbiAgY3JlYXRlVGFza0Zvcm0oKTtcblxuICBuYXZNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05hdihoZWFkZXJuYXYpKTtcbiAgdGFza01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TmF2KHRhc2tuYXYpKTtcbiAgYmFja1RvUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuY2hpbGQoY29udGFpbmVyKSk7XG4gIGJhY2tUb1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdFBnKTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBZGRUYXNrRm9ybSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VHQocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5uYW1lICE9ICd1bmxpc3RlZCcpIHtcbiAgICBjb25zdCBwcm9qSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2pIZWFkZXIuZGF0YXNldC5pbmRleCA9IHByb2pMaXN0LmdldExpc3QoKS5pbmRleE9mKHByb2plY3QpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcHJvalR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByb2pJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGx1cy5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJyk7XG4gICAgcGx1cy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBwbHVzLnRleHRDb250ZW50ID0gJysnO1xuICAgIHByb2pJbWcuc3JjID0gcHJvakxvZ287XG4gICAgcHJvalR0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgcHJvakhlYWRlci5hcHBlbmQocHJvakltZywgcHJvalR0LCBwbHVzKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHByb2pIZWFkZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0YXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdGUnKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG4gIGNvbnN0IGRlbEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gIHN0YXRlLnRleHRDb250ZW50ID0gdGFzay5pc0ZpbjtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICBkZWxJbWcuc3JjID0gZGVsTG9nbztcblxuICB0YXNrQ2FyZC5hcHBlbmQobmFtZSwgc3RhdGUsIGRhdGUsIHByaW9yaXR5LCBkZWxCdG4pO1xuICBjb250YWluZXIuYXBwZW5kKHRhc2tDYXJkKTtcbiAgZGVsQnRuLmFwcGVuZChkZWxJbWcpO1xufVxuXG5mdW5jdGlvbiBzaG93TmF2KGVsZW1lbnQpIHtcbiAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGR0YXNrLWNvbnRhaW5lcicpO1xuICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmNoaWxkKHBhcmVudCkge1xuICB2YXIgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVGFza1BnKCkge1xuICBzaG93VGFza05hdkJ0bnMoKTtcbiAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdUQVNLUyc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUgYnV0dG9uOmZpcnN0LWNoaWxkJykuc3R5bGUuZGlzcGxheSA9XG4gICAgJ2Jsb2NrJztcblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2pMaXN0LmdldExpc3QoKSkge1xuICAgIGRpc3BsYXlQcm9qZWN0VHQocHJvamVjdCk7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LmdldExpc3QoKSkge1xuICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0UGcoKSB7XG4gIHVuVmlzaWJsZSgpO1xuXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkdGFzay1jb250YWluZXInKTtcbiAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9ICdQUk9KRUNUUyc7XG5cbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qTGlzdC5nZXRMaXN0KCkpIHtcbiAgICBpZiAocHJvamVjdC5uYW1lICE9ICd1bmxpc3RlZCcpIHtcbiAgICAgIGNvbnN0IHByb2pDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qQ2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qLWNhcmQnKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2otbmFtZScpO1xuICAgICAgY29uc3QgdGFza0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGFza0NvdW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY291bnQnKTtcbiAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcbiAgICAgIGNvbnN0IGRlbEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICBjb25zdCB1bmNvbXBsZXRlZFRhc2tzID0gcHJvamVjdFxuICAgICAgICAuZ2V0TGlzdCgpXG4gICAgICAgIC5maWx0ZXIoKHRhc2spID0+IHRhc2suaXNGaW4gIT0gJ0ZpbmlzaGVkJyk7XG5cbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Lm5hbWV9ICgke3Byb2plY3QuZ2V0TGlzdCgpLmxlbmd0aH0pYDtcbiAgICAgIGRlbEltZy5zcmMgPSBkZWxMb2dvO1xuXG4gICAgICB0YXNrQ291bnQudGV4dENvbnRlbnQgPSBgJHt1bmNvbXBsZXRlZFRhc2tzLmxlbmd0aH0gdW5maW5pc2hlZCB0YXNrc2A7XG5cbiAgICAgIHByb2pDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBiYWNrVG9Qcm9qLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgdW5jaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUgYnV0dG9uOmZpcnN0LWNoaWxkJykuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgJ2Jsb2NrJztcblxuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QuZ2V0TGlzdCgpKSB7XG4gICAgICAgICAgZGlzcGxheVRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwcm9qQ2FyZC5hcHBlbmQobmFtZSwgdGFza0NvdW50LCBkZWxCdG4pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZChwcm9qQ2FyZCk7XG4gICAgICBkZWxCdG4uYXBwZW5kKGRlbEltZyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQZ09uQ2xpY2soKSB7XG4gIGxldCBhY3RpdmUgPSAnJztcbiAgZm9yIChsZXQgZWxlbWVudCBvZiB0YWJzKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgYWN0aXZlID0gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYnMpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdW5WaXNpYmxlKCk7XG5cbiAgICAgIHVuY2hpbGQoY29udGFpbmVyKTtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAncHJvaicpIGxvYWRQcm9qZWN0UGcoKTtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAndGFza3MnKSBsb2FkVGFza1BnKCk7XG5cbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgIGFjdGl2ZSA9IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0VC5jbGFzc05hbWUgPSAnYWRkLXRhc2stdGl0bGUnO1xuICB0VC50ZXh0Q29udGVudCA9ICdORVcgVEFTSyc7XG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkVGFza0Rpdi5pZCA9ICdhZGR0YXNrLWNvbnRhaW5lcic7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrTmFtZUZpZWxkLmlkID0gJ25hbWUtZmllbGQnO1xuICB0YXNrTmFtZUZpZWxkLnR5cGUgPSAndGV4dCc7XG4gIHRhc2tOYW1lRmllbGQucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lLi4uJztcblxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEdWVEYXRlLmlkID0gJ2R1ZWRhdGUtZmllbGQnO1xuICB0YXNrRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuXG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmlkID0gJ3ByaW9yaXR5LWNvbnRhaW5lcic7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUFJJT1JJVFk6JztcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaC50ZXh0Q29udGVudCA9ICdISUdIJztcbiAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG1lZGl1bS50ZXh0Q29udGVudCA9ICdNRURJVU0nO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93LnRleHRDb250ZW50ID0gJ0xPVyc7XG4gIHRhc2tQcmlvcml0eS5hcHBlbmQobG93LCBtZWRpdW0sIGhpZ2gpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMYWJlbCwgdGFza1ByaW9yaXR5KTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuaWQgPSAnYWRkdGFzay1idG4tY29udGFpbmVyJztcbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NBVkUnO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NBTkNFTCc7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHNhdmVCdG4sIGNhbmNlbEJ0bik7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dUYXNrTmF2QnRucygpO1xuICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgYWRkVGFza0Rpdi5hcHBlbmQoXG4gICAgdFQsXG4gICAgdGFza05hbWVGaWVsZCxcbiAgICB0YXNrRHVlRGF0ZSxcbiAgICBwcmlvcml0eUNvbnRhaW5lcixcbiAgICBidXR0b25zQ29udGFpbmVyXG4gICk7XG5cbiAgdGFza25hdi5hcHBlbmQoYWRkVGFza0Rpdik7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHRhc2stY29udGFpbmVyJyk7XG4gIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgaGlkZVRhc2tOYXZCdG5zKCk7XG4gIHRhc2tOYW1lRmllbGQuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tOYXZCdG5zKCkge1xuICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlVGFza05hdkJ0bnMoKSB7XG4gIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgYWRkUHJvai5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB1blZpc2libGUoKSB7XG4gIGJhY2tUb1Byb2ouY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB0YXNrbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgdG9kbyBmcm9tICcuL3RvZG9saXN0JztcbmltcG9ydCB1aUluaXQgZnJvbSAnLi91aURpc3BsYXknO1xuXG50b2RvKCk7XG51aUluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==