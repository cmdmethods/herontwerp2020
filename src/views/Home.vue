<template>
    <div class="home">
        <Header />
        <div class="grid">
            <Card v-for="card in cards" :key="card.id" v-bind="card" />
        </div>
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import categories from '@/data/categories.json'
import info from '@/data/info.json'
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'

export default {
    name: 'Home',
    components: { Header, Card },
    computed: {
        cards() {
            return cards
        },
        categories() {
            return categories
        },
        info() {
            return info
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
