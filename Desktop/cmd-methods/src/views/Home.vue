<template>
    <div class="home">
        <div class="grid">
            <MoreInfo v-for="info in info" :key="info.id" :title="info.title" :text="info.text" />
        </div>
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import categories from '@/data/categories.json'
import Card from '@/components/Card.vue'
import Category from '@/components/Category.vue'
import Icon from '@/components/Icon.vue'
import SortBar from '@/components/SortBar.vue'
import MoreInfo from '@/components/MoreInfo.vue'
import info from '@/data/info.json'

export default {
    name: 'Home',
    components: { Card, Category, Icon, SortBar, MoreInfo },
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
