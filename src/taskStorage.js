import { projList, createList, createTask } from './todolist';
import { updateDisplayedToImportedTodo } from './uiDisplay';

export default function saveTodo() {
  // download on click
  document.querySelector('div#save-tab').addEventListener('click', () => {
    const taskList = {};

    // copying tasks and lists of the todo to another object
    // that will be converted as json file later
    for (const list of projList.getList()) {
      taskList[list.name] = [];
      for (const task of list.getList()) {
        taskList[list.name].push({
          name: task.name,
          dueDate: task.dueDate,
          isFin: task.isFin,
          priority: task.priority,
        });
      }
    }

    // conversion of object to json
    const jsonList = JSON.stringify(taskList, null, 2);
    const blob = new Blob([jsonList], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'saved-todolist.json';
    a.click();
  });
}

export function importTodo() {
  function handleJSONFile(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const jsonData = event.target.result;
      const importedFile = JSON.parse(jsonData);

      updateProjListToUpdateDisplay(importedFile);
    };

    reader.readAsText(file);
  }

  document
    .querySelector('input#json-file-input')
    .addEventListener('change', (event) => {
      const file = event.target.files[0]; // Get the selected file
      if (file) {
        handleJSONFile(file);
      }
    });
}

function updateProjListToUpdateDisplay(jsonFile) {
  projList = createList('Tasks');

  for (const list in jsonFile) {
    if (jsonFile.hasOwnProperty(list)) {
      // Check if list is a direct property of the object
      projList.add(createList(list));
      const listIndex = projList
        .getList()
        .indexOf(projList.getList().find((project) => project.name === list)); // Find the index of the added list

      // assign tasks in the current project list
      for (const task of jsonFile[list]) {
        const savedTask = createTask(task.name, task.dueDate, task.priority);
        projList.getList()[listIndex].add(savedTask); // Access tasks from jsonFile[list]
        if (task.isFin == 'Finished') savedTask.toggleComplete();
      }
    }
  }

  updateDisplayedToImportedTodo();
}
