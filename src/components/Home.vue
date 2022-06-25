<template>
  <div class="homeComponent">
    <Swiper
      class="homeComponent__swiper"
      :direction="'vertical'"
      :keyboard="{ enabled: true }"
      :modules="modules"
    >
      <swiper-slide>
        <categorySlider></categorySlider>
      </swiper-slide>
      <swiper-slide>
        <categorySlider></categorySlider>
      </swiper-slide>
      <swiper-slide>
        <categorySlider></categorySlider>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useShikimoriStore } from "../stores/shikimori";
import categorySlider from "./CategorySlider.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard } from "swiper";
import "swiper/css";

export default {
  name: "Home",
  components: {
    categorySlider,
    Swiper,
    SwiperSlide,
  },
  setup() {
    let shikimoriStore = useShikimoriStore();

    let modules = [Keyboard];
    return { modules };
  },
};
</script>

<style>
.homeComponent {
  padding-inline: 100px;
}
.homeComponent__swiper {
  height: 400px;
  /* overflow: visible; */
}
</style>
