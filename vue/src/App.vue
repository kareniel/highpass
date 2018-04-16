<template>
  <div id="app">
    <SettingsPage></SettingsPage>
  </div>
</template>

<script>
import SettingsPage from './pages/settings.page.vue'

export default {
  name: 'app',
  components: {
    SettingsPage
  }
}
</script>

<style>
html, body {
	margin: 0;
	padding: 0;
}
</style>
