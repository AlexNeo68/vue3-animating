<template>
  <div>
    <div>
      <img class="runner first" src="../assets/runner.png" alt="runner" />
      <img class="runner second" src="../assets/runner.png" alt="runner" />
      <img class="runner third" src="../assets/runner.png" alt="runner" />
    </div>
    <div class="timer">
      {{ timer }}
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      timer: 5
    }
  },
  mounted() {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    tl.to('.first', { delay: 5, duration: 2, x: 700 })
    tl.to('.second', { duration: 2, x: 700 }, '<.5')
    tl.to('.third', { duration: 2, x: 700 }, '<.5')
    setInterval(() => {
      if (this.timer > 0) {
        this.timer--
      } else {
        this.timer = 5
      }
    }, 1000)
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>
