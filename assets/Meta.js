export default {
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@0meo' },
        { name: 'twitter:title', content: this.meta.title },
        { name: 'twitter:url', content: this.meta.url },
        { name: 'twitter:image', content: this.meta.image },
        { name: 'twitter:description', content: this.meta.description },
      ],
    }
  }
}