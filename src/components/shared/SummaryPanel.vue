<template>
  <div class="panel-container">
    <div class="strip gray-bg gray-med-1 font-pgm font-size-14 lh-24">
      Sending Details
    </div>
    <div class="strip font-size-14 lh-28 gray-med-1">
      <div class="font-pgb gray-light">
        You Send
      </div>
      <div class="font-pgm">
        $2000.00
      </div>
    </div>
    <div class="strip gray-bg padding-1 gray-med-1 font-pgm font-size-14 lh-24">
      <div class="font-pgm">
        Receiving Details
      </div>
      <div class="flex font-pgb alt-blue font-size-12 lh-28">
        As of right now
        <img :src="require(`../../assets/icon-q.svg`)" class="icon">
      </div>
    </div>
    <div class="summary-details">
      <div class="sub-row">
        <div class="row-label">Rate</div>
        <div class="row-value">0.86022</div>
      </div>
      <div class="sub-row">
        <div class="row-label">Fee</div>
        <div class="row-value">$2.50</div>
      </div>
      <div class="sub-row">
        <div class="row-label">Delivery date</div>
        <div class="row-value">25th November</div>
      </div>
      <div class="sub-row">
        <div class="row-label">Recipient gets</div>
        <div class="row-value gray-med-1">£1717.94</div>
      </div>
    </div>
    <div class="font-pgm justify-center font-size-12 lh-28 amm-orange strip border-alt">
      You save
      <span class="font-pgbold whitespace-pre"> $65.00 </span>
      compared to your bank!
    </div>

  </div>
</template>
<script>

export default {
  name: 'SummaryPanel',
  components: {
  },
  props: {
  },
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .panel-container {
    overflow: hidden;
    margin-top: 60px;
    margin-left: 55px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid $border-gray;
    width: 312px;
    height: auto;
    @extend %amm-flex-column;
    .sub-row {
      width: 100%;
      @extend %amm-flex-row;
      justify-content: space-between;
      align-items: center;
      color: $gray-light;
      .row-label, .row-value {
        font-size: 14px;
        line-height: 31px;
        white-space: nowrap;
      }
      .row-label {
        font-family: $PG-Book;
      }
      .row-value {
        font-family: $PG-Medium;
      }
    }
    .gray-bg {
      background-color: #FAFAFA;
    }
    .strip {
      @extend %amm-flex-row;
      align-items: center;
      justify-content: space-between;
      padding: 14px 21px 14px 20px;
      border-bottom: 1px solid $border-gray;
    }
    .summary-details {
      @extend %amm-flex-column;
      align-items: center;
      justify-content: flex-start;
      padding: 11px 21px 8px 21px;
      border-bottom: 1px solid $border-gray;
    }
    .border-alt {
      border-bottom: none;
    }
    .font-pgm {
      font-family: $PG-Medium;
      white-space: nowrap;
    }
    .font-pgb {
      font-family: $PG-Book;
      white-space: nowrap;
    }
    .font-pgbold {
      font-family: $PG-Bold;
      white-space: nowrap;
    }
    .alt-blue {
      color: $alt-blue;
    }
    .gray-med-1 {
      color: $gray-med-1;
    }
    .gray-light {
      color: $gray-light;
    }
    .amm-orange {
      color: $amm-orange;
    }
    .whitespace-pre {
      white-space:pre;
    }
    .justify-center {
      justify-content: center;
    }
    .font-size-14 {
      font-size: 14px;
    }
    .font-size-12 {
      font-size: 12px;
    }
    .lh-24 {
      line-height: 24px;
    } 
    .lh-28 {
      line-height: 28px;
    }
    .lh-31 {
      line-height: 31px;
    }
    img.icon {
      object-fit: contain;
      margin-left: 2px;
      transform: translateY(2px)
    }
  }
  @media screen and (max-width: $breakpoint-small) {
    .panel-container {
      overflow: hidden;
      width: 100%;
      margin-top: 0px;
      margin-left: 0px;
    }
  }
</style>
