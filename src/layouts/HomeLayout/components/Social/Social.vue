<template>
  <div class="social">
    <div class="wrap">
      <div class="page-container">
        <div class="flex-col-vertical-center content">
          <div class="title">
            <h2>{{ $t("social.title") }}</h2>
            <h5>{{ $t("social.subheading") }}</h5>
          </div>
          <div class="icons">
            <a v-for="(link, index) in links" :href="link.to" target="_blank" :key="link.name + index">
              <div :class="link.name">
                <img :src="link.img">
                <p>{{ link.name | capitalize }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import github from '@/assets/images/icons/github.png'
import bbs from '@/assets/images/icons/bbs.png'
import qq from '@/assets/images/icons/qq.png'
// import slack from '@/assets/images/icons/slack.png'

export default {
  data () {
    return {
      links: [
        {
          img: qq,
          to: 'https://jq.qq.com/?_wv=1027&k=5vG4FaC',
          name: 'QQ'
        },
        {
          img: bbs,
          to: 'https://bbs.bihe.one',
          name: 'BBS'
        },
        {
          img: github,
          to: 'https://github.com/WrBug/MyEtherWallet',
          name: 'github'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "Social.scss";
</style>
