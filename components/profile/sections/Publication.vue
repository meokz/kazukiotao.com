<template>
  <div class="publication">
    <h2>Publications</h2>
    <div>
      <div>
        <h3 v-show="!isEnglish">書籍</h3>
        <h3 v-show="isEnglish">Book</h3>
        <ol>
          <Project v-for="book in books" v-bind:key="book.title" v-bind:project="book"/>
        </ol>
      </div>
      <div>
        <h3 v-show="!isEnglish">国際会議 - オーラル発表</h3>
        <h3 v-show="isEnglish">International Conference - Oral Presentation</h3>
        <ol>
          <Project v-for="paper in papers" v-bind:key="paper.title" v-bind:project="paper"/>
        </ol>
      </div>
      <div>
        <h3 v-show="!isEnglish">国際会議 - ポスター発表</h3>
        <h3 v-show="isEnglish">International Conference - Posters</h3>
        <ol>
          <Project v-for="poster in posters" v-bind:key="poster.title" v-bind:project="poster"/>
        </ol>
      </div>
      <p v-show="!isEnglish" align="right"><a href="./publication">{{detail}} 全ての出版</a></p>
      <p v-show="isEnglish" align="right"><a href="./publication">{{detail}} All Publications</a></p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin-bottom: 20px;
}
</style>

<script>
import Project from '~/components/profile/ProjectItem.vue'

const books = [
  {
    title: "山本裕紹 監修. 空中ディスプレイの開発と応用展開 (Recent Developments and Prospective Applications of Aerial Display). シーエムシー出版, 2018, 267p. (第Ⅲ編，第9章を分担執筆)",
    url: "https://www.cmcbooks.co.jp/products/detail.php?product_id=5450",
    image_url: "aerialdisplay.jpg",
  }
]

const papers = [
  {
    title: "[Invited] Takanori Koga and <u>Kazuki Otao</u>. 2018. An Interactive Fog Display to Express Adaptive Shape-Changing Flow. In <em>the 25th International Display Workshops</em> (IDW '18).",
    url: "./works/mistflow/",
    image_url: "mistflow.jpg",
  },
  {
    title: "<u>Kazuki Otao</u>, Yuta Itoh, Kazuki Takazawa, Hiroyuki Osone, and Yoichi Ochiai. 2018. Air Mounted Eyepiece: Optical See-Through HMD Design with Aerial Optical Functions. In <em>Proceedings of the 9th Augmented Human International Conference</em> (AH ’18). ACM, New York, NY, USA, Article 1, 7 pages. DOI: https://doi.org/10.1145/3174910.3174911",
    url: "./works/airmountedeyepiece/",
    image_url: "airmountedeyepiece.jpg",
  },
  {
    title: "<u>Kazuki Otao</u>, Yuta Itoh, Hiroyuki Osone, Kazuki Takazawa, Shunnosuke Kataoka, and Yoichi Ochiai. 2017. Light field blender: designing optics and rendering methods for see-through and aerial near-eye display. In <em>SIGGRAPH Asia 2017 Technical Briefs</em> (SA '17). ACM, New York, NY, USA, Article 9, 4 pages. DOI: https://doi.org/10.1145/3145749.3149425",
    url: "./works/lightfieldblender/",
    image_url: "metamateglass.jpg",
  },
]

const posters = [
  {
    title: "Yoichi Ochiai, <u>Kazuki Otao</u>, Yuta Itoh, Shouki Imai, Kazuki Takazawa, Hiroyuki Osone, Atsushi Mori, and Ippei Suzuki. 2018. Make your own Retinal Projector: Retinal Near-Eye Displays via Metamaterials. In <em>SIGGRAPH ’18 Posters</em> (SIGGRAPH ’18). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3230744.3230810",
    url: "./works/retinalprojector",
    image_url: "AMRP.jpg",
  },
  {
    title: "Shinnosuke Ando, <u>Kazuki Otao</u>, Kazuki Takazawa, Yusuke Tanemura, and Yoichi Ochiai. 2017. Aerial image on retroreflective particles. In <em>SIGGRAPH Asia 2017 Posters</em> (SA '17). ACM, New York, NY, USA, Article 7, 2 pages. DOI: https://doi.org/10.1145/3145690.3145730",
    url: "./works/glassbeads",
    image_url: "glassbeads.jpg"
  },
]

export default {
  components: {
    Project
  },
  data() {
    return {
      books: books,
      papers: papers,
      posters: posters,
      detail: ">>>",
    }
  },
  props: [
    'isEnglish'
  ]
}

</script>
