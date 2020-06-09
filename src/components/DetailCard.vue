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
        <div class="text-container">
            <div class="section-two">
                <h2>Why?</h2>
                <p>Existing products in your niche can be a valuable reference and source of inspiration.</p>
                <h2>How?</h2>
                <p>
                    Scout for products that are somehow related to your design goal. These could be products that solve the same problem or adopt a similar
                    solution strategy. Create a structured overview of these products for example by clustering them into meaningful categories; creating a
                    landscape of alternatives. Benchmarking may serve as a more extensive and neutral alternative to competitive analysis
                </p>
            </div>
            <div class="section-three">
                <h2>Ingredients</h2>
                <ul>
                    <li>A collector’s attitude.</li>
                    <li>An ability to focus out of your niche.</li>
                    <li>The patience to create multiple clusters and give meaning to them.</li>
                </ul>
                <h2>In practice</h2>
                <p>
                    When designing an app that gives users personalised advice about new music artists, a benchmark shows information from similar websites or
                    apps. The benchmark also compares solutions that give personalised advice about other topics, like books or travelling for example that
                    could be inspiring.
                </p>
            </div>
            <div class="section-four">
                <h2>Useful resources</h2>
                <p>
                    <cite>Universal methods of design</cite> (Martin & Hannington , 2012) spend a couple of pages about competitive analysis. In the dutch
                    version: chapter 15, p36-37
                </p>
            </div>
        </div>
        <div class="button-container">
            <button classs="exit"><img src="@/assets/x-button.png" /></button>
        </div>
    </div>
</template>

<script>
import cards from '@/data/cards.json'
import CategoryIcon from '@/components/CategoryIcon.vue'

export default {
    name: 'Detail card',
    components: { CategoryIcon },
    props: {
        name: String,
        description: String,
        image: String,
        category: String,
        info: String,
        why: String
    },
    computed: {
        cards() {
            return cards
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
