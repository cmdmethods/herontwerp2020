<template>
    <div class="sort-bar">
        <ul>
            <li>
                <button><category-icon v-for="category in categories" :key="category.id" :name="category.name"></category-icon></button>
            </li>
            <li>
                <button><category-icon v-for="category in categories" :key="category.id" :name="category.name"></category-icon></button>
            </li>
            <li>
                <button><category-icon v-for="category in categories" :key="category.id" :name="category.name"></category-icon></button>
            </li>
            <li>
                <button><category-icon v-for="category in categories" :key="category.id" :name="category.name"></category-icon></button>
            </li>
            <li>
                <button><category-icon v-for="category in categories" :key="category.id" :name="category.name"></category-icon></button>
            </li>
            <li>
                <button><category-icon v-for="category in categories" :key="category.id" :name="category.name"></category-icon></button>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from '@/components/CategoryIcon.vue'
import categories from '@/data/categories.json'

export default {
    name: 'SortBar',
    components: { 'category-icon': Icon },
    computed: {
        categories() {
            return categories
        }
    }
}
</script>

<style scoped>
.sort-bar {
    background-color: #ffffff;
    width: 36.76rem;
    height: 5.805rem;
}

ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 36.76rem;
    height: 5.805rem;
    padding: 0 1.3rem 0 1rem;
}

button {
    border: none;
    cursor: pointer;
    background-color: transparent;
}
</style>
