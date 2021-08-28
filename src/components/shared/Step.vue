<template>
  <li :style="{width: width, minWidth: width}" class="step-item">
    <router-link :to="{ name: label }" class="nav-link">
      {{stepNumber}}
      <span>{{stepLabel}}</span>
      <div class="active-line"></div>
    </router-link>
  </li>
</template>
<script>

export default {
  name: 'Step',
  props: {
    label: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    stepLabel () {
      let string = `${this.label}`
      return string
    },
    stepNumber () {
      let number = `${"Step " + Math.abs(this.$vnode.key + 1)}`
      return number
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  li.step-item {
    position: relative;
    box-sizing: border-box;
    height: 58px;
    list-style: none;
    display:inline-block;
    padding:0;
    padding-left: 44px;
    .nav-link {
      color: #B0BEC5;
      font-family: $PG-Medium;
      font-size: 12px;
      line-height: 21px;
      text-decoration: none;
      display: block;
      span {
        font-size: 14px;
        display: block;
        white-space: nowrap;
      }
    }
    .active-line {
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 4px;
      width: 100%;
      border-radius: 2px;
      background-color: transparent;
      z-index: 2;
    }
    .nav-link.router-link-active {
      color: $link-color;
      .active-line {
        background-color: $link-color;
      }
    }
  }
  @media screen and (max-width: $breakpoint-small) {
    li.step-item {
      padding-left: 12px;
    }
  }
</style>
