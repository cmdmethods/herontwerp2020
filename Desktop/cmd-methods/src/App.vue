<template>
    <div id="app">
        <NavBar></NavBar>
        <Footer></Footer>
        <router-view />
    </div>
</template>

<script>
import NavBar from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: { NavBar, Footer }
}
</script>
