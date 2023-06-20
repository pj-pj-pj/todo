export const projList = createList('Tasks'); //storage of all projects

// p for proj, t for task
projList.getTaskOf = function (pIndex, tIndex) {
  return projList.getList()[pIndex].getList()[tIndex];
};

export function createTask(name, dueDate, priority) {
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

export function createList(name) {
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

export default function todo() {
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
