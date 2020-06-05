<template>
    <div class="home">
        <Header />
        <div class="more-info-section">
            <MoreInfo v-for="info in info" :key="info.id" :title="info.title" :text="info.text" />
        </div>

        <SortBar />

        <div class="category" v-for="category in cardsGrouped" :key="category.id" :id="category.id">
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
import MoreInfo from '@/components/MoreInfo.vue'
import SortBar from '@/components/SortBar.vue'

export default {
    name: 'Home',
    components: { Header, Card, CategoryHeader, MoreInfo, SortBar },
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
.more-info-section {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    max-width: 70.625rem;
}

.category {
    margin: 4rem auto;
    max-width: 1130px;
    margin-bottom: 0;
    padding-top: 1rem;
}

.category:first-of-type {
    margin-top: 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: space-around;
    grid-gap: 2rem;
}
</style>
