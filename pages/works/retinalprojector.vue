<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
        <p><a href="https://digitalnature.slis.tsukuba.ac.jp/2018/04/air-mount-retinal-projection/" target="_blank">Air Mount Retinal Projection - Digital Nature Group</a></p>
        <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
        <p><a href="/works/retinalprojector/docs/2018-siggraph-etech-retinal.pdf" target="_blank">SIGGRAPH 2018 Two-page Abstract [PDF 2.1MB]</a></p>
        <p><a href="/works/retinalprojector/docs/retinal_s2018_poster_rev4_outlined.pdf" target="_blank">SIGGRAPH 2018 Poster [PDF 4.3MB]</a></p>
        <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
        <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
        <p><a href="https://doi.org/10.1145/3230744.3230810" target="_blank">Yoichi Ochiai, <u>Kazuki Otao</u>, Yuta Itoh, Shouki Imai, Kazuki Takazawa, Hiroyuki Osone, Atsushi Mori, and Ippei Suzuki. 2018. Make your own Retinal Projector: Retinal Near-Eye Displays via Metamaterials. In <em>SIGGRAPH ’18 Posters</em> (SIGGRAPH ’18). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3230744.3230810</a>
        </p>
        <p><a href="https://doi.org/10.1145/3214907.3214910" target="_blank">Yoichi Ochiai, <u>Kazuki Otao</u>, Yuta Itoh, Shouki Imai, Kazuki Takazawa, Hiroyuki Osone, Atsushi Mori, and Ippei Suzuki. 2018. Make your own Retinal Projector: Retinal Near-Eye Displays via Metamaterials. In <em>SIGGRAPH ’18 Emerging Technologies</em> (SIGGRAPH ’18). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3214907.3214910</a></p>
        <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>

        <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
        <p><a href="https://www.moguravr.com/dng-retinal-projector/" target="_blank">注目の網膜投影技術 落合陽一氏らが開発した実機を体験, https://www.moguravr.com/dng-retinal-projector/, Mogura VR, 2018.08.25</a></p>
        <p><a href="https://www.moguravr.com/siggraph-2018-e-tech-report-ar-vr/" target="_blank">【SIGGRAPH2018】先端技術コーナーを一挙レポ 日本からも多数出展, https://www.moguravr.com/siggraph-2018-e-tech-report-ar-vr/, Mogura VR, 2018.08.23</a></p>
        <p><a href="https://shiropen.com/seamless/make-your-own-retinal-projector" target="_blank">筑波大学ら、網膜に画像を直接投影することで、現実空間と仮想オブジェクトの調和を実現する透過型ミラーデバイスを用いたレーザ投影システムを発表, https://shiropen.com/seamless/make-your-own-retinal-projector, Seamless, 2018.06.20</a></p>
        <p><a href="http://www.moguravr.com/pixiedusttech-ar/" target="_blank">落合陽一氏ら、AR向け技術を続々発表 キーワードは広視野・透過型, http://www.moguravr.com/pixiedusttech-ar/, Mogura VR, 2017.11.24</a></p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/retinalprojector/img/Image.jpg">
          <img class="work_img img-responsive" src="/works/retinalprojector/img/Image.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6"></div>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "Air Mount Retinal Projector"

export default {
  mixins: [Meta],
  layout: 'project',
  components: {
    WorkPage
  },
  data() {
    return {
      meta: {
        title: title,
        description: 'Make your own Retinal Projector: Retinal Near-Eye Displays via Metamaterials.',
        type: 'article',
        url: 'https://kazukiotao.com/works/retinalprojector/',
        image: 'https://kazukiotao.com/works/retinalprojector/img/Image.jpg',
      },
      project: {
        "name": "retinalprojector",
        "title": title,
        "description_jp": "面対称結像光学系を使用した網膜投影。SIGGRAPH 2018でポスター発表及びデモンストレーション展示を行いました。Seamless様、Mogura VR様に記事を掲載して頂きました。",
        "description_en": "Retinal projection is required for xR applications that can deliver immersive visual experience throughout the day. However, as the lenses and iris of an eyeball are in front of the retina, which is a limitation of a human eyeball, the proposal of retinal projection is generally fraught with narrow viewing angles and small eyebox problems. Due to these problems, retinal projection displays are still a rare commodity because of their difficulty in optical schematics design. To solve this problem, we introduce novel methods and samples of an optical system for solving the common problems of retinal projection by using the metamaterial mirror (plane symmetric transfer optical system). Using this projection method, the designing of retinal projection becomes easy, and if appropriate optics are available, it would be possible to construct an optical system that allows quick follow-up of retinal projection hardware.",
        "youtube": "https://www.youtube.com/embed/4_jgxx-mV_o"
      }
    }
  }
}
</script>
