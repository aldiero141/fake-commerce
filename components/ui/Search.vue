<template>
  <div class="search">
    <Icon name="ic:round-search" style="color: black" />
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
const props = defineProps(["modelValue", "label", "name", "type"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  gap: 1em;
  border-radius: 0.5em;
  border: 1px solid #dfdfdf;
  padding: 0.25em 0.5em;
  input {
    outline: none;
    border: none;
    & :focus {
      outline: none;
      border: none;
    }
  }
}
</style>
