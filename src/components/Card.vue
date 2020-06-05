<template>
    <div class="card">
        <div class="header-container">
            <CategoryIcon :category="category" />
            <h1 class="name" :class="`color-${category}`">{{ name }}</h1>
        </div>
        <img :src="`/card-images/${image}`" :alt="name" />
        <div class="text-container">
            <h2 :class="`color-${category}`">Why?</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
import categories from '@/data/categories.json'
import CategoryIcon from '@/components/CategoryIcon.vue'

export default {
    name: 'Card',
    components: { CategoryIcon },
    props: {
        name: String,
        description: String,
        image: String,
        category: String
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
    width: 17.5rem;
    height: 25.5em;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 1rem;
    transition-duration: 0.3s;
}

.card:hover {
    filter: drop-shadow(2px 2px 4px #aaa);
    transform: translateY(-3%);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
}

.header-container {
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 0.5rem;
}

.name {
    font-family: var(--font-header-card);
    font-size: 1.6875rem;
    line-height: 1.3;
    font-weight: 300;
    margin-left: 0.2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    margin-left: 0.5rem;
}

img {
    object-fit: contain;
    width: 100%;
    height: 11rem;
}

.text-container {
    flex-shrink: 0;
}

h2 {
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    font-weight: normal;
    margin-bottom: 0;
}

p {
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
