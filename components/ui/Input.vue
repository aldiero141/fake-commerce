<template>
  <div>
    <div>{{ props.label }} <span v-if="props.required">*</span></div>
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

<style></style>
