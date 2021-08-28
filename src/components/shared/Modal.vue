<template>
  <transition name="fade" mode="out-in">
    <div v-if="stateModal" 
        class="modal-bg"
        tabindex="0"
        @click="closeModal()">
      <div class="modal-panel" 
           :style="{width: width}">
        <slot name="header"/>
        <slot name="body-modal"/>
        <slot name="actions"/>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'Modal',
  components: {
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: true
    },
    width: {
      type: [String, Number],
      default: '100%'
    }
  },
  data() {
    return {
      stateModal: this.showModal,
    }
  },
  watch: {
    showModal() {
      this.stateModal = this.showModal
    }
  },
  methods: {
    closeModal() {
      event.target.className === 'modal-bg' ? this.$emit('close') : ''
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .modal-bg {
    position: fixed;
    z-index: 20;
    @extend %amm-flex-column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.75);
  }
  .modal-panel {
    z-index: 21;
    @extend %amm-flex-column;
    justify-content: space-between;
    align-items: center;
    min-height: 300px;
    background-color: white;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid $border-gray;
  }
  @media screen and (max-width: $breakpoint-small) {
    .modal-panel {
      width: calc(100% - 20px) !important;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
