<template>
  <div class="column">
    <div class="line-1">{{ promptA }}</div>
    <div class="line-2">{{ promptB }}</div>
  </div>
</template>
<script>

export default {
  name: 'PromptText',
  components: {
  },
  props: {
    promptA: {
      type: String,
      default: ''
    },
    promptB: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .column {
    margin-top: 41px;
    @extend %amm-flex-column;
  }
  .line-1, .line-2 {
    line-height: 27px;
  }
  .line-1 {
    font-family: $PG-Medium;
    font-size: 18px;
    color: $black-gray;
  }
  .line-2 {
    font-family: $PG-Book;
    font-size: 14px;
    color: #757575;
  }
  @media screen and (max-width: $breakpoint-small) {

  }
</style>
