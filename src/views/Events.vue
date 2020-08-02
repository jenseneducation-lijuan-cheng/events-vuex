<template>
  <div id="events">
     <h1>Events</h1> 
     <EventDetails/>
  </div>

</template>

<script>
import EventDetails from '../components/EventDetatils';
export default {
    components:{ EventDetails }

}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
 #events {
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
    width: 100vw;
    margin: auto;
    background:$purple;


 h1{
    font-family:" Sansita One";
    color:$pink;
    padding-top:5%;
    text-align: center;
}
}
</style>