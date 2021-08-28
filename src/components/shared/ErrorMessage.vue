<template>
  <div class="form-element-msg height-17 amm-flex-row-center" data-cy="alkMsg">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Error'
    }
  }
}
</script>

<style lang='scss' scoped>
  @import 'app/assets/stylesheets/design_vars';

  .form-element-msg {
    --status-color: #{$amm-red-warning-color};
    --bg-color: var(--status-color);
    --color: #fff;
    --padding: 0 17px;

    max-width: 100%;
    padding: var(--padding);
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--bg-color);
    color: var(--color);
    border-radius: 0 0 $btn-border-radius $btn-border-radius;
    font-size: 11px;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    .is-pending & {
      --status-color: #{$amm-orange};
    }
    .is-success & {
      --status-color: #{$amm-green};
    }
  }
</style>
