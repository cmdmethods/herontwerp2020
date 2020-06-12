<template>
    <div class="icon" :class="`bg-${category}`" />
</template>

<script>
import categories from '@/data/categories.json'

export default {
    name: 'Icon',
    props: {
        category: String
    },
    computed: {
        categoryInfo() {
            return categories.find(cat => cat.id === this.category)
        }
    }
}
</script>

<style scoped>
.icon {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    transistion: 0.2s;
}

.icon:hover {
    opacity: 0.7;
}
</style>
