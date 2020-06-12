<template>
    <div class="link-container">
        <a href="/">CMD Methods</a>
        <a href="/cmd-methods">What is CMD Methods?</a>
        <a href="/dot-framework">What is the DOT-Framework?</a>
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

a:first-child {
    font-weight: 600;
}

a:nth-child(2) {
    margin: 0 0 0 1.25rem;
    color: #545457;
}

a:nth-child(3) {
    margin: 0 0 0 1.25em;
    color: #545457;
}

a:hover {
    color: #a0a0a2;
}
</style>
