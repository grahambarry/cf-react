<template>
  <div>
    <button class="button"
            :class="buttonType"
            :disabled="disabled"
            v-on="$listeners">
      <div class="label">{{ label }}</div>
    </button>
  </div>
</template>
<script>
export default {
  name: 'CfButton',
  components: {
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonType () {
      let type = this.secondary ? 'secondary' : 'primary'
      return type
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';

  button.button {
    height: 49px;
    width: auto;
    min-width: 70px;
    font-family: $PG-Medium;
    line-height: 21px;
    font-size: 16px;
    padding: 15px 18px;
    @extend %amm-flex-row;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #589AB8;
    color: #fff;
    background-color: $link-color;
    text-decoration: none;
    cursor: pointer;
    &:disabled {
      outline: none;
      border: none;
      cursor: default;
      pointer-events: none;
    }
    &.primary {
      background-color: $link-color;
      border: 1px solid #589AB8;
      &:hover {
        background-color: #589BB9;
      }
      &:disabled {
        background-color: #DDF0F9;
        border: 1px solid #D7E8EF;
        &:hover {
          background-color: #DDF0F9;
        }
      }
    }
    &.secondary {
      background-color: #FBFDFD;
      border: 1px solid #EDF0F3;
      color: #768895;
      &:hover {
        border: 1px solid #FBFDFD;
        background-color: #EDF0F3;
      }
      &:disabled {
        background-color: #FDFEFE;
        border: 1px solid #FAFBFB;
        color: #E2E6E9;
        &:hover {
          background-color: #FDFEFE;
        }
      }
    }
  }
  @media screen and (max-width: $breakpoint-small) {

  }
</style>
