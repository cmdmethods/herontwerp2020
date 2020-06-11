<template>
    <div class="home">
        <Header />
        <section class="main">
            <article class="dot-framework" v-for="dotframework in dotframeworks" :key="dotframework.id">
                <h1>What is the {{ dotframework.name }}?</h1>
                <p>{{ dotframework.intro }}</p>
                <article class="innovation-contexts">
                    <h2>Two (plus one) innovation contexts</h2>
                    <p>{{ dotframework.innovationContext.intro }}</p>
                    <ul>
                        <li><span></span>{{ dotframework.innovationContext.one }}</li>
                        <li><span></span>{{ dotframework.innovationContext.two }}</li>
                        <li><span></span>{{ dotframework.innovationContext.three }}</li>
                    </ul>
                    <div class="image-container">
                        <img src="@/assets/dot-framework.png" />
                    </div>
                </article>
                <article class="trade-offs">
                    <h2>Tradeoffs &amp; triangulation</h2>
                    <p>{{ dotframework.tradeOffs.intro }}</p>
                    <h3>Overview or Certainty</h3>
                    <p>{{ dotframework.tradeOffs.one }}</p>
                    <h3>Fit or Expertise</h3>
                    <p>{{ dotframework.tradeOffs.two }}</p>
                    <h3>Inspiration or Data</h3>
                    <p>{{ dotframework.tradeOffs.three }}</p>
                </article>
                <article class="more-info">
                    <h2>Even More Info</h2>
                    <p>{{ dotframework.moreInfo.text }}</p>
                    <ul>
                        <li>
                            <a href="https://www.researchgate.net/publication/272421605_De_methodenkaart_praktijkonderzoek">{{ dotframework.moreInfo.linkOne }}</a>
                        </li>
                        <li>
                            <a href="https://www.researchgate.net/publication/277003225_Proeven_van_Onderzoek_De_Methodenkaart_in_de_Beroepspraktijk_van_ICT_en_Media">{{ dotframework.moreInfo.linkTwo }}</a>
                        </li>
                    </ul>
                </article>
            </article>
        </section>
    </div>
</template>

<script>
import dotframeworks from '@/data/dotframework.json'
import Header from '@/components/Header.vue'

export default {
    name: 'Dot-Framework',
    components: { Header },
    props: {
        name: String,
        intro: String,
        innovationContext: String,
        tradeOffs: String,
        moreInfo: String
    },
    computed: {
        dotframeworks() {
            return dotframeworks
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
}

.main h1 h2 h3 {
    font-family: var(--font-body-card);
}

.main h1 {
    font-size: 42px;
    font-weight: normal;
    margin: 70px 0 50px 0;
    text-align: center;
}

.main h2 {
    font-size: 32px;
    font-weight: 300;
    margin: 0 0 15px 0;
}

.main h3 {
    font-size: 26px;
    font-weight: 300;
    margin: 0 0 15px 0;
}

.main p {
    font-family: var(--font-body-card);
    font-size: 18px;
    color: #414144;
    font-weight: 300;
}

.main ul {
    list-style-position: inside;
    padding: 0;
}

.main span {
    padding-left: 10px;
}

.main li {
    font-family: var(--font-body-card);
    font-size: 18px;
    color: #414144;
    font-weight: 300;
    list-style-type: decimal;
    padding-bottom: 15px;
}

.more-info li {
    list-style-type: none;
}

.main a {
    text-decoration: none;
    color: var(--workshop);
}

.main li:nth-child(3) {
    padding-bottom: 0;
}

.main img {
    display: block;
}

article {
    width: 664px;
}

.image-container {
    width: 625px;
    display: flex;
    justify-content: center;
    margin: 70px 0 70px 0;
}

.innovation-contexts {
    margin-top: 50px;
}

.trade-offs p {
    margin: 0 0 25px 0;
}
</style>
