<template>
    <footer>
        <nav>
            <ul>
                <li>CMD METHODS 2020</li>
                <li><a>About Us</a></li>
                <li><a>Licensing</a></li>
                <li><a>Contact Info</a></li>
                <li><a>Get The Pack</a></li>
                <li><a>Github</a></li>
                <li><a>More Info</a></li>
                <li>Made by CMD Students &#10084;&#65039;</li>
                <li>
                    <a><img src="@/assets/logo-hva.png"/></a>
                </li>
                <li>
                    <a><img src="@/assets/logo-han.png"/></a>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.8125rem;
    margin: 0 0 2.8125rem 0;
}

ul {
    align-items: center;
    padding: 0 3.75rem 0 3.75rem;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.875rem;
    color: #414144;
}

a {
    cursor: pointer;
}

li:first-child {
    font-weight: 600;
}

li:nth-child(7) {
    margin: 0 22.4375rem 0 0;
}

li:nth-child(8) {
    font-weight: 600;
}
</style>
