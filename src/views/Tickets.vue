<template>
  <div id="tickets">
     <router-link class="back-btn" to="/events">Back</router-link>
      <Ticket v-bind:event="event"/>
  </div>
</template>

<script>
import Ticket from '../components/Ticket'
export default {
    components:{ Ticket},
    computed: {
      event() {
         return this.$store.state.event;
      }
    }

}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
 #tickets {
        box-sizing: border-box;
        display: flex;
        height: 100vh;
        width: 100vw;
        background: linear-gradient($pink 0%, $purple 40%)
 }

</style>