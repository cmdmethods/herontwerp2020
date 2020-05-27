<template>
    <div class="card">
        <h1 class="header-1-card">{{ title }}</h1>
        <div class="image-container">
            <img src="@/assets/lib-benchmark-creation.png" />
        </div>
        <h2 class="header-2-card">Why?</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        text: String
    }
}
</script>

<style scoped>
.card {
    background-color: var(--background-card);
    width: 17.1875rem;
    height: 25.78125rem;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
}

.header-1-card {
    font-family: var(--font-header-card);
    font-size: 1.6875rem;
    margin: 0.875rem 1.1875rem 0 3rem;
    font-weight: 300;
    white-space: nowrap;
}

.image-container {
    object-fit: cover;
    width: 16.4375rem;
    height: 13.875rem;
    margin: 0.25rem 0.375rem 0 0.375rem;
}

img {
    max-width: 100%;
    max-height: 100%;
}

.header-2-card {
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    font-weight: normal;
    margin: 0 1.1875rem 0.25rem 1.25rem;
}

p {
    font-family: var(--font-body-card);
    font-size: 0.875rem;
    margin: 0 1.1875rem 0.78125rem 1.25rem;
}
</style>
