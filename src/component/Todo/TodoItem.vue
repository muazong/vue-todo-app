<script setup lang="ts">
import { RoutePath } from '@/routes';
import { useTodoStore } from '@/stores/useTodoStore';
const todoStore = useTodoStore();
</script>

<template>
  <div>
    <ul class="todo-list">
      <li class="todo-item" v-for="todoItem in todoStore.todoList" :key="todoItem.id">
        <p :class="['item-name', todoItem.isCompleted ? 'done' : '']">
          <span>{{ todoItem.text }}</span>
        </p>
        <div class="modifier-btns">
          <button class="done" @click="todoStore.toggleTodoCompleted(todoItem.id)">Done</button>
          <button class="delete" @click.stop="todoStore.deleteTodoItem(todoItem.id)">Delete</button>
          <RouterLink
            :to="{
              path: `${RoutePath.MORE}${todoItem.id}`,
              query: {
                text: todoItem.text,
                description: todoItem.description,
                isCompleted: String(todoItem.isCompleted),
              },
            }"
          >
            <button class="more">More</button>
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  max-height: 450px;
  overflow-y: scroll;
  scrollbar-width: 1px;
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
  padding: 14px;
  gap: 12px;

  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white-color);
    padding: 10px 8px;
    font-size: 14px;
    border: 1px solid var(--white-color);
    transition: all 0.2s ease-in-out;
    gap: 12px;

    &:hover {
      border-color: var(--error-color);
      background-color: rgba(193, 186, 161, 0.6);
    }

    .item-name {
      overflow: hidden;
    }

    .item-name.done {
      position: relative;
      color: var(--error-color);
      transition: all 0.3s ease-in-out;

      span::before {
        content: '';
        height: 2px;
        width: 100%;
        background-color: #000;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) scaleX(0);
        transform-origin: left;
        animation: spread 0.3s ease-in-out forwards;
      }
    }

    .modifier-btns {
      display: flex;
      align-items: center;
      gap: 12px;

      button {
        font-size: 13px;
        padding: 4px 6px;
        cursor: pointer;
        font-weight: 500;
        border: 1px solid var(--white-color);
        transition: border 0.3s ease-in-out;

        &.done {
          background-color: var(--success-color);

          &:hover {
            border: 1px solid var(--error-color);
          }
        }

        &.more {
          background-color: #9acbd0;
          &:hover {
            border: 1px solid var(--error-color);
          }
        }

        &.delete {
          background-color: var(--error-color);
          color: var(--white-color);
          &:hover {
            border: 1px solid var(--error-color);
          }
        }
      }
    }
  }
}

@keyframes spread {
  from {
    transform: translateY(-50%) scaleX(0);
    opacity: 0;
  }
  to {
    transform: translateY(-50%) scaleX(1);
    opacity: 1;
  }
}
</style>
