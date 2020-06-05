<template>
    <div class="category-header" :class="id">
        <h1 :class="`color-${id}`">
            {{ name }} <i>{{ motto }}</i>
        </h1>
        <div class="line" :class="`bg-${id}`" />
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        id: String,
        motto: String
    }
}
</script>

<style scoped>
.category-header {
    width: 100%;
    position: relative;
}

h1 {
    background-color: var(--body-background);
    position: relative;
    z-index: 2;
    width: max-content;
    padding-right: 1em;
    display: flex;
    align-items: center;
    font-weight: 300;
}

i {
    font-weight: 400;
    font-size: 1rem;
    margin-left: 1em;
}

.line {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    height: 4px;
    border-radius: 2px;
    z-index: 1;
}
</style>
