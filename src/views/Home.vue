<template>
    <div class="home">
        <Header :search-query.sync="searchQuery" />
        <div class="more-info-section">
            <MoreInfo v-for="info in info" :key="info.id" :title="info.title" :text="info.text" />
        </div>

        <SortBar v-if="hasSearch === false" />

        <div class="cards">
            <template v-if="hasSearch">
                <div class="grid">
                    <Card v-for="card in cardsSearchResult" :key="card.id" v-bind="card" />
                </div>
            </template>

            <div v-else class="category" v-for="category in cardsGrouped" :key="category.id" :id="category.id">
                <CategoryHeader v-bind="category" />

                <div class="grid">
                    <Card v-for="card in category.cards" :key="card.id" v-bind="card" />
                </div>
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
import Fuse from 'fuse.js'

export default {
    name: 'Home',
    components: { Header, Card, CategoryHeader, MoreInfo, SortBar },
    data() {
        return {
            searchQuery: ''
        }
    },
    computed: {
        info() {
            return info
        },
        hasSearch() {
            return this.searchQuery.length > 2
        },
        cardsSearchResult() {
            if (this.hasSearch) {
                return this.fuse.search(this.searchQuery).map(({ item }) => item)
            }

            return cards
        },
        cardsGrouped() {
            return categories.map(cat => ({
                ...cat,
                cards: this.cardsSearchResult.filter(card => card.category === cat.id)
            }))
        }
    },
    created() {
        this.fuse = new Fuse(cards, {
            keys: ['name', 'description']
        })
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

.cards {
    margin: 4rem auto;
    max-width: 1130px;
    margin-bottom: 0;
}

.category {
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
