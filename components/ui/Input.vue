<template>
  <div>
    <div v-if="props.label">
      {{ props.label }} <span v-if="props.required">*</span>
    </div>
    <input
      :value="props.modelValue"
      :type="props.type"
      :disabled="props.disabled"
      :name="props.name"
      :placeholder="props.placeholder"
      :style="style"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <div class="error" v-if="props.error">{{ props.error }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps([
  "modelValue",
  "label",
  "name",
  "type",
  "placeholder",
  "style",
  "required",
  "error",
  "disabled",
]);
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
input {
  border: 1px solid var(--secondary) !important;
  outline: 1px solid var(--secondary) !important;
  border-radius: 0.5em;
  width: 100% !important;
  outline: none;
  border: none;
  height: 2em;
  padding: 0 1em;
  background-color: transparent;
  & :focus {
    border: 1px solid var(--secondary);
    outline: 1px solid var(--secondary);
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.error {
  color: red;
  font-size: 0.5rem;
}
</style>
