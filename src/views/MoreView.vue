<script setup lang="ts">
import { useTodoStore } from '@/stores/useTodoStore';
import { RouterLink } from 'vue-router';
const props = defineProps<{
  id: string;
  text?: string;
  description?: string;
  isCompleted?: boolean;
}>();

const todoStore = useTodoStore();

function handleInputDescription(event: Event) {
  todoStore.updateInputDescription(props.id, (event.target as HTMLTextAreaElement).value);
}
</script>

<template>
  <div>
    <RouterLink class="back-btn" to="/">Home</RouterLink>

    <div class="container">
      <div class="text-container">
        <p class="text">{{ text }}</p>
        <p class="state">{{ isCompleted ? 'Completed' : 'In Progress' }}</p>
      </div>

      <div class="scratchpad">
        <label for="scratchpad" class="scratchpad-label">SCRATCHPAD</label>
        <textarea
          id="scratchpad"
          class="scratchpad-textarea"
          :value="description"
          spellcheck="false"
          @input="handleInputDescription"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-btn {
  color: var(--black-color);
  background-color: var(--white-color);
  text-decoration: none;
  font-weight: bold;
  padding: 4px 8px;
  border: 1px solid var(--black-color);
  border-radius: 4px;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: var(--black-color);
    background-color: rgba(241, 231, 231, 0.7);
    border-color: var(--error-color);
  }
}

.container {
  padding: 14px;
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid var(--black-color);
  border-radius: 4px;

  .text-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    .text {
      font-size: 1.2rem;
    }

    .state {
      font-size: 0.9rem;
    }
  }

  .scratchpad {
    display: flex;
    flex-direction: column;

    .scratchpad-label {
      color: rgba(0, 0, 0, 0.35);
      font-size: 12px;
      font-weight: 400;
    }

    .scratchpad-textarea {
      resize: none;
      outline: none;
      font-size: 18px;
      padding: 6px;
      letter-spacing: 1px;
      line-height: 1.4;
      border: 1px solid rgba(0, 0, 0, 0.35);
      height: 300px;
    }
  }
}
</style>
