<template>
    <div class="icon">
        <span></span>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: {
        title: String
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 5rem;
}

span {
    display: block;
    width: 2.25rem;
    height: 2.25rem;
    background-color: #b4d457;
    border-radius: 25px;
}

h1 {
    margin: 0.3125rem 0 0 0;
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    font-weight: normal;
    color: #b4d457;
}
</style>
