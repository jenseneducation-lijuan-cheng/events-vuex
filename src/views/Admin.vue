<template>
  <div id="admin">
   <div class="admin-logo">bilden</div>
   <div class="container">
   <Events/>
   <Form/>
   </div>
  </div>
</template>

<script>
import Events from "../components/Events"
import Form from "../components/Form"
export default {
    components:{
        Events,
        Form,
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