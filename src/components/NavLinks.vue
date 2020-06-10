<template>
    <div class="link-container">
        <a href="/">CMD Methods</a>
        <a href="/cmd-methods">What is CMD Methods?</a>
    </div>
</template>

<script>
export default {
    name: 'NavigationLinks'
}
</script>

<style scoped>
a {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.875rem;
    color: #414144;
    cursor: pointer;
    text-decoration: none;
}

a:nth-child(2) {
    margin: 0 0 0 1.25rem;
    color: #545457;
}
</style>
