<template>
  <transition-group appear name="rotate">
    <div class="card" v-for="card in cards" :key="card.id">
      <p>{{ card.title }}</p>
    </div>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: 'Could contain anything', id: 123 },
        { title: 'Endless possibilities', id: 456 }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  height: 4em;
  width: 12em;
  border-radius: 1%;
  background-color: #e0e0e0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 1em;
  transform: rotate(5deg);
}
.rotate-enter {
  opacity: 0;
  transform: rotate(0deg);
}
.rotate-enter-active {
  transition: all 0.5s ease-in;
}
</style>
