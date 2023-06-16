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
    if (this.isFin == 'Finished') this.isFin = 'Unfinished';
    if (this.isFin != 'Finished') this.isFin = 'Finished';
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

  list.del = function (taskIndex) {
    this.items.splice(taskIndex, 1);
  };

  list.getList = function () {
    return this.items;
  };

  return list;
}

export default function todo() {
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
