<template>
  <div>
    <Modal :show-modal.sync="showModal"
           v-on="$listeners"
           width="580px">
      <template #header>
        <div class="header-container">
          <div class="flex-row title">
            <img :src="require(`../../assets/icon-lock.svg`)" class="icon">
            Identity verification required
          </div>
          <div class="flex-row subtitle">
            For your security, we ocassionally require you to verify your identity by 
            entering a code sent to your mobile device.
          </div>
        </div>
      </template>
      <template #body-modal>
        <div class="body-container">
          <VerificationInputs @disable="canVerify = false"
                              @emittedCode="handleVerificationCode"/>
        </div>
      </template>
      <template #actions>
        <div class="actions-container">
          <div class="buttons-wrap">
            <CfButton label="Verify Identity"
                      :disabled="!canVerify"
                      v-on="$listeners"
                      @click="$emit('close')"/>
            <CfButton label="Cancel"
                      secondary
                      class="but-2"
                      v-on="$listeners"
                      @click="$emit('close')"/>
          </div>
          <router-link :to="{ name: 'Transaction info' }" class="link">
            I can’t access this mobile device
          </router-link>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script>

import PromptText from '~components/shared/PromptText.vue'
import Modal from '~components/shared/Modal.vue'
import CfButton from '~components/shared/CfButton.vue'
import VerificationInputs from '~components/shared/VerificationInputs.vue'

export default {
  name: 'VerificationModal',
  components: {
    PromptText,
    Modal,
    CfButton,
    VerificationInputs,
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      canVerify: false,
    }
  },
  computed: {
    showModal: {
      get() {
        return this.show
      },
      set(val) {
        return this.$emit('update:show', val)
      }
    }
  },
  methods: {
    handleVerificationCode(emittedCode) {
      this.canVerify = true
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .header-container {
    padding: 30px 31px 21px 31px;
    @extend %amm-flex-column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    border-bottom: 1px solid $border-gray;
    .flex-row {
      @extend %amm-flex-row;
      width: 100%;
      .icon {
        transform: translate(-4px, -3px);
        margin-right: 6px;
      }
      &.title {
        font-family: $PG-Medium;
        font-size: 18px;
        line-height: 27px;
        color: #768895;
      }
      &.subtitle {
        width: 442px;
        font-family: $PG-Book;
        font-size: 14px;
        line-height: 21px;
        color: #808080;
      }
    }
  }
  .body-container {
    box-sizing: border-box;
    padding: 52px 103px 53px 93px;
    height: 258px;
    @extend %amm-flex-column;
    background-color: #FBFCFC;
    width: 100%;
    flex-grow: 1;
  }
  .actions-container {
    @extend %amm-flex-row;
    align-items: center;
    width: 100%;
    background-color: #EDF0F3;
    height: 90px;
    border-top: 1px solid $border-gray;
    padding: 26px 31px 29px 28px;
    .buttons-wrap {
      @extend %amm-flex-row;
      align-items: center;   
    }
    .but-2 {
      margin-left: 16px;
    }
    .link {
      margin-left: auto;
      font-family: $PG-Medium;
      font-size: 12px;
      line-height: 27px;
      text-decoration: none;
      color: $link-color;

    }
  }
  @media screen and (max-width: $breakpoint-small) {
    .header-container {
      padding: 30px 10px 21px 10px;
      .flex-row {
        &.subtitle {
          width: 100%;
          font-size: 10px;
        }
      }
    }
    .body-container {
      padding: 31px 10px 53px 10px;
    }
    .actions-container {
      padding: 26px 10px 29px 10px;
      flex-flow: column nowrap !important;
      height: auto;
      .link {
        padding-top: 51px;
        margin: 0 auto;
      }
      .buttons-wrap {
        align-items: center;   
      }
    }
  }
</style>
