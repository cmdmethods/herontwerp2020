<template>
    <div id="app">
        <NavBar></NavBar>
        <router-view />
    </div>
</template>

<script>
import NavBar from '@/components/Nav.vue'

export default {
    components: { NavBar }
}
</script>
