import './index.css';
import UtilityFunction from './modules/methods.js';
import InteractiveFunction from './modules/interactiveList.js';

const inputForm = document.getElementById('inputForm');
const addTask = document.getElementById('addTask');

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  UtilityFunction.addTasks(addTask.value);
  addTask.value = '';
});

document.querySelector('.btn_clear_all').addEventListener('click', InteractiveFunction.clearAllTasksCompleted);

window.addEventListener('load', () => {
  document.addEventListener('listUpdated', () => {
    InteractiveFunction.checkStatusEvent();
  }, false);
  InteractiveFunction.checkStatusEvent();
});

UtilityFunction.showTasks();