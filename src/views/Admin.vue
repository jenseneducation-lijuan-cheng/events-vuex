<template>
  <div id="admin">
   <img class="admin-logo" src="@/assets/graphics/logologo.png" alt="admin-logo">
   <div class="container">
   <Events v-bind:events="events" />
   <Form/>
   </div>
  </div>
</template>

<script>
import Events from "../components/Events"
import Form from "../components/Form"
import { mapActions } from "vuex";
export default {
    components:{
        Events,
        Form,
    },
     methods: {
    ...mapActions(["getEvents"])
  },
  computed: {
    events() {
      return this.$store.state.events;
    }
  },

  created() {
    this.getEvents();
  }

}
</script>

<style lang="scss" scoped>
@import"../scss/main.scss";
#admin {
  background-color: $purple;
  height: 100vh;
  width: 100vw;
  

  .admin-logo{
      margin: 24px auto auto 24px;
      color:$white;
  }
  .container{
      width: 1150px;
      display: flex;
    
      margin:100px auto 0px auto;
       
    
  }
 

}

</style>