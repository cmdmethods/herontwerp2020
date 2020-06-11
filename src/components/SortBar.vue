<template>
    <div class="observer-helper" ref="searchBar">
        <nav class="sort-bar">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <a :href="`#${category.id}`"><CategoryIcon :category="category.id"></CategoryIcon></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import CategoryIcon from '@/components/CategoryIcon.vue'
import categories from '@/data/categories.json'

export default {
    name: 'SortBar',
    components: { CategoryIcon },
    computed: {
        categories() {
            return categories
        }
    },
    mounted() {
        const navEl = this.$refs.searchBar
        this.observer = new IntersectionObserver(([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1), { threshold: [1] })

        this.observer.observe(navEl)
    },
    beforeDestroy() {
        this.observer.disconnect()
    }
}
</script>

<style scoped>
.observer-helper {
    margin: 0 auto;
    padding-top: 52px; /* header height */
    margin-top: -64px; /* header height */
    position: sticky;
    top: -1px;
    z-index: 3;
}

.sort-bar {
    margin: 0 auto;
    background-color: #ffffff;
    width: 36.76rem;
    height: 4.2rem;
    border-radius: 3px;
    padding: 0 0, 5rem;
    box-shadow: 0;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: box-shadow, width;
}

.is-sticky .sort-bar {
    width: 400px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
}

button {
    border: none;
    cursor: pointer;
    background-color: transparent;
}
</style>
