<template>
  <div>
    <!-- <button v-on:click="toggle">Japansese / English</button> -->
    <div class="row">
      <div class = "lang-button">
        <LanguageButton v-bind:flag="isEnglish" @on-toggle-change="onIsEnglishChange"/>
      </div>
    </div>

    <Profile v-bind:isEnglish="isEnglish"/>

    <Interview v-bind:isEnglish="isEnglish"/>

    <Link />

    <!-- <Projects v-bind:isEnglish="isEnglish"/> -->

    <Career v-bind:isEnglish="isEnglish"/>

    <Publication v-bind:isEnglish="isEnglish"/>

    <Achievement v-bind:isEnglish="isEnglish"/>

    <Exhibition />

    <Media />

    <TechnicalSkills />

  </div>
</template>

<style>

.lang-button {
  padding: 10px 5px 0px 0px;
  float: right;
}

h2 {
    font-size: 18px;
    padding: 0px 10px 10px 10px;
    text-align: center;
    border-bottom: solid 1px #D2D2D2;
}

h3 { font-size: 16px; }

h4 { font-size: 14px; }

p {
    font-size: 12px;
}

li {
    font-size: 12px;
    margin: 5px;
}

ul { list-style:none; }

</style>

<script>
import LanguageButton from '~/components/LanguageButton.vue'
import Profile from '~/components/profile/sections/Profile.vue'
import Projects from '~/components/profile/sections/Projects.vue'
import Career from '~/components/profile/sections/Career.vue'
import Link from '~/components/profile/sections/Link.vue'
import Publication from '~/components/profile/sections/Publication.vue'
import Exhibition from '~/components/profile/sections/Exhibition.vue'
import Achievement from '~/components/profile/sections/Achievement.vue'
import Media from '~/components/profile/sections/Media.vue'
import TechnicalSkills from '~/components/profile/sections/TechnicalSkills.vue'
import Interview from '~/components/profile/sections/Interview.vue'

export default {
  head () {
    return {
      titleTemplate: null,
      title: '大峠和基 / Kazuki Otao',
    }
  },
  layout: 'base',
  components: {
    LanguageButton,
    Profile,
    Projects,
    Career,
    Link,
    Publication,
    Exhibition,
    Achievement,
    Media,
    TechnicalSkills,
    Interview
  },
  data() {
    return {
      isEnglish: false
    }
  },
  methods: {
    onIsEnglishChange (flag) {
      this.isEnglish = flag
    }
  }
}
</script>

<style>

</style>

