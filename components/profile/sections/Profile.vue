<template>
  <div class="profle">
    <h2>Profile</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-4">
        <Carousel/>
      </div>
      <div class="col-xs-12 col-sm-8">
        <div v-show="!isEnglish">
          <h3>大峠 和基 - おおたお かずき</h3>
          <p>{{ profile.jp }}</p>
          <p align="right"><a href="/profile/resume_2019.pdf" target="_blank">{{detail}} Resume [PDF 51KB] (English)</a></p>
        </div>
        <div v-show="isEnglish">
          <h3>大峠 和基 - Kazuki Otao</h3>
          <p>{{ profile.en }}</p>
          <p align="right"><a href="/profile/resume_2019.pdf" target="_blank">{{detail}} Resume [PDF 51KB]</a></p>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>

<script>
import Carousel from '~/components/profile/Carousel.vue'

const profile = {
  jp: "1996年広島生まれ．筑波大学大学院卒．学生時代からリサーチエンジニアとしてスタートアップ企業の研究論文の執筆と特許の出願に関わる．その後、YouTube向け動画を自動生成するAIを開発しサービス化して起業．それらの業績が評価され、経済産業省所轄の情報処理推進機構より，未踏事業スーパクリエータ認定及び未踏アドバンスト事業イノベータ認定を受ける．",
  en: 'Kazuki Otao was born in Hiroshima in 1996. He graduated from University of Tsukuba. He has been working in publishing research papers and patents for startup companies since his student days. As a student, he developed an AI that automatically generates videos for YouTube, and started a start-up company. For these achievements, he was certified as a "Super Creator" and "Innovator" by the IPA under the Ministry of Economy, Trade and Industry (METI).'
}

export default {
  components: {
    Carousel
  },
  data() {
    return {
      profile: profile,
      detail: ">>>",
    }
  },
  props: [
    'isEnglish'
  ]
}

</script>
