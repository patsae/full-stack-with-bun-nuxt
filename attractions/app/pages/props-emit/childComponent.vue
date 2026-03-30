<template>
    <p>{{ props.message }}</p>
</template>

<script setup lang="ts">
   const props = defineProps<{
        message: string
    }>()
</script>