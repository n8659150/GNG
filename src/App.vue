<template>
  <div id="app">
    <GNGHeader></GNGHeader>
    <router-view :key="key"/>
  </div>
</template>

<script>
import GNGHeader from '@/components/GNGHeader/template'
export default {
  name: 'App',
  components:{
    GNGHeader
  },
  computed: {
    key() {
        return this.$route.name !== undefined?this.$route.name + new Date(): this.$route + new Date()
    }
 }
}
</script>
<style>
</style>
