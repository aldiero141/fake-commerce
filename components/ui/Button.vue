<template>
    <button :class="`btn btn-${variant}`" :name="name" :type="type" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script lang="ts" setup>
    defineProps({
        text: { type: String, default: '' },
        name: { type: String, default: '' },
        variant: { type: String, default: '' },
        type: { type: String, default: '' },
    })
</script>

<style lang="scss" scoped>
    .btn {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
        &-primary {
            background-color: var(--primary);
            border: 0.5px solid var(--primary);
            color: var(--white);
        }
        &-secondary {
            background-color: var(--secondary);
            border: 0.5px solid var(--secondary);
            color: var(--white);
        }
        &-tertiary {
            background-color: var(--tertiary);
            border: 0.5px solid var(--tertiary);
            color: var(--white);
        }
    }
</style>