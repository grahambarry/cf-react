<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <div class="currency-flag" :class="'currency-flag-' + selected.toLowerCase()"></div>
      <div class="label">
        {{ selected.toUpperCase() }}
      </div>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div class="item" v-for="(currency, key) in availableCurrencies"
           :key="key"
           @click="
              selected = key;
              open = false;
              $emit('select', key);
           ">
        <div class="currency-flag" :class="'currency-flag-' + key.toLowerCase()"></div>
        <div class="label">
          {{ key }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CurrencySelect',
  props: {
    currencies: {
      type: Object,
      default: {},
    },
    currency: {
      type: String,
      required: false,
      default: 'eur',
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.currency
        ? this.currency
        : this.currencies.length > 0
        ? this.currencies[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("select", this.selected);
  },
  computed: {
    availableCurrencies () {
      return this.currencies
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  @import '../../assets/stylesheets/currency_flags';
  .custom-select {
    box-sizing: border-box;
    position: relative;
    width: 90px;
    text-align: left;
    outline: none;
    font-family: $PG-Bold;
    font-size: 16px;
    height: 47px;
    line-height: 47px;
    .currency-flag {
      width: 21px;
      height: 21px;
      min-width: 21px;
      min-height: 21px;
      border-radius: 50%;
      background-position: center;
    }
    .label {
      margin-left: 9px;
      padding-right: 13px;
      width: 34px;
    }
  }

  .custom-select .selected {
    @extend %amm-flex-row;
    justify-content: flex-start;
    padding-left: 13px;
    align-items: center;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 24px 4px 4px 24px;
    border: 1px solid #E0E0E0;
    color: $gray-med-1;
    width: 90px;
    height: 47px;
    cursor: pointer;
    user-select: none;
  }

  .custom-select .selected.open {
    border-radius: 24px 4px 0px 0px;
  }

  .custom-select .items {
    background-color: #fff;
    color: $gray-med-1;
    border-radius: 0px 0px 6px 6px;
    font-family: $PG-Medium;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #E0E0E0;
    border-left: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    position: absolute;
    min-height: 47px;
    max-height: 250px;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .custom-select .items .item {
    @extend %amm-flex-row;
    justify-content: flex-start;
    padding-left: 13px;
    align-items: center;
    color: $gray-med-1;
    cursor: pointer;
    user-select: none;
  }

  .custom-select .items div:hover {
    background-color: #FAFDFE;
  }

  .selectHide {
    display: none;
  }
  @media screen and (max-width: $breakpoint-small) {
  }
</style>
