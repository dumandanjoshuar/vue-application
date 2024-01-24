<script setup>
import { ref, computed } from 'vue'

const message = ref('')
const counter = ref(0)

const messageUpperCase = computed(() => {
  return message.value.toUpperCase()
})

const messageLowerCase = computed(() => {
  return message.value.toLowerCase()
})

const clearMessage = () => {
  message.value = ''
}

const alertMessage = () => {
  alert(message.value)
}

const handleKeyup = (e) => {
  console.log(e)
  if (e.keyCode === 27) {
    clearMessage()
  } else if (e.keyCode === 123) {
    alertMessage()
  }
}
</script>

<template lang="pug">
q-page(padding)
  button(style="right: 10px;" @click="counter++")
    | click to increment
  button(style="right: 10px;" @click="counter--")
    | click to decrement
  h2 {{ counter }}

  input(v-model="message" @keyup.esc="handleKeyup" @keyup.enter="alertMessage" placeholder="type anything")

  button(@click="clearMessage") Clear

  h5.border-grey(v-if="message.length > 0") {{ message }}
  h6(v-else) No message entered

  p Uppercase message: {{ messageUpperCase }}
  p Lowercase message: {{ messageLowerCase }}
</template>
  


<style>
.border-grey {
  border: 1px solid grey;
}
</style>
  