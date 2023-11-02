<template>
  <div class="achievement">
    <h2>Achievements</h2>
    <div>
      <div>
        <!-- <h3 v-show="!isEnglish">顕著な業績</h3> -->
        <h3 v-show="isEnglish">Notable Achievements</h3>
        <ol>
          <li>
            経済産業省 IPA 未踏アドバンスト事業 イノベータ認定 (1000万円). 2020
          </li>
          <li>
            経済産業省 IPA 未踏事業 スーパクリエータ認定. 2020
          </li>
          <li>
            経済産業省 IPA 未踏事業 採択 (230万円). 2019
          </li>
          <li>
            筑波大学 茗渓会賞. 2019
          </li>
          <li>
            TSUKUBA COLLECTION 2018 ミスターキャンパス賞 / 企業賞 (ビフォパ). 2018
          </li>
          <li>
            徳山工業高等専門学校 文化功労賞. 2017
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  components: {
  },
  data() {
    return {
    }
  },
  props: [
    'isEnglish'
  ]
}

</script>
