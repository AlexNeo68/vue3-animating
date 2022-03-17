<template>
  <div class="about">
    <h1>This is a list page</h1>
    <div>
      <input type="text" v-model="contactInput" />
      <button type="button" @click="addContact">Add</button>
      <button type="button" @click="sortContact">Sort</button>
    </div>

    <transition-group name="slide-up" tag="ul" appear="">
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactInput: '',
      contacts: ['Pushkin Alexander', 'Lev Tolstoy', 'Alexander Suvorov']
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.contactInput)
      this.contactInput = ''
    },
    sortContact() {
      this.contacts.sort()
    }
  }
}
</script>
