<template>
   <svg width="50px" 
        height="31px" 
        viewBox="0 0 50 31" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="icon"
        @click="$emit('click');"
        @mouseover="isHover = true;"
        @mouseout="isHover = false;">
      <g id="Page-1" class="icon" stroke="none" stroke-width="1" :fill="isHover ? iconHoverColor : iconColor" fill-rule="evenodd">
         <g id="Group-12" transform="translate(-1359.000000, -30.000000)">
            <g id="Group-9" transform="translate(1359.000000, 30.000000)">
               <rect id="Rectangle-7" x="0" y="0" width="50" height="7"></rect>
               <rect id="Rectangle-7" x="0" y="12" width="50" height="7"></rect>
               <rect id="Rectangle-7" x="0" y="24" width="50" height="7"></rect>
            </g>
         </g>
      </g>
   </svg>
</template>

<script>
export default {
   props: {
      iconColor: {
         type: String,
         default: "#686C6B"
      },
      iconHoverColor: {
         type: String,
         default: "currentColor"
      }
   },
   data() {
      return {
         isHover: false
      }
   }
}
</script>
<style scoped>
   .icon {
      transition: fill 0.4s ease;
      cursor: pointer;
   }
</style>