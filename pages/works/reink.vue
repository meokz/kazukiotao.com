<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
        <p>Scripting / Motion Graphics / Projection Mapping</p>
        <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
        <p>Unity / C# / Blender / MeshWarpServer etc.</p>
        <h3><span class="glyphicon glyphicon-link"></span>Link</h3>
        <p><a href="http://meokz.hatenablog.com/entry/2015/reink" target="_blank">Unityでプロジェクションマッピングをした話 - めおしーえす</a>
        <p><a href="http://maoudamashii.jokersounds.com/">全曲無料・フリー音楽素材/魔王魂</a>（音源を使用させて頂きました）</p>
        <h3><span class="glyphicon glyphicon-flag"></span>Exhibition</h3>
        <p>徳山高専 高専祭, 山口, 2015.10.31-11.1</p>
        <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
        <p><a href="/works/reink/img/img_paper.jpg" target="_blank">工場模型の姿ゲームで変幻, 中国新聞(山口県), 2015.10</a></p>
      </div>
    </div>

    <div class="row">
      <iframe src="//www.slideshare.net/slideshow/embed_code/key/xmg1coWOXaK5zs" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/kaootao/lt-83901478" title="徳山高専での 『機械・情報・建築分野の融合作品』 制作について (春日LT)" target="_blank">徳山高専での 『機械・情報・建築分野の融合作品』 制作について (春日LT)</a> </strong> from <strong><a href="https://www.slideshare.net/kaootao" target="_blank">Kazuki Otao</a></strong> </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/reink/img/img_top.jpg">
          <img class="work_img img-responsive" src="/works/reink/img/img_top.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/reink/img/img4.jpg">
          <img class="work_img img-responsive" src="/works/reink/img/img4.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/reink/img/img2.jpg">
          <img class="work_img img-responsive" src="/works/reink/img/img2.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/reink/img/img3.jpg">
          <img class="work_img img-responsive" src="/works/reink/img/img3.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/reink/img/img_uma.jpg">
          <img class="work_img img-responsive" src="/works/reink/img/img_uma.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/reink/img/img_hashi.jpg">
          <img class="work_img img-responsive" src="/works/reink/img/img_hashi.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/reink/img/img_projection.jpg">
          <img class="work_img img-responsive" src="/works/reink/img/img_projection.jpg" >
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "Re:ink"

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
        description: '徳山高専の機会電気工学科, 情報電子工学科, 土木建築工学科の3つの学科がそれぞれの技術を生かし、1つの作品を創り上げるメイン企画.今年のタイトルは「Re:ink」真っ白になった工場を来場者の手によって蘇らせる企画です。',
        type: 'article',
        url: 'https://kazukiotao.com/works/reink/',
        image: 'https://kazukiotao.com/works/reink/img/img_top.jpg',
      },
      project: {
        "name": "reink",
        "title": title,
        "description_jp": "徳山高専の機会電気工学科, 情報電子工学科, 土木建築工学科の3つの学科がそれぞれの技術を生かし、1つの作品を創り上げるメイン企画. 今年のタイトルは「Re:ink」. 真っ白になった工場を来場者の手によって蘇らせる企画です。本企画はゲームブースとプロジェクションマッピングブースに分かれています。ゲームブースでディジタル体感型ゲームを進めていき、工場のエネルギーとなる「花」を集めます。その成績によってプロジェクションマッピングブースで投影される映像がインタラクティブに変化します。ディジタル体感型ゲームでは、来場者が「ジャンプ」「左右に避ける」「パンチする」などのジェスチャーを行うことでゲームを進めます。Kinectを使用することにより、自身の体を動かしながらゲームを楽しむことが出来ます。プロジェクションマッピングには４台のプロジェクターを使用しており、ネットワーク通信で映像が同期されています。また、インタラクティブ性を持たせるため、映像はリアルタイムにレンダリングされたものを投影しています。プロジェクションマッピングに使用されている工場模型はスチレンボードで作られています。横幅は約３ｍ，奥行き約２m，高さは約1.7mで、設計から制作までを土木建築工学科の学生が担当しました。ゲームを行うことにより集めた「花」は全自動センサ馬車型ロボットが工場模型まで運びます。この馬車ロボットの馬はテオヤンセン機構を応用して動かしています。お腹の下についているセンサで道路のラインに沿って進み、２頭の馬のスピードを変えることで左右に曲がることもできます。ゲームブースとプロジェクションマッピングブースは1/25モデルの高架橋が繋ぎます。この高架橋は設計から制作までを土木建築工学科の学生が担当し、機械電気工学科の学生がLEDで装飾を施しています。自身は工場模型に投影する映像(プログラム)の制作、プロジェクションマッピングのキャリブレーションを担当しました.映像の制作にはUnityが使われており、リアルタイムにレンダリングできること、プログラマブルなことを活かして、ゲームブースの結果に連動したインタラクティブな映像を生み出すことができます. また、ソケット通信を行うことにより、MacbookPro×3とMac mini×1の計4台のPC及びプロジェクターを同期させています. 今年も中国新聞社様に取材をして頂きました.",
        "description_en": "No english description.",
        "youtube": "https://www.youtube.com/embed/tylQ3OqYGl4"
      }
    }
  }
}
</script>
