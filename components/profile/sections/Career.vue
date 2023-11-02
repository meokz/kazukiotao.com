<template>
  <div class="carrer">
    <h2>Carrers</h2>
    <div v-show="!isEnglish">
      <h3>職歴</h3>
      <!-- <h4>フルタイム</h4> -->
      <ul>
        <li v-for="item in carrer.work_jp" v-bind:key="item">{{ item }}</li>
      </ul>
      <!-- <h4>個人事業主</h4>
      <ul>
        <li v-for="item in carrer.sidejob_jp" v-bind:key="item">{{ item }}</li>
      </ul> -->
      <!-- <h4>インターン</h4>
      <ul>
        <li v-for="item in carrer.intern_jp" v-bind:key="item">{{ item }}</li>
      </ul> -->
      <h3>学歴</h3>
      <ul>
        <li v-for="item in carrer.academic_jp" v-bind:key="item">{{ item }}</li>
      </ul>
    </div>

    <div v-show="isEnglish">
      <h3>Work Experience</h3>
      <h4>Fulltime Experience</h4>
      <ul>
        <li v-for="item in carrer.work_en" v-bind:key="item">{{ item }}</li>
      </ul>
      <!-- <h4>Side-job Experience</h4>
      <ul>
        <li v-for="item in carrer.sidejob_en" v-bind:key="item">{{ item }}</li>
      </ul> -->
      <h4>Intern</h4>
      <ul>
        <li v-for="item in carrer.intern_en" v-bind:key="item">{{ item }}</li>
      </ul>
      <h3>Academic Background</h3>
      <ul>
        <li v-for="item in carrer.academic_en" v-bind:key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h3 {
  padding-left: 5%;
}

h4 {
  padding-left: 8%;
  font-size: 14px;
}

ul {
  padding-left: 8%;
}
</style>

<script>
const carrer = {
  "academic_jp": [
    "2019/04 - 2022/03 　筑波大学大学院 図書館情報メディア研究科 図書館情報メディア専攻 (指導教官: 佐藤哲司)",
    "2017/04 - 2019/03 　筑波大学 情報学群 情報メディア創成学類 (指導教官: 落合陽一)",
    "2012/04 - 2017/03 　徳山工業高等専門学校 情報電子工学科 (指導教官: 古賀崇了)",
  ],
  "academic_en": [
    "2012/04 - 2017/03 　Department of Computer Science and Electronic Engineering, National Institute of Technology, Tokuyama College. (Takanori Koga, Soft Computing Lab.)",
    "2017/04 - 2019/03. 　College of Media Arts, Science and Technology, School of Informatics, University of Tsukuba (Yoichi Ochiai, Digital Nature Group.)",
    "2019/04 - 2022/03. 　Graduate School of Library, Information and Media Studies, University of Tsukuba (Tetsuji Sato, Content Engineering Lab.)"
  ],
  "work_jp": [
    "2023/01 - present. 　Cloudbase株式会社",
    "2022/04 - 2022/12 　株式会社メルカリ ソフトウェアエンジニア",
    "2020/04 - 2022/03 　Telorain株式会社 代表取締役",
    "2017/09 - 2020/03 　ピクシーダストテクノロジーズ株式会社 リサーチエンジニア",
  ],
  "sidejob_jp": [
    "2020/04 - 2021/01 　株式会社ランドスケイプ 社外CTO",
  ],
  "sidejob_en": [],
  "work_en": [
    "2023/01 - present. 　Cloudbase Inc.",
    "2022/04 - 2022/12 　Mercari Inc. Software Engineer",
    "2020/04 - 2022/03 　Telorain Inc. CEO & Founder",
    "2017/09 - 2020/03 　Pixie Dust Technologies, Inc. Research Engineer",
  ],
  "intern_jp": [
    "2021/10 - 2021/11 　株式会社メルカリ ソフトウェアエンジニア",
    "2019/12 - 2020/01 　株式会社サイバーエージェント AILab リサーチエンジニア",
    "2015/08 - 2015/09 　チームラボ株式会社 インタラクティブチーム エンジニア",
  ],
  "intern_en": [
    "2021/10 - 2021/11 　Mercari Inc. Software Engineer",
    "2019/12 - 2020/01 　CyberAgent, Inc. AILab, Research Engineer",
    "2015/08 - 2015/09 　teamLab Inc. Interactive Team, Engineer",
  ]
}

export default {
  data() {
    return {
      carrer: carrer
    }
  },
  props: [
    'isEnglish'
  ]
}
</script>
