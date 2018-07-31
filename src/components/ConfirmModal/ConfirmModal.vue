<template>
  <div class="modal-container">
    <b-modal ref="confirmation" hide-footer centered class="bootstrap-modal-wide confirmation-modal nopadding"
             title="Confirmation">
      <div class="modal-content qrcode-modal">
        <div class="tx-info">
          <div class="tx-data tx-from">
            <!-- <img src="~@/assets/images/icons/eth.svg">
            <h3>1.00000 <span>ETH</span></h3> -->
            <div class="address-info">
              <p class="address-title">From Address</p>
              <p>{{from}}</p>
            </div>
          </div>
          <div class="direction">
            <img src="~@/assets/images/icons/right-arrow.svg">
          </div>
          <div class="tx-data tx-to">
            <!-- <img src="~@/assets/images/icons/btc.svg">
            <h3>0.006345 <span>BTC</span></h3> -->
            <div class="address-info">
              <p class="address-title">To Address</p>
              <p>{{to}}</p>
            </div>
          </div>
        </div>
        <div class="detail-info">
          <div class="info">
            <h4>Detail Information</h4>
            <div class="sliding-switch-white">
              <label class="switch">
                <input type="checkbox" v-on:click="modalDetailInformation = !modalDetailInformation">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="expended-info" v-if="modalDetailInformation">
            <div class="grid-block">
              <p>{{$t('interface.txNetworkTitle')}}</p>
              <p>{{$store.state.network.type.name}} by {{$store.state.network.service}}</p>
            </div>
            <div class="grid-block">
              <p>value</p>
              <p>{{value}}</p>
            </div>
            <div class="grid-block">
              <p>Gas Limit</p>
              <p>{{gas}} wei</p>
            </div>
            <div class="grid-block">
              <p>Gas Price</p>
              <p>{{ gasPrice }} gwei</p>
            </div>
            <div class="grid-block">
              <p>Transaction Fee</p>
              <p> {{fee}}</p>
            </div>
            <div class="grid-block">
              <p>Nonce</p>
              <p>{{nonce}}</p>
            </div>
            <div class="grid-block">
              <p>Data</p>
              <p>{{data}}</p>
            </div>
          </div>
        </div>

        <div class="submit-button-container">
          <div class="flex-center-align">
            <div class="button-with-helper">
              <div class="submit-button large-round-button-green-filled clickable" v-on:click="sendTx">
                {{$t('common.confirmSend')}}
              </div>
              <!--<div class="tooltip-box-2">-->
              <!--<b-btn id="exPopover9">-->
              <!--<img class="icon" src="~@/assets/images/icons/qr-code.svg">-->
              <!--</b-btn>-->
              <!--<b-popover target="exPopover9" triggers="hover focus" placement="top">-->
              <!--<div class="qrcode-contents">-->
              <!--<p class="qrcode-title">Scan QR code to send/swap instantly</p>-->
              <!--<div class="qrcode-block">-->
              <!--<qrcode value="Hello, World!" :options="{ size: 100 }"></qrcode>-->
              <!--</div>-->
              <!--<p class="qrcode-helper">What is that?</p>-->
              <!--</div>-->
              <!--</b-popover>-->
              <!--</div>-->
            </div>
          </div>
          <!--<p class="learn-more">Have any issues? <a href="/">Learn more</a></p>-->
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
// eslint-disable-next-line
  const unit = require('ethjs-unit')

export default {
  props: ['fee', 'signedTx', 'data', 'from', 'gas', 'gasPrice', 'nonce', 'to', 'value', 'showSuccess'],
  data () {
    return {
      modalDetailInformation: true
    }
  },
  methods: {
    sendTx () {
      this.sendTransaction(this.signedTx)
      // this.$store.state.web3.eth.sendSignedTransaction(this.signedTx)
      //   .once('transactionHash').then(res => {
      //   console.log('transactionHash', res)
      //   this.$store.dispatch('setAccountNonce', this.nonce + 1)
      //   this.$refs.confirmation.hide()
      //   this.showSuccess()
      //   console.log(res)
      // })
    },
    async sendTransaction (signedTx) {
      const body = {
        jsonrpc: '2.0',
        method: 'eth_sendRawTransaction',
        params: [signedTx],
        id: 0
      }
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
      this.transactionHash = await fetch(this.$store.state.network.url, config)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .catch(err => {
          console.log(err)
        })
      console.log(this.transactionHash)
      if (this.transactionHash.result != null || this.transactionHash.result !== '') {
        this.$store.dispatch('setAccountNonce', this.nonce + 1)
        this.$refs.confirmation.hide()
        this.showSuccess(null, this.transactionHash.result)
      } else {
        let err = 'error'
        if (this.transactionHash.error && this.transactionHash.error.message) {
          err = this.transactionHash.error.message
        }
        this.showSuccess(err, null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "ConfirmModal.scss";
</style>
