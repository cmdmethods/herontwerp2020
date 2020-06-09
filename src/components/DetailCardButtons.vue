<template>
    <div class="button-container">
        <button class="delete-button">Delete card</button>
        <button class="complete-button">Mark as complete</button>
    </div>
</template>

<script>
export default {
    name: 'Detail card buttons'
}
</script>

<style scoped>
.button-container {
    width: 425px;
    height: 50px;
    display: flex;
    justify-content: space-between;
}

.delete-button {
    width: 207px;
    height: 50px;
    border: 1px solid #c6c6c7;
    border-radius: 3px;
    font-family: var(--font-body-card);
    font-size: 18px;
    color: #414144;
    background-color: #ffffff;
}

.complete-button {
    width: 207px;
    height: 50px;
    border-radius: 3px;
    background-color: #676769;
    border: none;
    font-family: var(--font-body-card);
    font-size: 18px;
    color: #ffffff;
}
</style>
