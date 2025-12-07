<template>
  <div class="interview">
    <h2>Interviews</h2>
    <div class="row">
      <InterviewItem v-for="item in interviews" v-bind:key="item.id" v-bind:item="item" />
    </div>
    <p v-show="!isEnglish" align="right"><a href="/media">>>> 全てのメデイア掲載を見る</a></p>
    <p v-show="isEnglish" align="right"><a href="/media">>>> See all media articles</a></p>
  </div>
</template>

<style>

</style>

<script>
import InterviewItem from '~/components/profile/InterviewItem.vue'

const interviews = [
  {
    "id": 8,
    "media": "ScanNetSecurity",
    "media_icon": "https://scan.netsecurity.ne.jp/favicon.ico",
    "title" : "夢を売るセキュリティプロダクト Cloudbase のタイムマシン経営戦略 ～ 大峠和基が出発するセキュリティ諸国漫遊の旅",
    "url" : "https://scan.netsecurity.ne.jp/article/2025/11/26/54103.html",
    "image_url" : "https://scan.netsecurity.ne.jp/imgs/p/hJtuSU37jUUtaOmDwCp9jp0KMwUhBQQDAgEA/50877.jpg",
    "date" : "2025.11.26"
  },
  {
    "id": 7,
    "media": "ITmedia NEWS",
    "media_icon": "https://www.itmedia.co.jp/favicon.ico",
    "title" : "「クラウドは人類には早過ぎた」　辻伸弘氏×気鋭エンジニアが語る、リスクの本質",
    "url" : "https://www.itmedia.co.jp/news/articles/2507/15/news003.html",
    "image_url" : "https://image.itmedia.co.jp/news/articles/2507/15/ea1635237_cloudbase-tsuji_01.jpg",
    "date" : "2025.07.15"
  },
  {
    "id": 6,
    "media": "TechTrain",
    "media_icon": "https://techtrain.dev/favicon.ico",
    "title" : "エンジニアが選んだもう一つのキャリア：PMという道のリアル",
    "url" : "https://techtrain.dev/media/articles/6zk9lhi6c",
    "image_url" : "https://techtrain.dev/_next/image?url=https%3A%2F%2Fimages.microcms-assets.io%2Fassets%2Fbd8c4afb4ee8466a9989c560ceea8669%2Fc594a83bf8b145468ce49bc2b3a7ea41%2FPM%25E3%2582%25A4%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%2592%25E3%2582%2599%25E3%2583%25A5%25E3%2583%25BC%25E3%2583%258F%25E3%2582%2599%25E3%2583%258A%25E3%2583%25BC.png&w=1920&q=75",
    "date" : "2025.01.14"
  },
  {
    "id": 5,
    "media": "BuzzFeed",
    "media_icon": "https://www.buzzfeed.com/favicon.ico",
    "title" : "みんな知ってる「Zoomの橋」じゃん！アメリカで「いつもの背景」を探したらバーチャルとリアルが“完全に一致”した",
    "url" : "https://www.buzzfeed.com/jp/harunayamazaki/zoom-bridge",
    "image_url" : "https://img.buzzfeed.com/buzzfeed-static/static/2023-06/20/1/asset/beb66cf30bae/sub-buzz-3899-1687224063-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    "date" : "2023.06.21"
  },
  {
    "id": 4,
    "media": "FastGrow",
    "media_icon": "https://www.fastgrow.jp//assets/favicon-a3a8be5a20d9eb6264fff03b4d7e9f41dd50fbfc42a9c0ec29358194287c12fe.ico",
    "title" : "「パブクラ」×「セキュリティ」は技術者の体幹──次代のエンジニア集団Cloudbaseに訊く、市場価値10xを成す“一挙両得”なキャリア",
    "url" : "https://www.fastgrow.jp/articles/cloudbase-miyagawa-otao-iwai",
    "image_url" : "https://s3.ap-northeast-1.amazonaws.com/prod-fastgrow/uploads/articles/main_img/2271/a7c3b366-9e98-478f-9e2d-be65613d6170.jpg",
    "date" : "2024.03.22"
  },
  {
    "id": 3,
    "media": "アンドエンジニア",
    "media_icon": "https://tenshoku.mynavi.jp/engineer/guide/icon/favicon",
    "title" : "その機能って本当に使うの？」落合陽一の弟子、高専出身の未踏エンジニアが見せるプロダクトへのこだわり。",
    "url" : "https://tenshoku.mynavi.jp/engineer/guide/articles/Xsn9YxEAACUAEB8b",
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
    "media_icon": "https://finders.me/assets/favicon-16x16.png",
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
