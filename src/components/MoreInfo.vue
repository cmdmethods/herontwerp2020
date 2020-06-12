<template>
    <div class="more-info-card">
        <div class="image-container">
            <img src="@/assets/cmd-methods-logo.png" />
        </div>
        <div class="text-container">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
            <a href="/cmd-methods">See how CMD Methods works</a>
        </div>
    </div>
</template>

<script>
import info from '@/data/info.json'

export default {
    name: 'MoreInfo',
    props: {
        title: String,
        text: String
    },
    computed: {
        info() {
            return info
        }
    }
}
</script>

<style scoped>
.more-info-card {
    display: flex;
    width: 60.875rem;
    height: 20.883125rem;
    background-color: #ffffff;
    font-family: 'Source Sans Pro', sans-serif;
    color: #414144;
}

.image-container {
    margin: 0 3.43375rem 0 0;
}

.text-container {
    align-self: center;
}

h1 {
    font-size: 2.625rem;
    font-weight: 300;
    margin: 0 0 0.840625rem 0;
}

p {
    font-size: 1.125rem;
    margin: 0 0 2.25rem 0;
}

a {
    cursor: pointer;
    display: block;
    width: 20.3rem;
    height: 3.8675rem;
    padding: 1.1875rem 4rem 1.1875rem 4rem;
    background-color: #676769;
    color: white;
    font-weight: 500;
    border-radius: 3px;
    text-decoration: none;
    transition: 0.1s;
}

a:hover {
    background-color: #a0a0a2;
}
</style>
