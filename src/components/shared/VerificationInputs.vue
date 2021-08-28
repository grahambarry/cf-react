<template>
  <div class="wrapper">
    <div class="phone-row">
      <div class="text">
        Enter the code sent via SMS to
        <div class="phone-wrapper">
          <span class="phone code">+353</span>
          <span class="phone number">872251177</span>
        </div>
      </div>
    </div>
    <div class="inputs-row">
      <input v-for="index in digits" 
             :key="index" 
             ref="input" 
             maxlength="1"
             type="tel" 
             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
             required
             @focus="clearValue(index)"
             @input="focusNext(index)">
    </div>
    <div class="alt-actions">
      <div class="action">
        <img :src="require(`../../assets/icon-refresh.svg`)" class="icon">
        Receive a new code
      </div>
      <div class="action">
        <img :src="require(`../../assets/icon-phone.svg`)" class="icon">
        Receive code via call instead
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VerificationInputs',
  components: {
  },
  props: {
    digits: {
      type: Number,
      default: 6
    },
  },
  data() {
    return {
      currentIndex: 0,
      verificationCode:  new Array(this.digits),
    }
  },
  methods: {
    focusNext(index) {
      let val = event.target.value
      index < this.digits ? this.$nextTick(() => this.$refs.input[index].focus()) : ''
      this.pushDigitValue(index, val )
    },
    clearValue(index) {
      event.target.value = ''
      this.pushDigitValue(index, '' )
    },
    pushDigitValue(index, value) {
      this.verificationCode[index - 1] = value
      if (this.verificationCode.findIndex(e => (e === undefined || e === "")) > -1) {
        this.emitDisable()
      } else {
        this.emitCode()
      }
    },
    emitCode() {
      this.$emit('emittedCode', this.verificationCode)
    },
    emitDisable() {
      this.$emit('disable')
    },
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .wrapper {
    @extend %amm-flex-column;
    width: 100%;
    .phone-row {
      @extend %amm-flex-row;
      align-items: flex-start;
      justify-content: flex-start;
      font-family: $PG-Medium;
      font-size: 16px;
      line-height: 29px;
      margin-bottom: 24px;
      .text {
        @extend %amm-flex-row;
        color: #3C454B;
        white-space: nowrap;
        width: 100%;
      }
      .phone-wrapper {
        @extend %amm-flex-row;
        box-sizing: border-box;
        height: 29px;
        background-color: #F4F4F4;
        margin-left: auto;
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid $border-gray;
        padding-right: 2px;
      }
      span.phone {
        background-color: #F4F4F4;
        transform: translateY(-3px);
        color: #999999;
        padding-right: 5px;
        display: block;
        margin-left: 5px;
        height: 33px;
        line-height: 33px;
        &.code {
          display: block;
          margin-left: 5px;
          height: 33px;
          line-height: 33px;
          border-right: 1px solid #DEDDDD;
          background-color: #F2F1F1;
          border-radius: 2px 0px 0px 2px;
        }
        &.number {
          border-left-color: transparent;
        }
      }
    }
    .alt-actions {
      @extend %amm-flex-row;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
    }
    .action {
      @extend %amm-flex-row;
      align-items: flex-start;
      justify-content: flex-start;
      font-family: $PG-Book;
      font-size: 12px;
      line-height: 27px;
      color: #768895;
      .icon {
        margin-right: 4px;
        transform: translateY(4px);
      }
    }
    .inputs-row {
      height: 54px;
      width: 100%;
      box-sizing: border-box;
      @extend %amm-flex-row;
      align-items: center;
      justify-content:  space-between;
      input {
        caret-color: transparent;
        font-family: $PG-Medium;
        box-sizing: border-box;
        color: $black-gray;
        font-size: 28px;
        line-height: 54px;
        box-sizing: border-box;
        width: 54px;
        height: 54px;
        border-radius: 4px;
        border: 1px solid $border-gray;
        text-align: center;
        &:focus {
          border: 1px solid $alt-blue;
          outline: none;
        }
      }
    }
  }
  @media screen and (max-width: $breakpoint-small) {
    .wrapper {
      .text {
        flex-flow: column wrap !important;
        align-items: flex-start;
      }
      .phone-wrapper {
        margin-left: unset !important;
      }
      .phone-row {
        font-size: 13px;
        .alt-actions {
          flex-flow: column wrap;
          align-items: flex-start;
        }
      }
      .inputs-row {
        .inputs-row {
          margin-top: 31px;
        }
        input {
          padding-left: 0px;
          padding-right: 0px;
          font-size: 21px;
          width: 16%;
        }
      }
      .alt-actions {
        flex-flow: column wrap !important;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        .action {
          margin-top: 9px;
          font-size: 11px;
        }
      }
    }
  }
</style>
