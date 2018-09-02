<template>
  <div class="header" :style="{backgroundImage: 'url(' + borderImg + ')'}">
    <div class="wrap" style="display:flex;">
     <div class="logo">
        <img src="@/assets/logo.png" title="KJJ" />
      </div>
      <div class="top-searchbar">
        <form>
          <input type="text" placeholder="请输入知乎问题id进行搜索" /><input type="submit" value="" :style="{backgroundImage: 'url(' + searchIcon + ')'}" />
        </form>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
    name: "GNGHeader",
    data() {
        return {
            borderImg: require("@/assets/border.png"),
            searchIcon: require("@/assets/search-icon.png"),
            deviceInfo:window.navigator.userAgent
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
