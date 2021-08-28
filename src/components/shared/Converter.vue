<template>
  <div class="currency-inputs">
    <ConvertInput from 
                  :currencies="currencies"
                  :value="value1"
                  :currency="currency1"
                  v-on="$listeners"/>
    <ConvertInput to 
                  :currencies="currencies"
                  :value="value2"
                  :currency="currency2"
                  v-on="$listeners"/>
    <!-- {{currencies}} -->
  </div>
</template>
<script>

import ConvertInput from '~components/shared/ConvertInput.vue'

export default {
  name: 'Converter',
  components: {
    ConvertInput
  },
  props: {
    value1: {
      type: [String, Number],
      default: 0,
    },
    currency1: {
      type: String,
      default: 'EUR'
    },
    value2: {
      type: [String, Number],
      default: 0,
    },
    currency2: {
      type: String,
      default: 'USD'
    },
    currencies: {
      type: Object,
      default: {},
    }
  },
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .currency-inputs {
    margin-top: 29px;
  }
  @media screen and (max-width: $breakpoint-small) {
  }
</style>
