import type { TodoItem } from '@/interfaces';
import { defineStore } from 'pinia';
import { v4 as uuidV4 } from 'uuid';
import { reactive, ref } from 'vue';

const useTodoStore = defineStore('todo-store', () => {
  const todoInput = ref<string>('');
  const todoList = reactive<TodoItem[]>(JSON.parse(localStorage.getItem('todo')!) || []);

  function addNewTodo() {
    if (!todoInput.value) {
      alert('Input is empty!');
      return;
    }

    const newTodo: TodoItem = {
      id: uuidV4(),
      text: todoInput.value,
      description: '',
      isCompleted: false,
    };

    todoList.unshift(newTodo);
    todoInput.value = '';
    saveToLocalStorage();
  }
  function deleteTodoItem(id: string) {
    const index = todoList.findIndex((todoItem) => todoItem.id === id);
    if (index !== -1) {
      todoList.splice(index, 1);
      saveToLocalStorage();
    }
  }
  function toggleTodoCompleted(id: string) {
    todoList.filter((todoItem) => {
      if (todoItem.id === id) {
        todoItem.isCompleted = !todoItem.isCompleted;
      }
    });
  }
  function updateInputDescription(id: string, description: string) {
    let isFoudItem = false;
    todoList.forEach((todoItem) => {
      if (todoItem.id === id) {
        todoItem.description = description;
        isFoudItem = true;
      }
    });

    if (isFoudItem) saveToLocalStorage();
  }
  function saveToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }

  return {
    todoInput,
    addNewTodo,
    todoList,
    toggleTodoCompleted,
    deleteTodoItem,
    updateInputDescription,
  };
});

export { useTodoStore };
