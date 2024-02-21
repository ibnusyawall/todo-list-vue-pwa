<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome 
      :visible="visible"
    />
  </main>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
  mounted() {
    window.addEventListener('get-started', (event) => {
      this.visible = this.toBoolean(event.detail._visible);
    });
  },
  methods: {
    toBoolean: function (value) {
      return (value).toLowerCase() === 'true'
    },
  }
}
</script>

<style scoped>

</style>