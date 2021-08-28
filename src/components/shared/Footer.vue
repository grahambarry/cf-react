<template>
  <div class="footer-row">
    <div class="copyright">{{ copyrightYear }}</div>
    <div class="links-row">
      <ul>
        <li v-for="(link, index) in links" 
            :key="index">
          <router-link :to="{ name: link.label }">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  },
  props: {
    links: {
      type: Array,
      default: [],
    }
  },
  computed: {
    copyrightYear() {
      let date = new Date().getFullYear()
      let string = '© ' + `${date}` + ' CurrencyFair'
      return string
    }
  }
};
</script>
<style lang="scss" scoped>
  @import 'app/assets/stylesheets/placeholders/flex-helpers';
  @import 'app/assets/stylesheets/design_vars';
  .footer-row {
    font-family: $PG-Medium;
    line-height: 18px;
    font-size: 12px;
    margin-top: 60px;
    border-top: 1px solid #EEEEEE;
    padding-top: 14px;
    width: 100%;
    @extend %amm-flex-row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .copyright {
    color: #BDBDBD;
  }
  .links-row {
    margin-left: auto;
    ul {
      @extend %amm-flex-row;
      align-items: flex-end;
      justify-content: space-between;
      padding: 0px;
      margin: 0px;
      list-style: none;
      li a {
        color: $alt-blue;
        text-decoration: none;
        margin-right: 18px;
        font-family: $PG-Medium;
        line-height: 18px;
        font-size: 12px;
        &:hover {
          color: #589BB9;
        }
      }
    }
  }
  @media screen and (max-width: $breakpoint-small) {

  }
</style>
