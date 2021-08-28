<template>
  <ul class="stepper-container">
    <slot>
      <Step v-for="(step, index) in steps" 
        :key="index"
        :label="step.label"
        :width="stepWidth"/>
    </slot>
    <div class="line-background">
    </div>
  </ul>
</template>

<script>
import Step from '~components/shared/Step.vue'
export default {
  name: 'Stepper',
  components: {
    Step,
  },
  props: {
    steps: {
      type: Array,
      default: [],
    }
  },
  computed: {
    stepWidth() {
      let width = Math.abs(100 / this.steps.length)
      if (window.innerWidth < 1000) {
        width = Math.abs(100 / this.steps.length + 10)
      }
      return width + '%'
    },
  },
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  ul.stepper-container {
    box-sizing: border-box;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    height: 58px;
    width: 100%;
    @extend %amm-flex-row;
    padding: 0px;
    margin: 0px;
    display:inline;
    .line-background {
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 4px;
      width: 100%;
      border-radius: 2px;
      background-color: #E2F2FA;
    }
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  ul.stepper-container::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  ul.stepper-container {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  @media screen and (max-width: $breakpoint-small) {

  }
</style>
