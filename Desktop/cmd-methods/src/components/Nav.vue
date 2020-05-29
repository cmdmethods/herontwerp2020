<template>
    <header>
        <nav>
            <ul>
                <li class="nav-links"><NavLinks></NavLinks></li>
                <li class="search-bar"><SearchBar></SearchBar></li>
                <li><NewProjectButton></NewProjectButton></li>
                <li class="profile-icon"><ProfileIcon></ProfileIcon></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import NewProjectButton from '@/components/NewProjectButton.vue'
import SearchBar from '@/components/SearchBar.vue'
import ProfileIcon from '@/components/ProfileIcon.vue'
import NavLinks from '@/components/NavLinks.vue'

export default {
    name: 'Navigation bar',
    components: { NavLinks, SearchBar, NewProjectButton, ProfileIcon }
}
</script>

<style scoped>
nav {
    width: 90rem;
    height: 2.8125rem;
    background-color: #ffffff;
}

ul {
    margin: 0;
    padding: 0;
    height: 2.8125rem;
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0 0.9375rem 0 0.9375rem;
}

.nav-links {
    flex-grow: 2;
}

.search-bar {
    flex-grow: 2;
    align-self: center;
}

.profile-icon {
    padding: 0 0 0 0.9375rem;
    align-self: flex-end;
}
</style>
