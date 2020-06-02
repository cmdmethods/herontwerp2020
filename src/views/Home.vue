<template>
    <div class="home">
        <Header />

        <div class="category" v-for="category in cardsGrouped" :key="category.id">
            <CategoryHeader v-bind="category" />

            <div class="grid">
                <Card v-for="card in category.cards" :key="card.id" v-bind="card" />
            </div>
        </div>
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import categories from '@/data/categories.json'
import info from '@/data/info.json'
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import CategoryHeader from '@/components/CategoryHeader.vue'

export default {
    name: 'Home',
    components: { Header, Card, CategoryHeader },
    computed: {
        info() {
            return info
        },
        cardsGrouped() {
            return categories.map(cat => ({
                ...cat,
                cards: cards.filter(card => card.category === cat.id)
            }))
        }
    }
}
</script>

<style scoped>
.category {
    margin: 4rem auto;
    max-width: 1130px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: space-around;
    grid-gap: 3rem;
}
</style>
