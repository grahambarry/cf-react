<template>
  <ValidationProvider ref="provider" v-slot="{errors}" :name="validationName || label" :rules="rules" :immediate="immediate" :mode="mode" slim>
    <div class="a-input amm-flex-1" :class="{'is-disabled': disabled, 'is-compact': compact}">
      <div
        :class="`amm-flex pos-relative ${!!errors.length || status ? 'has-status padding-bottom-17':''} ${status ? `is-${status.type}`:''} ${clear ? 'is-clear':''} ${highlight ? 'is-highlighed':''} ${!label ? 'has-label':''}`">
        <div class="a-input-container amm-flex amm-flex-1 flex-align-center pos-relative">
          <slot/>
          <div class="amm-flex amm-flex-1 pos-relative wrap-target">
            <input
              ref="field"
              v-bind="$attrs"
              :type="type"
              :placeholder="placeholder"
              :value="value"
              :disabled="disabled"
              :readonly="readonly"
              :class="['input amm-flex-1', {'has-placeholder': placeholder.length > 1, capitalize}, inputClass]"
              v-on="listeners"
              @focus="onFocus">
            <label v-if="label" class="a-label">
              {{ label }}
            </label>
          </div>
        </div>
        <ErrorMessage v-if="!!errors.length || status" :message="message"/>
      </div>
    </div>
  </ValidationProvider>
</template>

<script>
import AutoFocusMixin from '~components/shared/AutoFocusMixin'
import ValidationMixin from '~mixins/ValidationMixin'

export default {
  mixins: [AutoFocusMixin, ValidationMixin],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: undefined
    },
    clear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ' '
    },
    readonly: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: Boolean,
      default: false
    },
    capitalize: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    inputClass: {
      type: String,
      default: undefined
    }
  },
  computed: {
    listeners() {
      const vm = this
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value) // To use v-model without accessing event.target
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  @import 'app/assets/stylesheets/design_vars';

  .a-input {
    --height: 50px;
    --label-font-size: 19px;
    margin-bottom: 19px;

    &-container {
      box-sizing: border-box;
      background-color: $limelite1;
      border-radius: $btn-border-radius;
      border: $inputs-border;
      transition: box-shadow 0.3s ease-in-out;
      .is-clear & {
        border-color: transparent;
        .input {
          padding: 0 7px;
        }
      }
      .is-transparent & {
        .input {
          background-color: transparent !important;
        }
      }
      .has-label & {
        .input {
          padding: 0 $padding-12;
        }
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus,
    input:-internal-autofill-selected, 
    input:-webkit-autofill {
      box-sizing: border-box;
      box-shadow: 0 0 0px 1000px $limelite1 inset;
      background-color: $limelite1;
      -webkit-box-shadow: 0 0 0px 1000px $limelite1 inset;
      width: 100%;
    }
    .input {
      font-family: $font-family-1;
      box-sizing: border-box;
      width: 100%;
      height: var(--height);
      padding: $padding-12 $padding-12 0 $padding-12;
      background: transparent;
      color: $navy-blue;
      font-size: 19px;
      line-height: 24px;
      font-weight: 300 !important;
      border-radius: $btn-border-radius !important;
      border: none !important;
      outline: none;
      transition: box-shadow 0.3s ease-in-out;
      cursor: inherit;
      &:-webkit-autofill::first-line {
        font-family: $font-family-1;
        box-sizing: border-box;
        height: var(--height);
        padding: $padding-12 $padding-12 0 $padding-12;
        background: transparent;
        color: $navy-blue;
        font-size: 19px;
        line-height: 24px;
      }
      &:not(:placeholder-shown) + .a-label, &:focus + .a-label, &.has-placeholder + .a-label {
        --label-font-size: 10px;
        line-height: 12px;
        padding-top: 7px;
        top: 0;
        transform: none;
        color: $midgreen;
      }
      &:disabled {
        background-color: var(--input-disabled-color);
        color: $gb-blue !important;
        border-color: var(--input-disabled-color) !important;
        box-shadow: none;
        border: none !important;
      }
      &::placeholder {
        color: $limelite1;
      }
      &::-webkit-input-placeholder {
        color: $limelite1;
      }
      &:-ms-input-placeholder {
        color: $limelite1;
      }
      &::-webkit-calendar-picker-indicator {
        background: none;
      }
      &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type=number] {
        -moz-appearance: textfield;
      }
    }
    .a-label {
      margin: 0;
      position: absolute;
      top: 50%;
      left: $padding-12;
      color: $litegreen;
      font-family: $font-family-1;
      font-size: var(--label-font-size);
      text-transform: capitalize;
      line-height: 46px;
      transform: translateY(-50%);
      transition: all 0.3s ease-in-out;
      pointer-events: none;
    }
    &:focus-within:not(.is-disabled), &:hover:not(.is-disabled) {
      .a-input-container {
        border: 1px solid $limelite2;
        box-shadow: $box-shadow-1;
      }
    }
    .has-status {
      .a-input-container {
        border-color: $amm-red-warning-color;
        border-bottom-right-radius: 0;
      }
      &.is-pending .a-input-container {
        border-color: $amm-orange;
      }
      &.is-success .a-input-container {
        border-color: $amm-green;
      }
    }
    .is-highlighed .a-input-container {
      border-color: $amm-green;
    }
    &.is-compact {
      --height: 34px;
    }
  }
</style>
