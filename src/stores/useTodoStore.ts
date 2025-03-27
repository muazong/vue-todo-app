import type { TodoItem } from '@/interfaces';
import { defineStore } from 'pinia';
import { v4 as uuidV4 } from 'uuid';
import { reactive, ref } from 'vue';

const useTodoStore = defineStore('todo-store', () => {
  const todoInput = ref<string>('');
  let todoList = reactive<TodoItem[]>([]);

  function addNewTodo() {
    if (!todoInput.value) {
      alert('Input is empty!');
      return;
    }

    const newTodo: TodoItem = {
      id: uuidV4(),
      text: todoInput.value,
      isCompleted: false,
    };

    todoList.push(newTodo);
    todoInput.value = '';
  }
  function deleteTodoItem(id: string) {
    const index = todoList.findIndex((todoItem) => todoItem.id === id);
    if (index !== -1) todoList.splice(index, 1);
  }
  function toggleTodoCompleted(id: string) {
    todoList.filter((todoItem) => {
      if (todoItem.id === id) {
        todoItem.isCompleted = !todoItem.isCompleted;
      }
    });
  }

  return {
    todoInput,
    addNewTodo,
    todoList,
    toggleTodoCompleted,
    deleteTodoItem,
  };
});

export { useTodoStore };
