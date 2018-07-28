<template>
  <div id="app">
    <md-content>
      <main>
        <router-view></router-view>
      </main>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app{
  text-align: center;
  line-height: 1;
}

</style>
