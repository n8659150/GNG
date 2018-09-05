<template>
    <div id="fox" class="fox" style="width:90%;margin-left:auto;margin-right:auto;">
          <!-- <transition-group name="list" tag="div" class="fox"> -->
            <div class="imgBox" v-for="(img,key) in imgsArr" :key="key">
                <img v-lazy="img.src" @click="openImg(img.src)" />
            </div>
         <!-- </transition-group> -->
    </div>
</template>

<script>
import {getImgByQID} from "@/helpers/dataFetch";

export default {
    name: "GNGHome",
    data() {
        return {
            imgsArr: []
        };
    },
    components: {},
    methods: {
        async fetchImg(qid, limit, offset) {
            try {
                let result = await getImgByQID('sisterImg',qid, limit, offset);
                let imgArray = result['data']['imgSrc'];
               for (let img of imgArray){
                   this.imgsArr.push({'src':img});
               }
               console.log(this.imgsArr);
            } catch (e) {
                console.log(e);
            }
        },
        openImg(src) {
            window.open(src);
        }
    },
    mounted(){
        console.log(this.$route.params.questionId);
        this.$route.params.questionId === undefined?this.fetchImg('28997505',18,0):this.fetchImg(this.$route.params.questionId,18,0)
        
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
    margin-top: 7.4em;
}
.fox:after {
    content: "";
    flex-grow: 99999;
}
.imgBox {
    flex-grow: 3;
    margin-right: 4px;
}
@media screen and (max-width: 420px) {
    .imgBox img {
        width: auto;
    }
}
@media screen and (min-width: 421px) and (max-width: 830px) {
    .imgBox img {
        width: 33vw;
        height: 400px;
        object-fit: cover;
        min-width: 100%;
    }   
}

@media screen and (min-width: 831px) {
    .imgBox img {
        width: 25vw;
        height: 400px;
        object-fit: cover;
        min-width: 100%;    
    }   
}
.imgBox img {
    object-fit: cover;
    min-width: 100%;    
} 

.imgBox img:hover {
    opacity: 0.82;
    transform: scale(1.01);
}

</style>
