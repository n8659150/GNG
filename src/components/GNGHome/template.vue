<template>
  <div class="content">
    <div class="wrap">
      <div id="main" role="main">
        <!-- <ul id="tiles"> -->
        <!-- These are our grid blocks -->
        <!-- <li onclick="location.href='single-page.html';">
            <img src="images/img1.jpg" width="200" height="200">
            <div class="post-info">
              <div class="post-basic-info">
                <h3>
                  <a href="#">Animation films</a>
                </h3>
                <span>
                  <a href="#">
                    <label> </label>Movies</a>
                </span>
                <p>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</p>
              </div>
              <div class="post-info-rate-share">
                <div class="rateit">
                  <span> </span>
                </div>
                <div class="post-share">
                  <span> </span>
                </div>
                <div class="clear"> </div>
              </div>
            </div>
          </li>
          <li onclick="location.href='single-page.html';">
            <img src="images/img2.jpg" width="200" height="299">
            <div class="post-info">
              <div class="post-basic-info">
                <h3>
                  <a href="#">Animation films</a>
                </h3>
                <span>
                  <a href="#">
                    <label> </label>Movies</a>
                </span>
                <p>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</p>
              </div>
              <div class="post-info-rate-share">
                <div class="rateit">
                  <span> </span>
                </div>
                <div class="post-share">
                  <span> </span>
                </div>
                <div class="clear"> </div>
              </div>
            </div>
          </li>
          <li onclick="location.href='single-page.html';">
            <img src="images/img3.jpg" width="200" height="214">
            <div class="post-info">
              <div class="post-basic-info">
                <h3>
                  <a href="#">Animation films</a>
                </h3>
                <span>
                  <a href="#">
                    <label> </label>Movies</a>
                </span>
                <p>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</p>
              </div>
              <div class="post-info-rate-share">
                <div class="rateit">
                  <span> </span>
                </div>
                <div class="post-share">
                  <span> </span>
                </div>
                <div class="clear"> </div>
              </div>
            </div>
          </li>
          <li onclick="location.href='single-page.html';">
            <img src="images/img4.jpg" width="200" height="333">
            <div class="post-info">
              <div class="post-basic-info">
                <h3>
                  <a href="#">Animation films</a>
                </h3>
                <span>
                  <a href="#">
                    <label> </label>Movies</a>
                </span>
                <p>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</p>
              </div>
              <div class="post-info-rate-share">
                <div class="rateit">
                  <span> </span>
                </div>
                <div class="post-share">
                  <span> </span>
                </div>
                <div class="clear"> </div>
              </div>
            </div>
          </li> -->
        <!-- </ul> -->
        <vue-waterfall-easy :imgsArr="imgsArr">
          <div class="img-info" slot-scope="props">
            <p class="some-info">第{{props.index+1}}张图片</p>
            <p class="some-info">{{props.value.info}}</p>
          </div>
        </vue-waterfall-easy>
      </div>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
    name: "GNGHome",
    data() {
        return {
            imgsArr: [
                {
                    src: "./static/img1.jpg",
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: "./static/img2.jpg",
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: "./static/img3.jpg",
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: "./static/img4.jpg",
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                }
            ]
        };
    },
    components: {
        vueWaterfallEasy
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
