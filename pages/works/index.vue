<template>
  <div id="app">
    <MyHeader/>

    <header class="jumbotron">
    　<div class="container">
    　</div>
    </header>

    <section class="container">
      <div>
        <h2>Research</h2>
        <div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[0]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[1]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[2]"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[3]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[4]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[5]"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[6]"/>
            </div>
            <!-- <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[4]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="research[5]"/>
            </div> -->
          </div>
        </div>
      </div>

      <div>
        <h2>Product</h2>
        <div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="product[0]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="product[1]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="product[2]"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="product[3]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="product[4]"/>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h2>Entertainment</h2>
        <div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="entertainment[0]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="entertainment[1]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="entertainment[2]"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="entertainment[3]"/>
            </div>
            <!-- <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="entertainment[4]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="entertainment[5]"/>
            </div> -->
          </div>
        </div>
      </div>

      <!-- <div>
        <h2>Hackathon</h2>
        <div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="hackathon[0]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="hackathon[1]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="hackathon[2]"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="hackathon[3]"/>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div>
        <h2>ArtWorks</h2>
        <div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="artwork[0]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="artwork[1]"/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="artwork[2]"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <Work v-bind:project="artwork[3]"/>
            </div>
          </div>
        </div>
      </div> -->

    </section>
  </div>
</template>

<style>
header.jumbotron {
  background: url("/works/img/jumbotron5.jpg");
  background-position: center 60%;
  background-size: cover;
  margin-bottom: 10px;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
}

header .container {
	margin: 10%;
}

h2 {
    padding: 0px 10px 10px 10px;
    font-size: 22px;
    text-align: center;
    border-bottom: solid 1px #D2D2D2;
    margin-top: 5px;
}

h3 {
    padding: 0px 10px 10px 10px;
    font-size: 16px;
    /*text-align: center;*/
    border-bottom: solid 1px #D2D2D2;
    margin-top: 5px;
}

.navbar {
    margin-bottom: 0;
}

.row {
	margin-left: 1%;
	margin-right: 1%;
	margin-bottom: 1%;
}

.reset {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, "Arial", "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
}
</style>

<script>
import Meta from '~/assets/Meta.js'
import MyHeader from '~/components/MyHeader.vue'
import Work from '~/components/works/Work.vue'

const research = [
  {
    "title" : "Optical Cloaking Display",
    "url" : "cloaking",
    "people" : "6",
    "date" : "2019/01 -",
    "description" : "面対称結像光学系が持つ負の屈折率を用いて光学迷彩 (透明マント)を実現します。",
    "tag" : [
      "SIGGRAPH 2019"
    ]
  },
  {
    "title" : "Fundus imaging using DCRA",
    "url" : "fundus",
    "people" : "4",
    "date" : "2018/12 - 2019/11",
    "description" : "面対称結像光学系を使用して瞳孔位置にカメラを転写することで網膜撮影を行います。",
    "tag" : [
      "SIGGRAPH Asia 2019"
    ]
  },
  {
    "title" : "Make your own Retinal Projector",
    "url" : "retinalprojector",
    "people" : "8",
    "date" : "2017/09 -",
    "description" : "面対称結像光学系を使用して瞳孔位置に光源を転写することで網膜投影を行います。",
    "tag" : [
      "SIGGRAPH 2018"
    ]
  },
  {
    "title" : "Glassbeads Display",
    "url" : "glassbeads",
    "people" : "3",
    "date" : "2017/05 - 2019/07",
    "description" : "半面を鏡でコーティングしたガラスビーズを空中スクリーンとして使用することで，高輝度・広視野角な空中映像を実現します。",
    "tag" : [
      "Media Ambition Tokyo 2018", "SIGGRAPH Asia 2017", "HCII 2019"
    ]
  },
  {
    "title" : "Air Mounted Eyepiece",
    "url" : "airmountedeyepiece",
    "people" : "5",
    "date" : "2017/05 - 2018/08",
    "description" : "面対称結像光学系を用いて空中に仮想レンズを生成し，VR用のHMDと同等の広視野角な拡張現実映像を眼前に提示します。",
    "tag" : [
      "SIGGRAPH 2018", "Augmented Human 2018"
    ]
  },
  {
    "title" : "Light Field Blender",
    "url" : "lightfieldblender",
    "people" : "6",
    "date" : "2017/05 - 2017/11",
    "description" : "面対称結像光学系を用いて空中にレンズアレイを転写し、眼前に被写界深度を伴ったLight Fieldを提示します。",
    "tag" : [
      "SIGGRAPH Asia 2017", "Ars Electronica 2017"
    ]
  },
  {
    "title" : "MistFlow",
    "url" : "mistflow",
    "people" : "2",
    "date" : "2016/7 - 2017/11",
    "description" : "手の姿勢検出を元に変化する霧の形状を推定し，投影される映像と実際の霧スクリーンの流れが自然に一致することを目指したフォグディスプレイを研究開発しました。",
    "tag" : [
      "SIGGRAPH Asia 2017", "情報処理学会インタラクション2017"
    ]
  }
]

const product = [
  {
    "title" : "telorain: SNS向けテロップ自動生成アプリ",
    "url" : "telorain",
    "people" : "2",
    "date" : "2019/03 - 2020/03",
    "description" : "telorainはSNS向けのテロップ付き動画を生成する自動アルゴリズム及びiOSアプリです。",
    "tag" : [
      "未踏"
    ]
  },
  {
    "title" : "Mealie：学食食券オンライン予約システム",
    "url" : "mealie",
    "people" : "4",
    "date" : "2015/11 - 2016/10",
    "description" : "Mealieは教室に備え付けられたタブレット端末から食堂の食券を予約することができるサービスです。遠い食堂まで行く手間を省き，自分の食べたいメニューを確実に予約します。",
    "tag" : [
      "U-22プロコン 経済産業省商務情報政策局長賞"
    ]
  },
  {
    "title" : "Pianist：鍵盤楽器運指練習システム",
    "url" : "pianist",
    "people" : "8",
    "date" : "2014/11 - 2015/10",
    "description" : "PianistはMRデバイスとモーションセンサにより，鍵盤楽器の指運びの練習を支援します。MIDIからの運指情報の自動生成やクラウドを通じた運指情報の共有も可能です。",
    "tag" : [
      "高専プロコン2015 敢闘賞"
    ]
  },
  {
    "title" : "Smart枕",
    "url" : "smartmakura",
    "people" : "3",
    "date" : "2014/03 - 2014/11",
    "description" : "Smart枕はAndroid端末と枕型デバイスが連携する新しいライフハックプロダクトです。枕型デバイスに組み込まれた圧力センサとバイブレーションを用いてユーザを確実に起こすとともに，睡眠情報を記録し，最適な睡眠時間を教えてくれます。",
    "tag" : [
      "パソコン甲子園2014"
    ]
  },
  {
    "title" : "RAZIOくん：ラジオ体操支援システム",
    "url" : "raziokun",
    "people" : "8",
    "date" : "2012/11 - 2013/10",
    "description" : "RAZIOくんはKinectを用いてラジオ体操の採点を行うシステムです。カラオケのように自分のラジオ体操を採点してくれる楽しさと，懐かしみのあるスタンプ機能でモチベーションを保ちつつ，健康を促進します。",
    "tag" : [
      "高専プロコン2013 敢闘賞"
    ]
  }
]

const entertainment = [
  // {
  //   "title" : "ピタゴラメーカー",
  //   "url" : "pitagora",
  //   "people" : "2",
  //   "date" : "2017/12",
  //   "description" : "自分だけのピタゴラスイッチを作って遊ぼう！",
  //   "tag" : []
  // },
  {
    "title" : "Re:ink：干渉可能なプロジェクションマッピング",
    "url" : "reink",
    "people" : "17",
    "date" : "2014/12 - 2015/11",
    "description" : "Re:inkは真っ白になった工場を学園祭の来場者の手によって蘇らせるインスタレーションです。Unityを用いて映像を生成・同期することで，再生するたびに異なるストーリーが展開します。",
    "tag" : []
  },
  {
    "title" : "Blackboard",
    "url" : "blackboard",
    "people" : "2",
    "date" : "2015/12 - 2016/03",
    "description" : "BlackboardはUnityを使用した映像作品です。Unityの物理ベースレンダリングやImage Based Lightingを使用して通常の3DCGソフトに負けないリアルな映像を撮影しました。",
    "tag" : [
      "コンフェス2016 メディア部門1位"
    ]
  },
  {
    "title" : "SpaceWars",
    "url" : "spacewars",
    "people" : "2",
    "date" : "2014/12 - 2015/03",
    "description" : "自ユニットを弾き飛ばして敵ユニットに攻撃します。ユニットはHPが0になるか，ステージから落とされると消滅します。いろいろな戦略を楽しむだけでなく，グラフィクスエフェクトと物理演算による爽快なプレイを楽しむことができます。",
    "tag" : [
      "コンフェス2015 ソフトウェア部門1位"
    ]
  },
  {
    "title" : "大蛇の乱：現実とデジタル世界がリンクしたARアトラクション",
    "url" : "taijyanoran",
    "people" : "15",
    "date" : "2013/12 - 2014/11",
    "description" : "大蛇の乱は，全長2mもある5体の大蛇を複数人のプレイヤーで協力しながら撃破するアトラクション企画です．現実世界とデジタルな世界がARによって結びつきます。",
    "tag" : []
  },
  // {
  //   "title" : "PokeDora",
  //   "url" : "pokedora",
  //   "people" : "1",
  //   "date" : "2013",
  //   "description" : "本来はUIの制作に使用されるSwingを元に簡単にゲームが作れるライブラリを制作しました。また，自作したライブラリを用いてポケモン風のゲームを作りデモを行いました。",
  //   "tag" : []
  // }
]

const hackathon = [
  {
    "title" : "ProjectQuest",
    "url" : "projectquest",
    "people" : "4",
    "date" : "2017/09",
    "description" : "エンジニア+デザイナをマッチングさせ，与えられたシステム開発のお題を一緒に取り組むことで，様々な人と出会いつつ技術を高めることができるWebサービス。",
    "tag" : [
      "レバレジーズ湯けむりハッカソン 優勝"
    ]
  },
  {
    "title" : "WakeUpVoice",
    "url" : "wakeupvoice",
    "people" : "4",
    "date" : "2017/08",
    "description" : "普通の目覚ましでは起きれない人向けの目覚ましアプリです。事前に設定したワードを自らが大きな声で発声し，音声認識により正しいと判断されなければアラームが解除されません。朝から元気に声を出すことで覚醒を促します。",
    "tag" : []
  },
  {
    "title" : "drofie",
    "sub-title" : "シェアドローン自撮りサービス",
    "url" : "drofie",
    "people" : "3",
    "date" : "2016/09",
    "description" : "観光地などに設置されたドローンで空中から自撮りを撮り，旅の思い出を作れるサービス。エンドユーザがアプリを起動すると自動でドローンが指定ポイントまで移動し，カメラの映像をストリーミングしてくれます。",
    "tag" : [
      "サイバーエージェントKyotoHack 特別賞"
    ]
  },
  {
    "title" : "あるせん",
    "url" : "arusen",
    "people" : "3",
    "date" : "2015/11",
    "description" : "高専でありがちな川柳をGoogle Chromeの上から投稿・閲覧・いいねできるChrome拡張機能です。",
    "tag" : [
      "チームラボオンラインハッカソン 優秀賞"
    ]
  }
]

const artwork = [
  {
    "title" : "Artworks2018",
    "url" : "artworks2018",
    "people" : "1",
    "date" : "2018",
    "description" : "Artworks2018",
    "tag" : []
  },
  {
    "title" : "Artworks2015",
    "url" : "artworks2015",
    "people" : "1",
    "date" : "2015",
    "description" : "Artworks2015",
    "tag" : []
  },
  {
    "title" : "Artworks2014",
    "url" : "artworks2014",
    "people" : "1",
    "date" : "2014",
    "description" : "Artworks2014",
    "tag" : []
  },
  {
    "title" : "Artworks2013",
    "url" : "artworks2013",
    "people" : "1",
    "date" : "2013",
    "description" : "Artworks2013",
    "tag" : []
  }
]

export default {
  mixins: [Meta],
  components: {
    MyHeader,
    Work
  },
  data() {
    return {
      meta: {
        title: "Project",
        description: 'Kazuki OTAO Portforlio.',
        type: 'article',
        url: 'https://kazukiotao.com/works/img/jumbotron5.jpg',
        image: 'https://kazukiotao.com/works/img/jumbotron5.jpg',
      },
      research: research,
      product: product,
      entertainment: entertainment,
      hackathon: hackathon,
      artwork: artwork
    }
  },
}
</script>
