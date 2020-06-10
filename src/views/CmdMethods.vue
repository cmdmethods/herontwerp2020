<template>
    <div class="home">
        <Header />
        <section class="main">
            <article class="cmdmethods-info" v-for="cmdmethod in cmdmethods" :key="cmdmethod.id">
                <article clas="intro">
                    <h1>What is CMD Methods?</h1>
                    <p>{{ cmdmethod.intro }}</p>
                </article>
                <article class="strategies">
                    <h2>Five Research Strategies</h2>
                    <p>{{ cmdmethod.strategies }}</p>
                </article>
                <article class="strategy-library">
                    <h3>{{ cmdmethod.library.name }}</h3>
                    <p class="motto">{{ cmdmethod.library.motto }}</p>
                    <p>{{ cmdmethod.library.description.paragraphOne }}</p>
                    <p>{{ cmdmethod.library.description.paragraphTwo }}</p>
                </article>
                <article class="strategy-field">
                    <h3>{{ cmdmethod.field.name }}</h3>
                    <p class="motto">{{ cmdmethod.field.motto }}</p>
                    <p>{{ cmdmethod.field.description.paragraphOne }}</p>
                    <p>{{ cmdmethod.field.description.paragraphTwo }}</p>
                </article>
                <article class="strategy-lab">
                    <h3>{{ cmdmethod.lab.name }}</h3>
                    <p class="motto">{{ cmdmethod.lab.motto }}</p>
                    <p>{{ cmdmethod.lab.description.paragraphOne }}</p>
                    <p>{{ cmdmethod.lab.description.paragraphTwo }}</p>
                </article>
                <article class="strategy-showroom">
                    <h3>{{ cmdmethod.showroom.name }}</h3>
                    <p class="motto">{{ cmdmethod.showroom.motto }}</p>
                    <p>{{ cmdmethod.showroom.description.paragraphOne }}</p>
                    <p>{{ cmdmethod.showroom.description.paragraphTwo }}</p>
                </article>
                <article class="strategy-workshop">
                    <h3>{{ cmdmethod.workshop.name }}</h3>
                    <p class="motto">{{ cmdmethod.workshop.motto }}</p>
                    <p>{{ cmdmethod.workshop.description.paragraphOne }}</p>
                    <p>{{ cmdmethod.workshop.description.paragraphTwo }}</p>
                </article>
                <article class="strategy-stepping-stones">
                    <h3>{{ cmdmethod.steppingStones.name }}</h3>
                    <p class="motto">{{ cmdmethod.steppingStones.motto }}</p>
                    <p>{{ cmdmethod.steppingStones.description.paragraphOne }}</p>
                    <p>{{ cmdmethod.steppingStones.description.paragraphTwo }}</p>
                </article>
                <article class="how-to">
                    <h2>How to use this set</h2>
                    <p>{{ cmdmethod.howTo.text }}</p>
                    <h3>Negative Selection</h3>
                    <ul>
                        <li><span></span>{{ cmdmethod.howTo.negativeSelection.stepOne }}</li>
                        <li><span></span>{{ cmdmethod.howTo.negativeSelection.stepTwo }}</li>
                        <li><span></span>{{ cmdmethod.howTo.negativeSelection.stepThree }}</li>
                    </ul>
                    <h3>Triangulation</h3>
                    <ul>
                        <li><span></span>{{ cmdmethod.howTo.triangulation.stepOne }}</li>
                        <li><span></span>{{ cmdmethod.howTo.triangulation.stepTwo }}</li>
                        <li><span></span>{{ cmdmethod.howTo.triangulation.stepThree }}</li>
                        <li><span></span>{{ cmdmethod.howTo.triangulation.stepFour }}</li>
                    </ul>
                    <h3>Foursome games</h3>
                    <ul>
                        <li>
                            <span>{{ cmdmethod.howTo.foursomeGame.stepOne }}</span>
                        </li>
                        <li>
                            <span>{{ cmdmethod.howTo.foursomeGame.stepTwo }}</span>
                        </li>
                        <li>
                            <span>{{ cmdmethod.howTo.foursomeGame.stepThree }}</span>
                        </li>
                        <li>
                            <span>{{ cmdmethod.howTo.foursomeGame.stepFour }}</span>
                        </li>
                    </ul>
                </article>
            </article>
        </section>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import cmdmethods from '@/data/cmdmethods.json'

export default {
    name: 'What is CMD Methods?',
    components: { Header },
    props: {
        intro: String,
        strategies: String,
        library: String,
        field: String,
        lab: String,
        showroom: String,
        workshop: String,
        steppingStones: String,
        howTo: String
    },
    computed: {
        cmdmethods() {
            return cmdmethods
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
}

article {
    width: 664px;
    font-family: var(--font-body-card);
    color: #414144;
}

h1 {
    text-align: center;
    color: #414144;
    font-size: 42px;
    font-family: var(--font-body-card);
    font-weight: normal;
    margin: 70px 0 50px 0;
}

article > h2 {
    font-size: 32px;
    font-weight: 300;
}

article > h3 {
    font-size: 32px;
    font-weight: 300;
    margin: 0;
}

h2 {
    margin: 15px 0 0 0;
}

p {
    font-size: 18px;
    font-weight: 300;
}

ul {
    list-style-type: decimal;
    padding: 0;
    margin-bottom: 29px;
    list-style-position: inside;
}

li {
    margin-bottom: 13px;
    font-weight: 300;
}

span {
    margin-left: 10px;
}

.cmdmethods-info article {
    margin-bottom: 50px;
}

.cmdmethods-info p:nth-child(1) {
    margin-bottom: 70px;
}

.strategy-library > h3 {
    color: var(--library);
}

.strategy-field > h3 {
    color: var(--field);
}

.strategy-lab > h3 {
    color: var(--lab);
}

.strategy-showroom > h3 {
    color: var(--showroom);
}

.strategy-workshop > h3 {
    color: var(--workshop);
}

.strategy-stepping-stones > h3 {
    color: var(--stepping-stones);
}

.strategy-library .motto {
    color: var(--library);
}

.strategy-field .motto {
    color: var(--field);
}

.strategy-lab .motto {
    color: var(--lab);
}

.strategy-showroom .motto {
    color: var(--showroom);
}

.strategy-workshop .motto {
    color: var(--workshop);
}

.strategy-stepping-stones .motto {
    color: var(--stepping-stones);
}

.motto {
    font-style: italic;
    margin: 5px 0 0 0;
}

.how-to > h3 {
    font-size: 26px;
}

.how-to > p {
    margin-bottom: 31px;
}
</style>
