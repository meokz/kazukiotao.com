<template>
  <div class="interview">
    <h2>Interviews</h2>
    <div class="row">
      <InterviewItem v-for="item in interviews" v-bind:key="item.id" v-bind:item="item" />
    </div>
    <p v-show="!isEnglish" align="right"><a href="#media">>>> 全ての記事</a></p>
    <p v-show="isEnglish" align="right"><a href="#media">>>> All Media</a></p>
  </div>
</template>

<style>

</style>

<script>
import InterviewItem from '~/components/profile/InterviewItem.vue'

const interviews = [
  {
    "id": 1,
    "media": "アンドエンジニア",
    "media_icon": "https://and-engineer.com/favicon.png",
    "title" : "その機能って本当に使うの？」落合陽一の弟子、高専出身の未踏エンジニアが見せるプロダクトへのこだわり。",
    "url" : "https://and-engineer.com/articles/Xsn9YxEAACUAEB8b",
    "image_url" : "https://images.prismic.io/and-engineer/202aa149-3e0f-4077-b303-b3851bf920ed_200727_bunner_022_fnl+%281%29.jpg?auto=compress,format",
    "date" : "2020.07.28"
  },
  {
    "id": 2,
    "media": "キャリアハック（CAREER HACK）",
    "media_icon": "https://careerhack.en-japan.com/favicon.ico",
    "title" : "初心者でもYouTube風「テロップ」を簡単に。世界一やさしい動画編集アプリ誕生秘話",
    "url" : "https://careerhack.en-japan.com/report/detail/1403",
    "image_url" : "https://image-careerhack.en-japan.com/1403/ogp_terop.jpg",
    "date" : "2020.06.23"
  },
  {
    "id": 3,
    "media": "FINDERS",
    "media_icon": "https://finders.me/files/site/8ec20f6d2196d404357f43920b982daa_l.ico",
    "title" : "落合陽一の筑波大「デジタルネイチャー研究室」に潜入！人もお金も集まるイノベーションの源泉とは？",
    "url" : "https://finders.me/articles.php?id=804",
    "image_url" : "https://assets.finders.me/uploads/news/dammy/20190320_ochiai_1.jpeg",
    "date" : "2019.03.22"
  },
]

export default {
  components: {
    InterviewItem
  },
  data() {
    return {
      interviews: interviews,
    }
  },
  props: [
    'isEnglish'
  ]
}
</script>
