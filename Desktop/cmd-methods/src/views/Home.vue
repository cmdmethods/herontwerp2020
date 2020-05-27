<template>
    <div class="home">
        <div class="grid">
            <Card v-for="card in cards" :key="card.id" :title="card.title" :text="card.text" :image="card.image" />
            <Category v-for="category in categories" :key="category.id" :title="category.title" :text="category.text" :image="category.image" />
        </div>
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import categories from '@/data/categories.json'
import Card from '@/components/Card.vue'
import Category from '@/components/Category.vue'

export default {
    name: 'Home',
    components: { Card, Category },
    computed: {
        cards() {
            return cards
        },
        categories() {
            return categories
        }
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
