<template>
    <div class="detail-card">
        <div class="header-container">
            <CategoryIcon />
            <h1 class="name">Literature study</h1>
        </div>
        <div class="image-container">
            <img class="method-image" src="/card-images/lib-literature-study.png" />
            <img class="method-stats" src="/card-images/lib-literature-study-stats.png" />
        </div>
        <div class="text-container" v-for="card in cards" :key="card.id" v-bind="card">
            <div class="section-two">
                <h2>Why?</h2>
                <p>{{ card.info.why }}</p>
                <h2>How?</h2>
                <p>{{ card.info.how }}</p>
            </div>
            <div class="section-three">
                <h2>Ingredients</h2>
                <!--
                    <li v-for="ingredient in card.ingredients">{{ ingredient }}</li>
                -->
                <ul>
                    <li v-for="card in cards" :key="card.info.ingredients">{{ card.info.ingredients }}</li>
                </ul>
                <h2>In practice</h2>
                <p>{{ card.info.practice }}</p>
            </div>
            <div class="section-four">
                <h2>Useful resources</h2>
                <p>{{ card.info.resources }}</p>
            </div>
        </div>
        <div class="button-container">
            <button class="exit" @click="$emit('close')">
                <img src="@/assets/x-button.png" />
            </button>
        </div>
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import CategoryIcon from '@/components/CategoryIcon.vue'

export default {
    name: 'DetailCard',
    components: { CategoryIcon },
    props: {
        cardId: String,
        info: String
    },
    computed: {
        card() {
            return cards.find(card => card.id === this.cardId)
        }
    }
}
</script>

<style scoped>
.detail-card {
    display: flex;
    position: relative;
    justify-content: flex-start;
    width: 78.625rem;
    height: 35rem;
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-family: var(--font-body-card);
    color: #414144;
    font-size: 14px;
    margin: 1rem 0 0 1rem;
}

.header-container {
    display: flex;
    height: 30px;
}

.image-container {
    margin: 1rem 0 0 1.5rem;
    position: absolute;
    bottom: 30px;
    height: 500px;
    width: 400px;
}

.method-image {
    width: 27.4375rem;
    height: 24.875rem;
}

.text-container {
    position: absolute;
    right: 60px;
    bottom: 100px;
    display: flex;
    width: 748px;
    height: 400px;
}

.section-two,
.section-three {
    margin: 0 20px 0 0;
}

.button-container {
    position: absolute;
    right: 5px;
    margin: 1rem 0.5rem 0 0;
}

.name {
    font-family: var(--font-header-card);
    font-weight: 300;
    color: #b4d457;
}

button {
    border: none;
    background: transparent;
    cursor: pointer;
}

p {
    display: block;
    width: 236px;
    margin: 0 0 14px 0;
}

h2 {
    color: #b4d457;
    font-weight: 300;
    margin: 0 0 4px 0;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0 0 14px 0;
}

li {
    margin: 0;
}
</style>
