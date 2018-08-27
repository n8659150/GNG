<template>
  <div id="app">
    <GNGHeader></GNGHeader>
    <router-view/>
  </div>
</template>

<script>
import GNGHeader from '@/components/GNGHeader/template'
export default {
  name: 'App',
  components:{
    GNGHeader
  }
}
</script>
<style>
</style>
