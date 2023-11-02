<template>
  <div class="competition">
    <h2>Competitions</h2>
    <div>
      <div>
        <h3 v-show="!isEnglish">プログラミングコンテスト</h3>
        <h3 v-show="isEnglish">Programming Contest</h3>
        <ol>
          <Project v-for="contest in contests" v-bind:key="contest.title" v-bind:project="contest"/>
        </ol>
      </div>
      <!-- <div>
        <h3>Hackathon</h3>
        <ol>
          <Project v-for="item in hackathon" v-bind:key="item.title" v-bind:project="item"/>
        </ol>
      </div> -->
      <div>
        <h3 v-show="!isEnglish">その他</h3>
        <h3 v-show="isEnglish">Othres</h3>
        <ol>
          <li>
            第14回データ工学と情報マネジメントに関するフォーラム (DEIM2022), 学生プレゼンテーション賞. 2022
          </li>
          <li>
            サポーターズ主催, 技育展「ビジネス化目指してます」部門, 最優秀賞 (賞金20万円). 2020
          </li>
          <li>
            サイバーエージェント主催, アドテクコンペ～サーバーサイド＆データ分析～, 優勝. 2019
          </li>
          <li>
            レバレジーズ主催, 湯けむりハッカソン HACKERS BATTLE, 優勝. 2017
          </li>
          <li>
            サイバーエージェント主催, KyotoHack, 特別賞. 2016
          </li>
          <li>
            チームラボ主催, チームラボオンラインハッカソン, 優秀賞. 2015
          </li>
          <li>
            中国地区高専コンピュータフェスティバル2014, メディア部門, 最優秀賞. 2014
          </li>
          <li>
            中国地区高専コンピュータフェスティバル2013, ソフトウェア部門, 入賞. 2013
          </li>
          <li>
            中国高専英語暗唱・弁論大会, 暗唱の部, 最優秀章. 2012
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>


<script>
import Project from '~/components/profile/ProjectItem.vue'

const contests = [
  {
    title: "<p>片岡駿之介, <u>大峠和基</u>, 野坂峻大, 伊藤 駿介. 2016</p><p>Mealie -ミライ-</p><p>U-22プログラミング・コンテスト2016, 経済産業省商務情報政策局長賞 / 企業賞 (OBC)</p>",
    url: "./works/mealie/",
    image_url: "mealie.jpg",
  },
  {
    title: "<p><u>大峠和基</u>, 石丸佑香. 2016</p><p>Blackboard</p><p>中国地区高専コンピュータフェスティバル2016, メディア部門, 最優秀賞</p>",
    url: "./works/blackboard/",
    image_url: "blackboard.jpg",
  },
  {
    title: "<p>徳山高専ニューメディア部. 2015</p><p>Pianist―鍵盤楽器運指練習システム―</p><p>全国高等専門学校プログラミングコンテスト, 第26回長野大会, 自由部門, 敢闘賞</p>",
    url: "./works/pianist/",
    image_url: "pianist.jpg",
  },
  {
    title: "<p><u>大峠和基</u>, 石丸佑香. 2015</p><p>SpaceWars</p><p>中国地区高専コンピュータフェスティバル2015, ソフトウェア部門, 最優秀賞</p>",
    url: "./works/spacewars/",
    image_url: "spacewars.jpg",
  },
  {
    title: "<p><u>大峠和基</u>, 片岡駿之介, 安念駿利. 2014</p><p>Smart枕</p><p>第12回全国高等学校パソコンコンクール, パソコン甲子園2014, モバイル部門, 本選出場</p>",
    url: "./works/smartmakura/",
    image_url: "smartmakura.jpg",
  },
  // {
  //   title: "<p><u>大峠和基</u>, 他. 2014</p><p>天樂</p><p>コンピュータフェスティバル2014, メディア部門1位</p>",
  //   url: "http://comfes2014.tct-newmedia.net/",
  //   image_url: "smartmakura.jpg",
  // },
  {
    title: "<p>徳山高専ニューメディア部. 2013</p><p>RAZIOくん―ラジオ体操支援システム―</p><p>全国高等専門学校プログラミングコンテスト, 第24回旭川大会, 課題部門, 敢闘賞</p>",
    url: "./works/raziokun/",
    image_url: "raziokun.jpg",
  },
  // {
  //   title: "<p><u>大峠和基</u>. 2013</p><p>Simple Action</p><p>コンピュータフェスティバル2013, ソフトウェア部門3位</p>",
  //   url: "./",
  //   image_url: "raziokun.jpg",
  // },
]

const hackathon = [
  {
    title: "<p>Next Wave. 2017</p><p><u>Project Quest</u></p><p>湯けむりハッカソン HACKERS BATTLE 優勝</p>",
    url: "./works/projectquest/",
    image_url: "projectquest.jpg",
  },
    {
    title: " <p>やりがい. 2016</p><p><u>drofie</u></p><p>サイバーエージェントKyotoHack 特別賞</p>",
    url: "./works/drofie/",
    image_url: "drofie.jpg",
  },
    {
    title: "<p>Team B. 2015</p><p><u>あるせん</u></p><p>チームラボオンラインハッカソン 優秀賞</p>",
    url: "./works/arusen/",
    image_url: "arusen.jpg",
  },
]

export default {
  components: {
    Project
  },
  data() {
    return {
      contests: contests,
      hackathon: hackathon
    }
  },
  props: [
    'isEnglish'
  ]
}

</script>
