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
    "id": 5,
    "media": "TechTrain",
    "media_icon": "https://techtrain.dev/favicon.ico",
    "title" : "エンジニアが選んだもう一つのキャリア：PMという道のリアル",
    "url" : "https://techtrain.dev/media/articles/6zk9lhi6c",
    "image_url" : "https://techtrain.dev/_next/image?url=https%3A%2F%2Fimages.microcms-assets.io%2Fassets%2Fbd8c4afb4ee8466a9989c560ceea8669%2Fc594a83bf8b145468ce49bc2b3a7ea41%2FPM%25E3%2582%25A4%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%2592%25E3%2582%2599%25E3%2583%25A5%25E3%2583%25BC%25E3%2583%258F%25E3%2582%2599%25E3%2583%258A%25E3%2583%25BC.png&w=1920&q=75",
    "date" : "2025.01.14"
  },
  {
    "id": 4,
    "media": "Cloudbase | note",
    "media_icon": "https://note.com/favicon.ico",
    "title" : "夢は小説家！？未踏スーパークリエイタが起業を経てCloudbaseに転職した理由",
    "url" : "https://note.com/cloudbase/n/n8480e454d1cf",
    "image_url" : "https://assets.st-note.com/production/uploads/images/103237851/rectangle_large_type_2_e250195c441ae2165de61f6cf5f3cade.png?width=2000&height=2000&fit=bounds&quality=85",
    "date" : "2023.04.20"
  },
  {
    "id": 3,
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
    "id": 1,
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
