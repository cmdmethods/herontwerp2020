<template>
    <div class="home">
        <div class="grid">
            <Card v-for="card in cards" :key="card.id" :title="card.title" :text="card.text" :image="card.image" />
            <Category v-for="category in categories" :key="category.id" :title="category.title" :text="category.text" :image="category.image" />
        </div>
        <Icon v-for="category in categories" :key="category.id" :title="category.title" />
        <SortBar></SortBar>
        <NewProjectButton></NewProjectButton>
        <SearchBar></SearchBar>
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import categories from '@/data/categories.json'
import Card from '@/components/Card.vue'
import Category from '@/components/Category.vue'
import Icon from '@/components/Icon.vue'
import SortBar from '@/components/SortBar.vue'
import NewProjectButton from '@/components/NewProjectButton.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
    name: 'Home',
    components: { Card, Category, Icon, SortBar, NewProjectButton, SearchBar },
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
