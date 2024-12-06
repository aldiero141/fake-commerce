<template>
  <div class="search">
    <Icon name="ic:round-search" style="color: var(--primary)" />
    <input
      :type="props.type"
      :value="props.modelValue"
      :name="props.name"
      :placeholder="props.placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <div>{{ props.error }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps([
  "modelValue",
  "label",
  "name",
  "type",
  "placeholder",
  "error",
]);
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  gap: 1em;
  border-radius: 0.5em;
  border: 1px solid var(--tertiary);
  padding: 0.25em 0.5em;
  width: 100%;
  input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    & :focus {
      outline: none;
      border: none;
    }
    &::placeholder {
      color: var(--secondary);
      opacity: 1;
    }
    &::-ms-input-placeholder {
      /* Edge 12 -18 */
      color: red;
    }
  }
}
</style>
