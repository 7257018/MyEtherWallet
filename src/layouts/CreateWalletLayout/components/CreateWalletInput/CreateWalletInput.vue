<template>
  <form class="user-input">
    <input type="password" name="password" v-bind:placeholder="ph" v-bind:value="value" v-on:input="updateValue($event.target.value)">
    <p v-show="value.length > 0">{{ $t("strength.title") }} <span :class="strengthClass">{{ strength }}</span></p>
    <button class="next-button large-round-button-green-filled" type="submit" @click.prevent="switcher(param)" :disabled="value.length === 0 && value.length < 8 && strength === ''">
      {{ $t("common.next") }}<img src="~@/assets/images/icons/right-arrow.png">
    </button>
  </form>
</template>

<script>
import zxcvbn from 'zxcvbn'

export default {
  props: ['value', 'switcher', 'param'],
  data () {
    return {
      strength: '',
      strengthClass: 'weak',
      ph: this.$t('createWallet.passwordHint')
    }
  },
  methods: {
    async updateValue (value) {
      let score = await zxcvbn(value).score
      this.$emit('input', value)
      switch (score) {
        case 1:
          this.strength = this.$t('strength.veryWeak')
          this.strengthClass = 'very-weak'
          break
        case 2:
          this.strength = this.$t('strength.weak')
          this.strengthClass = 'weak'
          break
        case 3:
          this.strength = this.$t('strength.strong')
          this.strengthClass = 'strong'
          break
        case 4:
          this.strength = this.$t('strength.veryStrong')
          this.strengthClass = 'very-strong'
          break
        default :
          this.strength = this.$t('strength.veryWeak')
          this.strengthClass = 'very-weak'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "CreateWalletInput.scss";
</style>
