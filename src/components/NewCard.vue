<template>
    <div class="new-card">
        <button>
            <div class="circle">
                <img src="@/assets/plus-icon.png" />
            </div>
        </button>
        <p>Add New Card</p>
    </div>
</template>

<script>
export default {
    name: 'New Card'
}
</script>

<style scoped>
.new-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background-card);
    width: 15rem;
    height: 23rem;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.125rem;
    height: 5.125rem;
    background-color: #414144;
    border-radius: 50%;
}

img {
    width: 2.625rem;
    height: 2.625rem;
}

p {
    font-size: 1.6875rem;
    font-family: var(--font-header-card);
    margin: 0.625rem 0 0 0;
    color: #414144;
}

button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>
