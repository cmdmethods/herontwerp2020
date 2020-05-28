<template>
    <div class="card">
        <div class="header-card">
            <category-icon></category-icon>
            <h1>{{ title }}</h1>
        </div>
        <div class="image-container">
            <img src="@/assets/lib-benchmark-creation.png" />
        </div>
        <h2>Why?</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
    name: 'Card',
    components: { 'category-icon': Icon },
    props: {
        title: String,
        text: String
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
    background-color: var(--background-card);
    width: 17.1875rem;
    height: 25.78125rem;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
}

.header-card {
    display: flex;
    justify-content: space-around;
}

h1 {
    font-family: var(--font-header-card);
    font-size: 1.6875rem;
    margin: 1rem 1.1875rem 0 0rem;
    font-weight: 300;
    white-space: nowrap;
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
}

p {
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    margin: 0 1.1875rem 0.78125rem 1.25rem;
}
</style>
