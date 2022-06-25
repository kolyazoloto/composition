<template>
  <div class="categorySlider">
    <h2 class="categorySlider__name">Ongoing</h2>
    <Swiper
      :slides-per-view="8"
      :keyboard="{ enabled: true }"
      :modules="modules"
      class="categorySlider__swiper"
    >
      <swiper-slide v-for="(item, index) in categoryData" :key="index">
        <div class="animeCard">
          <img
            class="animeCard__body"
            :src="'http://shikimori.one' + item.image.original"
          />
        </div>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard } from "swiper";
import "swiper/css";

export default {
  name: "CategorySlider",
  components: { Swiper, SwiperSlide },
  setup() {
    let categoryData = [
      {
        id: 50265,
        name: "Spy x Family",
        russian: "Семья шпиона",
        image: {
          original: "/system/animes/original/50265.jpg?1655921057",
          preview: "/system/animes/preview/50265.jpg?1655921057",
          x96: "/system/animes/x96/50265.jpg?1655921057",
          x48: "/system/animes/x48/50265.jpg?1655921057",
        },
        url: "/animes/50265-spy-x-family",
        kind: "tv",
        score: "9.01",
        status: "ongoing",
        episodes: 12,
        episodes_aired: 11,
        aired_on: "2022-04-09",
        released_on: "2022-06-25",
      },
      {
        id: 43608,
        name: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
        russian: "Госпожа Кагуя: в любви как на войне 3",
        image: {
          original: "/system/animes/original/43608.jpg?1655486756",
          preview: "/system/animes/preview/43608.jpg?1655486756",
          x96: "/system/animes/x96/43608.jpg?1655486756",
          x48: "/system/animes/x48/43608.jpg?1655486756",
        },
        url: "/animes/43608-kaguya-sama-wa-kokurasetai-ultra-romantic",
        kind: "tv",
        score: "8.96",
        status: "ongoing",
        episodes: 12,
        episodes_aired: 11,
        aired_on: "2022-04-09",
        released_on: "2022-06-25",
      },
      {
        id: 50160,
        name: "Kingdom 4th Season",
        russian: "Царство 4",
        image: {
          original: "/system/animes/original/50160.jpg?1654026167",
          preview: "/system/animes/preview/50160.jpg?1654026167",
          x96: "/system/animes/x96/50160.jpg?1654026167",
          x48: "/system/animes/x48/50160.jpg?1654026167",
        },
        url: "/animes/50160-kingdom-4th-season",
        kind: "tv",
        score: "8.82",
        status: "ongoing",
        episodes: 26,
        episodes_aired: 11,
        aired_on: "2022-04-10",
        released_on: null,
      },
      {
        id: 21,
        name: "One Piece",
        russian: "Ван-Пис",
        image: {
          original: "/system/animes/original/21.jpg?1470452690",
          preview: "/system/animes/preview/21.jpg?1470452690",
          x96: "/system/animes/x96/21.jpg?1470452690",
          x48: "/system/animes/x48/21.jpg?1470452690",
        },
        url: "/animes/21-one-piece",
        kind: "tv",
        score: "8.63",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 1022,
        aired_on: "1999-10-20",
        released_on: null,
      },
      {
        id: 44042,
        name: "Holo no Graffiti",
        russian: "Граффити Холо",
        image: {
          original: "/system/animes/original/44042.jpg?1653053591",
          preview: "/system/animes/preview/44042.jpg?1653053591",
          x96: "/system/animes/x96/44042.jpg?1653053591",
          x48: "/system/animes/x48/44042.jpg?1653053591",
        },
        url: "/animes/44042-holo-no-graffiti",
        kind: "ona",
        score: "8.37",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 150,
        aired_on: "2019-05-05",
        released_on: null,
      },
      {
        id: 47194,
        name: "Summertime Render",
        russian: "Летнее время",
        image: {
          original: "/system/animes/original/47194.jpg?1653361795",
          preview: "/system/animes/preview/47194.jpg?1653361795",
          x96: "/system/animes/x96/47194.jpg?1653361795",
          x48: "/system/animes/x48/47194.jpg?1653361795",
        },
        url: "/animes/47194-summertime-render",
        kind: "tv",
        score: "8.34",
        status: "ongoing",
        episodes: 25,
        episodes_aired: 11,
        aired_on: "2022-04-15",
        released_on: null,
      },
      {
        id: 235,
        name: "Detective Conan",
        russian: "Детектив Конан",
        image: {
          original: "/system/animes/original/235.jpg?1647911021",
          preview: "/system/animes/preview/235.jpg?1647911021",
          x96: "/system/animes/x96/235.jpg?1647911021",
          x48: "/system/animes/x48/235.jpg?1647911021",
        },
        url: "/animes/z235-detective-conan",
        kind: "tv",
        score: "8.16",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 1047,
        aired_on: "1996-01-08",
        released_on: null,
      },
      {
        id: 48916,
        name: "Love Live! Nijigasaki Gakuen School Idol Doukoukai 2nd Season",
        russian: "Живая любовь! Клуб идолов старшей школы Нидзигасаки 2",
        image: {
          original: "/system/animes/original/48916.jpg?1651750860",
          preview: "/system/animes/preview/48916.jpg?1651750860",
          x96: "/system/animes/x96/48916.jpg?1651750860",
          x48: "/system/animes/x48/48916.jpg?1651750860",
        },
        url: "/animes/48916-love-live-nijigasaki-gakuen-school-idol-doukoukai-2nd-season",
        kind: "tv",
        score: "7.95",
        status: "ongoing",
        episodes: 13,
        episodes_aired: 12,
        aired_on: "2022-04-02",
        released_on: "2022-06-25",
      },
      {
        id: 49052,
        name: "Ao Ashi",
        russian: "Ао Аси",
        image: {
          original: "/system/animes/original/49052.jpg?1654334056",
          preview: "/system/animes/preview/49052.jpg?1654334056",
          x96: "/system/animes/x96/49052.jpg?1654334056",
          x48: "/system/animes/x48/49052.jpg?1654334056",
        },
        url: "/animes/49052-ao-ashi",
        kind: "tv",
        score: "7.87",
        status: "ongoing",
        episodes: 24,
        episodes_aired: 11,
        aired_on: "2022-04-09",
        released_on: null,
      },
      {
        id: 42745,
        name: "Machikado Mazoku: 2-choume",
        russian: "Городская дьяволица 2",
        image: {
          original: "/system/animes/original/42745.jpg?1655924343",
          preview: "/system/animes/preview/42745.jpg?1655924343",
          x96: "/system/animes/x96/42745.jpg?1655924343",
          x48: "/system/animes/x48/42745.jpg?1655924343",
        },
        url: "/animes/42745-machikado-mazoku-2-choume",
        kind: "tv",
        score: "7.86",
        status: "ongoing",
        episodes: 12,
        episodes_aired: 11,
        aired_on: "2022-04-08",
        released_on: "2022-07-01",
      },
      {
        id: 48438,
        name: "Mahoutsukai no Yome: Nishi no Shounen to Seiran no Kishi",
        russian: "Невеста чародея: Мальчик с Запада и рыцарь горной дымки",
        image: {
          original: "/system/animes/original/48438.jpg?1647916561",
          preview: "/system/animes/preview/48438.jpg?1647916561",
          x96: "/system/animes/x96/48438.jpg?1647916561",
          x48: "/system/animes/x48/48438.jpg?1647916561",
        },
        url: "/animes/48438-mahoutsukai-no-yome-nishi-no-shounen-to-seiran-no-kishi",
        kind: "ova",
        score: "7.81",
        status: "ongoing",
        episodes: 3,
        episodes_aired: 2,
        aired_on: "2021-09-10",
        released_on: "2022-09-10",
      },
      {
        id: 966,
        name: "Crayon Shin-chan",
        russian: "Син-тян",
        image: {
          original: "/system/animes/original/966.jpg?1647910682",
          preview: "/system/animes/preview/966.jpg?1647910682",
          x96: "/system/animes/x96/966.jpg?1647910682",
          x48: "/system/animes/x48/966.jpg?1647910682",
        },
        url: "/animes/966-crayon-shin-chan",
        kind: "tv",
        score: "7.74",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 999,
        aired_on: "1992-04-13",
        released_on: null,
      },
      {
        id: 41595,
        name: "Tiger \u0026 Bunny 2",
        russian: "Тигр и кролик 2",
        image: {
          original: "/system/animes/original/41595.jpg?1649426655",
          preview: "/system/animes/preview/41595.jpg?1649426655",
          x96: "/system/animes/x96/41595.jpg?1649426655",
          x48: "/system/animes/x48/41595.jpg?1649426655",
        },
        url: "/animes/41595-tiger-bunny-2",
        kind: "ona",
        score: "7.65",
        status: "ongoing",
        episodes: 25,
        episodes_aired: 13,
        aired_on: "2022-04-08",
        released_on: null,
      },
      {
        id: 8687,
        name: "Doraemon (2005)",
        russian: "Дораэмон (2005)",
        image: {
          original: "/system/animes/original/8687.jpg?1647922156",
          preview: "/system/animes/preview/8687.jpg?1647922156",
          x96: "/system/animes/x96/8687.jpg?1647922156",
          x48: "/system/animes/x48/8687.jpg?1647922156",
        },
        url: "/animes/8687-doraemon-2005",
        kind: "tv",
        score: "7.61",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 529,
        aired_on: "2005-04-22",
        released_on: null,
      },
      {
        id: 36064,
        name: "Fate/Grand Order",
        russian: "Судьба/Великий приказ: Реклама",
        image: {
          original: "/system/animes/original/36064.jpg?1647911830",
          preview: "/system/animes/preview/36064.jpg?1647911830",
          x96: "/system/animes/x96/36064.jpg?1647911830",
          x48: "/system/animes/x48/36064.jpg?1647911830",
        },
        url: "/animes/36064-fate-grand-order",
        kind: "special",
        score: "7.5",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 27,
        aired_on: "2014-12-27",
        released_on: null,
      },
      {
        id: 49571,
        name: "Tunshi Xingkong 2nd Season",
        russian: "Пожиратель звёзд 2",
        image: {
          original: "/system/animes/original/49571.jpg?1648073143",
          preview: "/system/animes/preview/49571.jpg?1648073143",
          x96: "/system/animes/x96/49571.jpg?1648073143",
          x48: "/system/animes/x48/49571.jpg?1648073143",
        },
        url: "/animes/49571-tunshi-xingkong-2nd-season",
        kind: "ona",
        score: "7.48",
        status: "ongoing",
        episodes: 52,
        episodes_aired: 15,
        aired_on: "2021-12-29",
        released_on: null,
      },
      {
        id: 48675,
        name: "Kakkou no Iinazuke",
        russian: "Сведённые кукушкой",
        image: {
          original: "/system/animes/original/48675.jpg?1653339988",
          preview: "/system/animes/preview/48675.jpg?1653339988",
          x96: "/system/animes/x96/48675.jpg?1653339988",
          x48: "/system/animes/x48/48675.jpg?1653339988",
        },
        url: "/animes/48675-kakkou-no-iinazuke",
        kind: "tv",
        score: "7.47",
        status: "ongoing",
        episodes: 24,
        episodes_aired: 9,
        aired_on: "2022-04-24",
        released_on: null,
      },
      {
        id: 41884,
        name: "Ling Jian Zun 4th Season",
        russian: "Владыка духовного меча 4",
        image: {
          original: "/system/animes/original/41884.jpg?1647923379",
          preview: "/system/animes/preview/41884.jpg?1647923379",
          x96: "/system/animes/x96/41884.jpg?1647923379",
          x48: "/system/animes/x48/41884.jpg?1647923379",
        },
        url: "/animes/41884-ling-jian-zun-4th-season",
        kind: "ona",
        score: "7.4",
        status: "ongoing",
        episodes: 280,
        episodes_aired: 191,
        aired_on: "2020-09-08",
        released_on: null,
      },
      {
        id: 41409,
        name: "Wushen Zhuzai",
        russian: "Повелитель бесстрашного духа",
        image: {
          original: "/system/animes/original/41409.jpg?1647914088",
          preview: "/system/animes/preview/41409.jpg?1647914088",
          x96: "/system/animes/x96/41409.jpg?1647914088",
          x48: "/system/animes/x48/41409.jpg?1647914088",
        },
        url: "/animes/41409-wushen-zhuzai",
        kind: "ona",
        score: "7.36",
        status: "ongoing",
        episodes: 272,
        episodes_aired: 242,
        aired_on: "2020-03-08",
        released_on: null,
      },
      {
        id: 51892,
        name: "Douluo Dalu: Fenghuo Buxi",
        russian: "Боевой континент 13",
        image: {
          original: "/system/animes/original/51892.jpg?1654953041",
          preview: "/system/animes/preview/51892.jpg?1654953041",
          x96: "/system/animes/x96/51892.jpg?1654953041",
          x48: "/system/animes/x48/51892.jpg?1654953041",
        },
        url: "/animes/51892-douluo-dalu-fenghuo-buxi",
        kind: "ona",
        score: "7.36",
        status: "ongoing",
        episodes: 13,
        episodes_aired: 5,
        aired_on: "2022-05-21",
        released_on: "2022-08-13",
      },
      {
        id: 50281,
        name: "Delicious Party♡Precure",
        russian: "Хорошенькое лекарство: Восхитительная вечеринка",
        image: {
          original: "/system/animes/original/50281.jpg?1647805423",
          preview: "/system/animes/preview/50281.jpg?1647805423",
          x96: "/system/animes/x96/50281.jpg?1647805423",
          x48: "/system/animes/x48/50281.jpg?1647805423",
        },
        url: "/animes/50281-delicious-party-precure",
        kind: "tv",
        score: "7.27",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 15,
        aired_on: "2022-02-06",
        released_on: null,
      },
      {
        id: 6149,
        name: "Chibi Maruko-chan (1995)",
        russian: "Малышка Маруко-тян (1995)",
        image: {
          original: "/system/animes/original/6149.jpg?1647911609",
          preview: "/system/animes/preview/6149.jpg?1647911609",
          x96: "/system/animes/x96/6149.jpg?1647911609",
          x48: "/system/animes/x48/6149.jpg?1647911609",
        },
        url: "/animes/6149-chibi-maruko-chan-1995",
        kind: "tv",
        score: "7.26",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 1174,
        aired_on: "1995-01-08",
        released_on: null,
      },
      {
        id: 47405,
        name: "Wanmei Shijie",
        russian: "Безупречный мир",
        image: {
          original: "/system/animes/original/47405.jpg?1647923046",
          preview: "/system/animes/preview/47405.jpg?1647923046",
          x96: "/system/animes/x96/47405.jpg?1647923046",
          x48: "/system/animes/x48/47405.jpg?1647923046",
        },
        url: "/animes/47405-wanmei-shijie",
        kind: "ona",
        score: "7.23",
        status: "ongoing",
        episodes: 78,
        episodes_aired: 64,
        aired_on: "2021-04-23",
        released_on: null,
      },
      {
        id: 36686,
        name: "Hifuu Katsudou Kiroku: The Sealed Esoteric History",
        russian:
          "Запись деятельности клуба Хифу: Запечатанная эзотерическая история",
        image: {
          original: "/system/animes/original/36686.jpg?1647913016",
          preview: "/system/animes/preview/36686.jpg?1647913016",
          x96: "/system/animes/x96/36686.jpg?1647913016",
          x48: "/system/animes/x48/36686.jpg?1647913016",
        },
        url: "/animes/36686-hifuu-katsudou-kiroku-the-sealed-esoteric-history",
        kind: "ova",
        score: "7.22",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 2,
        aired_on: "2015-12-29",
        released_on: null,
      },
      {
        id: 48956,
        name: "Wu Shang Shen Di 2nd Season",
        russian: "Верховный Бог 2",
        image: {
          original: "/system/animes/original/48956.jpg?1648317107",
          preview: "/system/animes/preview/48956.jpg?1648317107",
          x96: "/system/animes/x96/48956.jpg?1648317107",
          x48: "/system/animes/x48/48956.jpg?1648317107",
        },
        url: "/animes/48956-wu-shang-shen-di-2nd-season",
        kind: "ona",
        score: "7.18",
        status: "ongoing",
        episodes: 128,
        episodes_aired: 117,
        aired_on: "2021-05-21",
        released_on: null,
      },
      {
        id: 49570,
        name: "Wu Dong Qian Kun 3rd Season",
        russian: "Переворот военного движения 3",
        image: {
          original: "/system/animes/original/49570.jpg?1653862056",
          preview: "/system/animes/preview/49570.jpg?1653862056",
          x96: "/system/animes/x96/49570.jpg?1653862056",
          x48: "/system/animes/x48/49570.jpg?1653862056",
        },
        url: "/animes/49570-wu-dong-qian-kun-3rd-season",
        kind: "ona",
        score: "7.19",
        status: "ongoing",
        episodes: 12,
        episodes_aired: 9,
        aired_on: "2022-05-01",
        released_on: null,
      },
      {
        id: 40351,
        name: "Pokemon (2019)",
        russian: "Покемон",
        image: {
          original: "/system/animes/original/40351.jpg?1647923167",
          preview: "/system/animes/preview/40351.jpg?1647923167",
          x96: "/system/animes/x96/40351.jpg?1647923167",
          x48: "/system/animes/x48/40351.jpg?1647923167",
        },
        url: "/animes/40351-pokemon-2019",
        kind: "tv",
        score: "7.17",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 115,
        aired_on: "2019-11-17",
        released_on: null,
      },
      {
        id: 42161,
        name: "Poketoon",
        russian: "Покетун",
        image: {
          original: "/system/animes/original/42161.jpg?1648075005",
          preview: "/system/animes/preview/42161.jpg?1648075005",
          x96: "/system/animes/x96/42161.jpg?1648075005",
          x48: "/system/animes/x48/42161.jpg?1648075005",
        },
        url: "/animes/42161-poketoon",
        kind: "ona",
        score: "7.16",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 8,
        aired_on: "2020-06-04",
        released_on: null,
      },
      {
        id: 39638,
        name: "Choujigen Game Neptune The Animation OVA",
        russian: "Альтернативная игра богов: Летние каникулы",
        image: {
          original: "/system/animes/original/39638.jpg?1647199109",
          preview: "/system/animes/preview/39638.jpg?1647199109",
          x96: "/system/animes/x96/39638.jpg?1647199109",
          x48: "/system/animes/x48/39638.jpg?1647199109",
        },
        url: "/animes/39638-choujigen-game-neptune-the-animation-ova",
        kind: "ova",
        score: "7.16",
        status: "ongoing",
        episodes: 3,
        episodes_aired: 1,
        aired_on: "2019-07-08",
        released_on: null,
      },
      {
        id: 40906,
        name: "Dragon Quest: Dai no Daibouken (2020)",
        russian: "Драгон Квест: Приключения Дая",
        image: {
          original: "/system/animes/original/40906.jpg?1651750861",
          preview: "/system/animes/preview/40906.jpg?1651750861",
          x96: "/system/animes/x96/40906.jpg?1651750861",
          x48: "/system/animes/x48/40906.jpg?1651750861",
        },
        url: "/animes/40906-dragon-quest-dai-no-daibouken-2020",
        kind: "tv",
        score: "7.15",
        status: "ongoing",
        episodes: 0,
        episodes_aired: 82,
        aired_on: "2020-10-03",
        released_on: null,
      },
    ];

    onMounted(() => {
      // shikimoriStore.getOneAnimeCategoryData("ongoing");
      console.log(categoryData);
    });

    let modules = [Keyboard];
    return { categoryData, modules };
  },
};
</script>

<style>
/* .animeCard {
  overflow: hidden;
} */
.animeCard {
  width: 150px;
  height: 210px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  outline: solid 0px rgb(249, 249, 249);
  transition: outline 100ms ease-in-out;
}
.categorySlider__swiper .swiper-slide.swiper-slide-active .animeCard {
  /* outline: solid 7px rgb(1, 1, 1); */
  outline: solid 4px rgb(249, 249, 249);
}

.animeCard__title {
  font-size: 20px;
  font-weight: 700;
  word-wrap: normal;
}
.animeCard__body {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.categorySlider {
}
.categorySlider__name {
  position: relative;
  font-size: 30px;
  font-weight: 500;
}
.categorySlider__name::after {
  content: "";
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(45deg, black, transparent);
}
.swiper-slide {
  padding-top: 50px;
  transform: scale(1);
  transform-origin: 50% 60%;
  transition: transform 100ms ease-in-out;
  z-index: 1;
}
.categorySlider__swiper .swiper-slide.swiper-slide-active {
  transform: scale(1.3);
  z-index: 100;
}
.categorySlider__swiper {
  overflow: visible;
}
.categorySlider__swiper .swiper-wrapper {
  margin-left: 37px;
}
</style>
