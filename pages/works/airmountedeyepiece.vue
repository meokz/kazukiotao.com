<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
        <p><a href="http://digitalnature.slis.tsukuba.ac.jp/2017/10/air-mounted-eyepiece/" target="_blank">Air Mounted Eyepiece - Digital Nature Group</a></p>
        <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
        <p><a href="/works/airmountedeyepiece/docs/2018-ah-ame.pdf" target="_blank">Augmented Human 2018 Paper [PDF 4.7MB]</a></p>
        <p><a href="/works/airmountedeyepiece/docs/2018-siggraph-ame.pdf" target="_blank">SIGGRAPH 2018 Two-page Abstract [PDF 2.6MB]</a></p>
        <p><a href="/works/airmountedeyepiece/docs/2017-arxiv-ame.pdf" target="_blank">Arxiv e-Print [PDF 1.2MB]</a></p>

        <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
        <p>[Bachelor Thesis] Optical Design for See-Through Near-Eye Display using Dihedral Corner Reflector Array（Adviser Yoichi Ochiai）</p>
        <p><a href="https://doi.org/10.1145/3214907.3214908" target="_blank"><u>Kazuki Otao</u>, Yuta Itoh, Kazuki Takazawa, Hiroyuki Osone, and Yoichi Ochiai. 2018. Transmissive Mirror Device based Near-Eye Displays with Wide Field of View. In <em>SIGGRAPH ’18 Emerging Technologies</em> (SIGGRAPH ’18). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3214907.3214908</a></p>
        <p><a href="https://doi.org/10.1145/3174910.3174911" target="_blank"><u>Kazuki Otao</u>, Yuta Itoh, Kazuki Takazawa, Hiroyuki Osone, and Yoichi Ochiai. 2018. Air Mounted Eyepiece: Optical See-Through HMD Design with Aerial Optical Functions. In <em>Proceedings of the 9th Augmented Human International Conference</em> (AH ’18). ACM, New York, NY, USA, Article 1, 7 pages. DOI: https://doi.org/10.1145/3174910.3174911</a></p>
        <p><a href="https://arxiv.org/abs/1710.03889" target="_blank">Yoichi Ochiai, <u>Kazuki Otao</u>, Hiroyuki Osone. 2017. Air Mounted Eyepiece: Design Methods for Aerial Optical Functions of Near-Eye and See-Through Display using Transmissive Mirror Device. In <em>ArXiv e-prints</em>. https://arxiv.org/abs/1710.03889</a></p>

        <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
        <p><a href="https://www.moguravr.com/siggraph-2018-e-tech-report-ar-vr/" target="_blank">【SIGGRAPH2018】先端技術コーナーを一挙レポ 日本からも多数出展, https://www.moguravr.com/siggraph-2018-e-tech-report-ar-vr/, Mogura VR, 2018.08.23</a></p>
        <p><a href="http://www.moguravr.com/pixiedusttech-ar/" target="_blank">落合陽一氏ら、AR向け技術を続々発表 キーワードは広視野・透過型, http://www.moguravr.com/pixiedusttech-ar/, Mogura VR, 2017.11.24</a></p>
        <p><a href="http://panora.tokyo/43491/" target="_blank">筑波大デジタルネイチャーグループら、新しい空中映像表示技術「Air Mounted Eyepiece」発表, http://panora.tokyo/43491/, PANORA VR, 2017.10.30</a></p>
        <p><a href="http://shiropen.com/2017/10/27/29009" target="_blank">筑波大学（Digital Nature Group）、広視野角の光学シースルーHMDを実現するための新手法「AME」を論文にて発表。VRクオリティを空中で再現, http://shiropen.com/2017/10/27/29009, Seamless, 2017.10.27</a></p>
      </div>
    </div>

    <div class="row">
      <Video v-bind:url="url" v-bind:frameborder="0"/>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <iframe src="//www.slideshare.net/slideshow/embed_code/key/iYlE6jJTog476t" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/kaootao/air-mounted-eyepiece-augmented-human-2018-96238839" title="Air Mounted Eyepiece (Augmented Human 2018)" target="_blank">Air Mounted Eyepiece (Augmented Human 2018)</a> </strong> from <strong><a href="https://www.slideshare.net/kaootao" target="_blank">Kazuki Otao</a></strong> </div>
      </div>
      <div class="col-xs-12 col-sm-6">
        <iframe src="//www.slideshare.net/slideshow/embed_code/key/Cm65eHpImJrBTv" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/kaootao/transmissive-mirror-device-based-neareye-displays-siggraph-2018-emerging-technologies" title="Transmissive Mirror Device based Near-Eye Displays (SIGGRAPH 2018 Emerging Technologies)" target="_blank">Transmissive Mirror Device based Near-Eye Displays (SIGGRAPH 2018 Emerging Technologies)</a> </strong> from <strong><a href="//www.slideshare.net/kaootao" target="_blank">Kazuki Otao</a></strong> </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'
import Video from '~/components/Video.vue'

const title = "Air Mounted Eyepiece"

export default {
  mixins: [Meta],
  layout: 'project',
  components: {
    WorkPage,
    Video
  },
  data() {
    return {
      meta: {
        title: title,
        description: 'Transmissive Mirror Device based Head-Mounted Display',
        type: 'article',
        url: 'https://kazukiotao.com/works/airmountedeyepiece/',
        image: 'https://kazukiotao.com/works/airmountedeyepiece/img/Image.jpg',
      },
      project: {
        "name": "airmountedeyepiece",
        "title": title,
        "description_jp": "DCRAと単レンズを用いた広視野角ARグラス。Augmented Human 2018にて登壇発表を行いました。SIGGRAPH 2018にてデモンストレーション展示を行いました。Seamless様，PANORA VR様，Mogura VR様に記事を掲載して頂きました。",
        "description_en": "This research presents a Transmissive Mirror Device based Head-Mounted Display. We employ TMD instead of conventional optical elements such as half-mirror, free-from optics, and waveguide. It realizes wide viewing angle because it enabled shorten optical path length between the eyeball and the virtual lens.",
        "youtube": "https://www.youtube.com/embed/fvUzAeQL9uA"
      },
      url: "https://www.youtube.com/embed/Yresz2ERxhs"
    }
  }
}
</script>
