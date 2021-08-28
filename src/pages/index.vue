<template>
  <div>
    <div v-if="signedIn" ref="scrollContainer" @scroll="throttleScrollThrottled" class="container">
      <div class="left">
        <Stepper :steps="steps"/>
        <div class="wrap-phone">
          <PromptText promptA="Let’s set up your transaction!"
                      promptB="Specify the amount to be sent or received."/>
          <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this 
              information at the moment, please try back later
            </p>
          </section>
          <section v-else>
            <div v-if="loading">Loading...</div>
            <Converter v-if="!loading"
                      :value1="value1"
                      :value2="value2"
                      :currencies="currencies"
                      :currency1="currency1"
                      :currency2="currency2"
                      @emittedValues="setValues"/>
          </section>
          <CfButton label="Next"
                    route="Transaction info"
                    class="cf-button"
                    @click.prevent="showModal = true"/>
          <Footer :links="footerLinks" class="media-lg"/>
        </div>
      </div>
      <div class="right">
        <div class="wrap-phone">
          <div class="fixed-panel">
            <SummaryPanel/>
            <Footer :links="footerLinks" class="media-sm"/>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>You are not signed in.</h1>
    </div>
    <VerificationModal :show.sync="showModal"
                        @close="closeModal"/>
  </div>
</template>
<script>
import Stepper from '~components/shared/Stepper.vue'
import PromptText from '~components/shared/PromptText.vue'
import Converter from '~components/shared/Converter.vue'
import CfButton from '~components/shared/CfButton.vue'
import Footer from '~components/shared/Footer.vue'
import SummaryPanel from '~components/shared/SummaryPanel.vue'
import VerificationModal from '~components/shared/VerificationModal.vue'
import _ from 'lodash'
import axios from 'axios'

export default {
  name: 'TransactionInfo',
  components: {
    Stepper,
    PromptText,
    CfButton,
    Converter,
    Footer,
    SummaryPanel,
    VerificationModal,
  },
  data() {
    return {
      showModal: false,
      currencies: null,
      value1: 0,
      value2: 0,
      currency1: 'EUR',
      currency2: 'USD',
      rate: null,
      loading: true,
      errored: false,
      scrollDelta: 20,
      myLastScrollPos: null,
      topValue: '0px',
      lastScroll: 0,
      currentScroll: 0,
      throttleScrollThrottled: _.throttle(this.throttleScroll, 50),
      myCurrentScrollThrottled: _.throttle(this.myCurrentScroll, 100),
      steps: [
        { 'label': 'Transaction info'},
        { 'label': 'Recipient info'},
        { 'label': 'Make payment'},
      ],
      footerLinks: [
        { 'label': 'Help \& Support'},
        { 'label': 'Legal Stuff'},
      ],

    } 
  },
  created() {
    this.getCurrencies(this.currency1)
  },
  mounted() {
    this.currentScroll = this.$refs.scrollContainer.scrollY
  },
  methods: {
    getCurrencies: function (base_currency) {
      axios
        .get('https://v6.exchangerate-api.com/v6/044666c7ddb71990e9c7ff99/latest/' + `${base_currency}`)
        .then(response => {
          this.currencies = response.data.conversion_rates
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false)
    },
    closeModal() {
      this.showModal = false;
    },
    throttleScroll: function () {
      let initialTopValue = this.topValue
      this.myLastScrollPos = this.myCurrentScroll()
      let myCurrent = this.myCurrentScrollThrottled()
      if (this.myLastScrollPos < 120 || myCurrent < 120 ) {
        this.topValue = '0px'
      }
      else {
        if (myCurrent <= (this.myLastScrollPos - 2)) {
          this.topValue = '-80px'
        }
        if (myCurrent > (this.myLastScrollPos + 2)) {
          this.topValue = '0px'
        }
      }
      initialTopValue != this.topValue ? this.changeTopValue() : null
    },
    myCurrentScroll: function () {
      return this.$refs.scrollContainer.scrollTop
    },
    changeTopValue: function () {
      this.$emit('emitTop', this.topValue)
    },
    setValues: function(val) {
      if (val.fromTo === 'from') {
        this.currency1 = val.currency
        this.value1 = val.value
        this.value2 = (val.value * this.getRate(this.currency1)).toFixed(2)
      }
      else {
        this.currency2 = val.currency
        this.value2 = val.value
        this.value1 = (val.value * this.getRate(this.currency1)).toFixed(2)
      }
    },
    getRate (currency) {
      let rate = this.currencies[currency]
      return rate
    },
  },
  computed: {
    pair() {
      let currencyPair = [this.currency1, this.currency2]
      return currencyPair
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .overflow-x {
    overflow-x: auto;
  }
  .container {
    box-sizing: border-box;
    position: absolute;
    background-color: $body-background;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: 100vh;
    @extend %amm-flex-row;
    .left {
      box-sizing: border-box;
      flex-basis: 59%; // 845px as percentage of 1440px
      padding: ($nav-height + 54px) 53px 225px $document-padding;
      z-index: 2;
    }
    .right {
      position: relative;
      box-sizing: border-box;
      flex-basis: 41%; // 595px as percentage of 1440px
      .fixed-panel {
        position: fixed;
        top: 0px;
        box-sizing: border-box;
        background: $panel-gray;
        border-left: 1px solid $border-gray;
        height: 100vh;
        width: 100%;
        padding-top: $nav-height;
      }
    }
    .cf-button {
      margin-top: 36px;
      display: flex;
      align-items: flex-start;
    }
    .media-sm {
      display: none;
    }
  }
  @media screen and (max-width: $breakpoint-small) {
    .media-sm {
      display: flex;
      margin-bottom: 17px;
    }
    .media-lg {
      display: none !important;
    }
    .container {
      flex-flow: column nowrap !important;
      .wrap-phone {
        padding-left: 17px;
        padding-right: 17px;
      }
      .right {
        .fixed-panel {
          position: relative;
          padding-top: 0px;
          background-color: transparent;
          border-left: none;
          height: auto;
        }
      }
      .left {
        padding-bottom: 54px;
        padding-top: $nav-height + 12px;
      }
      .left, .right {
        width: 100%;
        flex-basis: 100%;
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }
</style>
