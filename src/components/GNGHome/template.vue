<template>
    <div class="fox" id="fox" style="width:90%;margin-left:auto;margin-right:auto;">
        <div class="imgBox" v-for="(img,key) in imgsArr" :key="key">
            <img :src="img.src" />
        </div>
    </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
    name: "GNGHome",
    data() {
        return {
            imgsArr: [
                {
                    src: require("@/assets/gallery/01.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/02.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/03.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/04.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/05.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/06.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/07.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/08.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/09.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/10.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/11.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/12.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/13.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/14.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/15.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/16.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/17.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/18.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/19.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/20.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/01.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/13.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/09.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/26.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/24.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/22.jpg"),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字"
                },
                {
                    src: require("@/assets/gallery/17.jpg"),
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
<style>
* {
    margin: 0;
    padding: 0;
}
.fox {
    display: flex;
    flex-wrap: wrap;
    margin-top: 9em;
}
.fox:after {
    content: "";
    flex-grow: 99999;
}
.imgBox {
    flex-grow: 1;
    margin-right: 4px;
}
.imgBox img {
    width: auto;
    height: 245px;
    object-fit: cover;
    min-width: 100%;
}

.imgBox img:hover {
    opacity: 0.82;
}
</style>
