export default {
  props: {
    autoSelect: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.autoFocus)
      this.focus()
  },
  methods: {
    selectAll() {
      this.$refs.field.select()
    },
    focus() {
      this.$refs.field.focus()
    },
    onFocus() {
      if (this.autoSelect) {
        this.selectAll()
      }
    }
  }
}
