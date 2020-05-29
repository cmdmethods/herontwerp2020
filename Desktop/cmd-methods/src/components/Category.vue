<template>
    <div class="category">
        <div class="content-container">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
        </div>
        <div class="image-container">
            <img src="@/assets/logo-library.png" />
        </div>
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
    display: flex;
    font-family: var(--font-body-card);
    background-color: #b4d457;
    color: #ffffff;
    width: 70.625rem;
    height: 11.3125rem;
    padding: 0 0 0 1.875rem;
    border-radius: 8px;
}

.content-container {
    width: 46.75rem;
    margin: 0;
    flex-grow: 0.5;
}

h1 {
    font-size: 2rem;
    font-weight: normal;
    /* margin: 0.875rem 0 0 0; */
    width: 25%;
}

p {
    font-size: 1.125rem;
    width: 46.75rem;
    font-style: italic;
}

.image-container {
    width: 10.1875rem;
    align-self: center;
}

img {
    width: 100%;
}
</style>
