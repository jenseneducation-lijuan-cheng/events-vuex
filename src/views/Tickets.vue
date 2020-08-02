<template>
  <div id="tickets">
     <router-link class="back-btn" to="/events">Back</router-link>
      <Ticket/>
  </div>
</template>

<script>
import Ticket from '../components/Ticket'
export default {
    components:{ Ticket}

}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
 #tickets {
        box-sizing: border-box;
        display: flex;
        height: 100vh;
        width: 100vw;
        background: linear-gradient($pink 0%, $purple 40%)
 }

</style>