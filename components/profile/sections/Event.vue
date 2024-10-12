<template>
  <div class="event">
    <a id="event"></a>
    <h2>Event</h2>
    <div>
      <h3>Talk - トークイベント</h3>
      <ol>
        <EventItem v-for="item in talks" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>Presentation - 登壇発表</h3>
      <ol>
        <MediaItem v-for="item in presentations" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>Judge - 審査委員</h3>
      <ol>
        <EventItem v-for="item in judge" v-bind:key="item.id" v-bind:item="item" />
      </ol>
    </div>
  </div>
</template>

<style scoped>
h3 {
  padding-left: 5%;
}

ol {
  padding-left: 7rem;
  padding-right: 1rem;
}
</style>

<script>
import EventItem from '~/components/profile/EventItem.vue'
import MediaItem from '~/components/profile/MediaItem.vue'

const talks = [
  {
    "id": 2,
    "title" : "言語カクテルとエンジニアの人生に触れる夜〜エンジニアからPMへの道のり〜",
    "url" : "https://forkwell.connpass.com/event/297220/",
    "date" : "2023.10.25"
  },
  {
    "id": 1,
    "title" : "高専から筑波大編入で起業 -現役学生起業家によるトークイベント-",
    "url" : "https://stapa0908.peatix.com/",
    "date" : "2020.09.08"
  }
]

const judge = [
{
    "id": 4,
    "title" : "技育展2024 予選大会第2回戦",
    "url" : "https://talent.supporterz.jp/geekten/2024/",
    "date" : "2024.10.12"
  },
  {
    "id": 3,
    "title" : "ひろしまQuest NEO (広島版未踏)",
    "url" : "https://signate.jp/competitions/1199",
    "date" : "2023.11.28"
  },
{
    "id": 2,
    "title" : "技育展2023 ブロック予選",
    "url" : "https://talent.supporterz.jp/geekten/2023/",
    "date" : "2023.08.11"
  },
  {
    "id": 1,
    "title" : "中国地区高専コンピュータフェスティバル2021",
    "url" : "https://www.comfes2021.net/",
    "date" : "2021.03.10"
  },
]

const presentations = [
  {
    "id": 2,
    "title" : "Android/iOSアプリを協調開発するチーム 〜スクラム開発の実践とその先へ〜",
    "url" : "https://droidkaigi.jp/2022/timetable/363652",
    "media_name" : "Droid Kaigi 2022",
    "date" : "2022.10.06"
  },
  {
    "id": 1,
    "title" : "Android/iOSエンジニアがいっしょくたになって、スクラム開発をやろまい ~モバイルアプリ開発特有の改善達を添えて~",
    "url" : "https://confengine.com/conferences/scrum-fest-mikawa-2022/proposal/17192/androidios",
    "media_name" : "Scrum Fest Mikawa 2022",
    "date" : "2022.09.17"
  },
]

export default {
  components: {
    EventItem,
    MediaItem,
  },
  data() {
    return {
      talks: talks,
      judge: judge,
      presentations: presentations,
    }
  }
}
</script>
