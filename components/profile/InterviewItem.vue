<template>
  <div class="all col-xs-12 col-sm-6">
    <a class="interview" v-bind:href="item.url" target="_blank">
      <div>
        <img class="img" v-bind:src="item.image_url" />
        <div class="background"></div>
        <div class="info">
          <div class="media">
            <img class="media-icon" v-bind:src="item.media_icon" />
            <p class="media-name">{{ item.media }}</p>
          </div>
          <p class="title">{{ item.title }}</p>
          <p class="date"> {{ item.date }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.all {
  padding: 1.0rem 2.0rem;
}


.interview {
  position: relative;
}

.img {
  object-fit: cover;
  width: 100%;
  height: 200px;
}

.background {
  /* layout */
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color .2s;
}

.background:hover {
   /* color: orange; */
   background-color: rgba(0, 0, 0, 0.5);
}

.info {
  /* layout */
  position: absolute;
  top: 0px;
  padding: 1rem;

  /* ignore mouse event */
  pointer-events: none;
}

.media {
  /* layout */
  display: flex;
  align-items: center;

  padding: 0.2rem 1.0rem;

  /* style */
  background-color: rgba(0, 0, 0, 0.5);;
  border-radius: 10px;
}

.media-icon {
  width: 1rem;
  height: 1rem;
}

.media-name {
  margin: 0rem 0rem 0rem 0.5rem;

  /* font */
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.title {
  padding: 0.2rem;
  margin: 0rem;

  /* font */
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.date {
  padding: 0.2rem;

  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

</style>

<script>
export default {
  props: [
    'item'
  ],
}
</script>
