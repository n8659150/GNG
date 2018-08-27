<template>
  <div class="header" :style="{backgroundImage: 'url(' + borderImg + ')'}">
    <div class="wrap">
      <div class="logo">
        <a href="index.html"><img src="@/assets/logo.png" title="pinbal" /></a>
      </div>
      <div class="nav-icon">
        <a href="#" class="right_bt" id="activator">
          <span> </span>
        </a>
      </div>
      <!-- <div class="box" id="box">
    <div class="box_content">        					                         
    <div class="box_content_center">
      <div class="form_content">
        <div class="menu_box_list">
          <ul>
            <li><a href="#"><span>home</span></a></li>
            <li><a href="#"><span>About</span></a></li>
            <li><a href="#"><span>Works</span></a></li>
            <li><a href="#"><span>Clients</span></a></li>
            <li><a href="#"><span>Blog</span></a></li>
            <li><a href="contact.html"><span>Contact</span></a></li>
            <div class="clear"> </div>
          </ul>
        </div>
        <a class="boxclose" id="boxclose"> <span> </span></a>
      </div>                                  
    </div> 	
  </div> 
  </div>       	   -->
      <div class="top-searchbar">
        <form>
          <input type="text" /><input type="submit" value="" />
        </form>
      </div>
      <div class="userinfo">
        <div class="user">
          <ul>
            <li>
              <a href="#"><img src="@/assets/user-pic.png" title="user-name" />
                <span>Ipsum</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"> </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "GNGHeader",
    data() {
        return {
            borderImg: require("@/assets/border.png")
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
