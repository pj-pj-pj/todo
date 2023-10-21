import todo from './todolist';
import uiInit from './uiDisplay';
import saveTodo, { importTodo } from './taskStorage';

todo();
uiInit();
saveTodo();
importTodo();
