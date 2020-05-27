<template>
  <div class="home">
    <div class="grid">
      <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :text="card.text"
        :image="card.image"
      />
    </div>
  </div>
</template>

<script>
import cards from "@/data/cards.json";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: { Card },
  computed: {
    cards() {
      return cards;
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
