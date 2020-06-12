<template>
    <footer>
        <nav>
            <ul>
                <li>CMD METHODS 2020</li>
                <li>
                    <a>About Us</a>
                </li>
                <li>
                    <a>Licensing</a>
                </li>
                <li>
                    <a>Contact Info</a>
                </li>
                <li>
                    <a>Get The Pack</a>
                </li>
                <li>
                    <a href="https://github.com/cmdmethods/website" target="_blank">Github</a>
                </li>
                <li>
                    <a>More Info</a>
                </li>
            </ul>
            <ul>
                <li>Made by CMD Students &#10084;&#65039;</li>
                <li>
                    <a href="https://www.cmd-amsterdam.nl/" target="_blank">
                        <img src="@/assets/logo-hva.png" />
                    </a>
                </li>
                <li>
                    <a href="https://www.han.nl/" target="_blank">
                        <img src="@/assets/logo-han.png" />
                    </a>
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
    width: 100%;
    height: 1.8125rem;
    margin: 0 0 2.8125rem 0;
    padding-top: 6rem;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 5rem 0 1.5rem;
}

ul {
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.875rem;
    margin-bottom: 2rem;
}

ul:last-child {
    flex-wrap: nowrap;
}

ul:first-child li {
    padding-right: 1.5rem;
}

ul:last-child li {
    padding-left: 2rem;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: #414144;
}

nav:last-child {
    flex-direction: flex-end;
}

li:first-child {
    font-weight: 600;
}

li:nth-child(8) {
    font-weight: 600;
}
</style>
