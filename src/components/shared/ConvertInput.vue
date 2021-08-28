<template>
  <div class="cs-container" :class="{ from, to }">
    <div class="input-col">
      <div class="label">{{label}}</div>
      <div class="input-row">
        <div class="symbol">
          {{mySymbol}}
        </div>
        <CfInput :value="value"
                 :label="label" 
                 v-on="$listeners"
                 autofocus="autofocus"
                 @input="emitValue"/>
      </div>
    </div>
    <CurrencySelect :currency="myCurrency" 
                    :currencies="currencies"
                    v-on="$listeners"
                    class="align-end"
                    @select="emitCurrency"/>
  </div>
</template>
<script>
import CurrencySelect from '~components/shared/CurrencySelect'
import CfInput from '~components/shared/CfInput'
import SymbolLUT from '~components/json/currency_symbols.json'
export default {
  name: 'ConvertInput',
  components: {
    CurrencySelect,
    CfInput,
    SymbolLUT
  },
  props: {
    currencies: {
      type: Object,
      default: {},
    },
    value: {
      type: [String, Number],
      default: 0,
    },
    currency: {
      type: String,
      default: 'EUR'
    },
    from: {
      type: Boolean,
      default: false
    },
    to: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      myValue: this.value,
      myCurrency: this.currency,
      mySymbol: this.symbol,
    }
  },
  methods: {
    emitCurrency (val) {
      this.myCurrency = val
      this.mySymbol = SymbolLUT[val].symbol_native
      this.emitValueAndCurrency()
    },
    emitValue (val) {
      this.myValue = val
      this.emitValueAndCurrency()
    },
    emitValueAndCurrency () {
      this.$emit('emittedValues', {fromTo: this.fromTo, currency: this.myCurrency, value: this.myValue})
    }
  },
  computed: {
    label() {
      let text = 'CURRENCY'
      this.from ? text = 'YOU SEND' : text = 'RECEIVER GETS'
      return text
    },
    fromTo() {
      let status = this.from ? 'from' : 'to'
      return status
    },
  },
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .cs-container {
    @extend %amm-flex-row;
    align-items: center;
    width: 100%;
    height: 98px;
    padding: 0px 25px;
    .label {
      font-family: $PG-Medium;
      font-size: 14px;
      line-height: 28px;
    }
    &.from {
      border-radius: 4px 4px 0px 0px;
      background-color: #FAFDFE;
      border: 1px solid $link-color;
      .label {
        color: $link-color;
      }
    }
    &.to {
      border-radius: 0px 0px 4px 4px;
      background-color: #fff;
      border: 1px solid #E6E6E6;
      border-top: 1px solid transparent;
      .label {
        color: #9E9E9E;
      }
    }
    .align-end {
      margin-left: auto;
    }
    .input-col {
      @extend %amm-flex-column;
    }
    .input-row {
      @extend %amm-flex-row;
      align-items: center;
      line-height: 38px;
      font-size: 28px;
      font-family: $PG-Medium;
    }
    .symbol {
      width: 28px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: $breakpoint-small) {
  }
</style>
