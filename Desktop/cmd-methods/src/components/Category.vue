<template>
    <div class="category">
        <div class="icon-header">
            <span></span>
            <h1>{{ title }}</h1>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
import categories from '@/data/categories.json'

export default {
    name: 'Category',
    props: {
        title: String
    },
    computed: {
        categories() {
            return categories
        }
    }
}
</script>

<style scoped>
.category {
    display: flex;
    width: 69.625rem;
    height: 5;
}

.line {
    border-bottom: 2.5px solid #b4d457;
    width: 58.6875rem;
    height: 1.85rem;
    margin: 0 0 0 0.9375rem;
}

.icon-header {
    display: flex;
    align-items: center;
    width: 8rem;
    height: 3.125rem;
}

.icon-header span {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #b4d457;
    border-radius: 25px;
}

.icon-header h1 {
    font-family: var(--font-body-card);
    font-size: 1.5rem;
    font-weight: 300;
    color: #b4d457;
    margin: 0 0 0 0.9375rem;
}
</style>
