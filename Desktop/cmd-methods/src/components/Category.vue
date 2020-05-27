<template>
    <div class="category">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: {
        title: String,
        text: String
    }
}
</script>

<style scoped>
.category {
    font-family: var(--font-body-card);
    background-color: #b4d457;
    color: #ffffff;
    width: 70.625rem;
    height: 11.3125rem;
    padding: 0 0 0 1.875rem;
    border-radius: 8px;
}

h1 {
    font-size: 2rem;
    font-weight: normal;
    margin: 0.875rem 0 0 0;
}

p {
    font-size: 1.125rem;
    width: 46.75rem;
    font-style: italic;
}
</style>
