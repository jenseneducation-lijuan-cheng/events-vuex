<template>
  <div id="events">
    <ul class="all part">
      <h4>NAMN</h4>
      <li class="name" v-for="event in events" :key="event.id">{{event.name}}</li>
    </ul>
    <ul class="all number">
      <h4>VAR</h4>
      <li class="color" v-for="event in events" :key="event.id" >{{event.location}}</li>
    </ul>
    <ul class="all number">
      <h4>ANTAL PLATSER</h4>
      <li class="color" v-for="event in events" :key ="event.id">{{event.tickets.total}}</li>
     
    </ul>
    <ul class="all number">
      <h4>SÅLDA BILJETTER</h4>
      <li class="color" v-for="event in events" :key ="event.id">{{event.tickets.sold}}</li>
     
    </ul>
  </div>
</template>

<script>
export default {
  props:["events"],
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
@import"../scss/admin.scss";
#events {
 
  width: 700px;
  height: auto;
  background-color:$darkPurple;
  display: flex;
  flex-direction: row;
  .all {
    font-family: "Fira Sans";
    list-style-type: none;
    color: $white;
    margin-top:0px;
    padding: 0px;
    flex:1;
  }
  .part{
      flex:2;
      margin-left:10px;
  }
  h4 {
    font-size: 13px;
    line-height: 16px;
    color: $pink;
    text-transform: uppercase;
    margin:20px 0 30px 0 ;
  }
  .name {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }
  .color{
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    height: 24px;
    margin: 0 0 20px;
    padding-top: 6px;
  }
  
 
}
</style>