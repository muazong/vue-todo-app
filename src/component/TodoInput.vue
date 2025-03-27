<script setup lang="ts">
import { useTodoStore } from '@/stores/useTodoStore';

const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-input-container">
    <input
      class="todo-input"
      type="text"
      v-model.lazy.trim="todoStore.todoInput"
      @keyup.enter="todoStore.addNewTodo()"
      placeholder="Enter new todo..."
    />
    <button @click="todoStore.addNewTodo()" class="add-todo">ADD</button>
  </div>
</template>

<style scoped>
.todo-input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 22px;
}

.todo-input {
  border: 1px solid #000;
  border-radius: 2px;
  padding: 6px;
  font-size: 16px;
  letter-spacing: 2px;
  width: 70%;
  background-color: var(--white-color);
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: var(--error-color);
  }

  &::placeholder {
    color: #706d54;
  }
}

.add-todo {
  border: none;
  padding: 7px 18px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #000;
  color: var(--white-color);
  background-color: var(--orange-color);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000;
    border-color: var(--error-color);
    background-color: var(--white-color);
  }
}
</style>
