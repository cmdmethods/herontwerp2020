<template>
    <button class="new-project-button"><span>&#43;</span>New Project</button>
</template>

<script>
export default {
    name: 'NewProjectButton'
}
</script>

<style scoped>
.new-project-button {
    width: 7.75rem;
    height: 2rem;
    background-color: #5cc7ee;
    border: none;
    border-radius: 3px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
}

span {
    margin: 0 0.2rem 0 0;
    font-weight: 900;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>
