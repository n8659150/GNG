<template>
  <div class="header" :style="{backgroundImage: 'url(' + borderImg + ')'}">
    <div class="wrap" style="display:flex;">
     <div class="logo">
        <img src="@/assets/logo.png" title="KJJ" />
      </div>
      <div class="top-searchbar">
        <form class="search-form">
          <input type="text" v-model="qid" :placeholder="title" v-on:input="checkTitle" />
          <input type="button" value="" :style="{backgroundImage: 'url(' + searchIcon + ')'}" @click="fetchImg(searchId,0,100)" />
        </form>
      </div>
      
    </div>
  </div>
</template>

<script>
import {getImgByQID,getTitleByQID} from "@/helpers/dataFetch";
export default {
    name: "GNGHeader",
    data() {
        return {
            qid:null,
            borderImg: require("@/assets/border.png"),
            searchIcon: require("@/assets/search-icon.png"),
            deviceInfo:window.navigator.userAgent,
            title:'输入知乎问题id进行搜索',
            searchId:0
        };
    },
    methods:{
      checkTitle(){
        if(this.qid.length >= 8) {
          this.searchId = this.qid;
          this.fetchTitle(this.qid);
        }
      },
      async fetchTitle(qid) {
            try {
                let result = await getTitleByQID('sisterTitle',qid);
                this.qid = result['data']['title']
            } catch (e) {
                console.log(e);
            }
        },
      fetchImg(searchId){
        let path = `/${searchId}`;
        this.$router.push({path:path});
      }
      // async fetchImg(qid, limit, offset) {
      //       try {
      //           let result = await getImgByQID('sisterImg',qid, limit, offset);
      //           let imgArray = result['data']['imgSrc'];
      //          for (let img of imgArray){
      //              this.imgsArr.push({'src':img});
      //          }
      //          console.log(this.imgsArr);
      //       } catch (e) {
      //           console.log(e);
      //       }
      //   },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
