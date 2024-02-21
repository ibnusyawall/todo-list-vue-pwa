<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld 
        msg="Todo List App"
        :visible="visible"
        @on-close="onClose" 
      />
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: true 
  }),
  mounted() {
    localStorage.setItem('_visible', false)
  },
  methods: {
    onClose() {
      this.visible = !this.visible
      this.$nextTick(() => {
        localStorage.setItem('_visible', true)
        window.dispatchEvent(new CustomEvent('get-started', {
          detail: {
            _visible: localStorage.getItem('_visible')
          }
        }))
      })
    }
  }
}
</script>
<style scoped>
div.container {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  div.container {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  div.container .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
