<template>
    <div class="flex">
        <label>{{ label }}</label>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'labelInput',
    props: ['label'],
}
</script>

<style scoped>
    .flex{
        display: flex
    }
    label{
        color: rgba(255, 255, 255, 0.5);
        widows: 57px;
        font-size: 14px;
        width: 125px;
        text-align: start;
    }
</style>