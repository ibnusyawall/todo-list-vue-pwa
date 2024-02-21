<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <div class="greetings" :class="{ 'd-none': !visible }">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Simple todo list app with 
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
      <a href="https://vite-pwa-org.netlify.app/" target="_blank" rel="noopener">VIte PWA</a>.
    </h3>
    <div class="flex justify-align-center align-items-center btn-center">
      <button type="button" class="btn btn-outline-success" @click="$emit('onClose')">Lets Start</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.btn-center {
  position: relative;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .btn-center,
  .greetings h3 {
    text-align: left;
  }
}
</style>
