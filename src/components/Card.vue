<template>
    <div class="card">
        <div class="header-container">
            <category-icon></category-icon>
            <h1>{{ name }}</h1>
        </div>
        <div class="image-container">
            <img src="@/assets/lib-benchmark-creation.png" />
        </div>
        <div class="text-container">
            <h2>Why?</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import categories from '@/data/categories.json'

export default {
    name: 'Card',
    components: { 'category-icon': Icon },
    props: {
        name: String,
        description: String
    },
    computed: {
        categories() {
            return categories
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    background-color: var(--background-card);
    width: 17.1875rem;
    height: 25.78125rem;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
}

.header-container {
    display: flex;
    margin: 0 0 0 1rem;
    align-items: center;
    margin: 0 1.1875rem 0 1.25rem;
    height: 6rem;
}

h1 {
    font-family: var(--font-header-card);
    font-size: 1.6875rem;
    font-weight: 300;
    white-space: nowrap;
    color: #b4d457;
    margin: 0 0 0.5rem 0;
}

.image-container {
    object-fit: cover;
    width: 16.4375rem;
    height: 13.875rem;
    margin: 0.25rem 0.375rem 0 0.375rem;
}

img {
    max-width: 100%;
    max-height: 100%;
}

h2 {
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    font-weight: normal;
    margin: 0 1.1875rem 0.25rem 1.25rem;
    color: #b4d457;
}

p {
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    margin: 0 1.1875rem 0.78125rem 1.25rem;
}
</style>
