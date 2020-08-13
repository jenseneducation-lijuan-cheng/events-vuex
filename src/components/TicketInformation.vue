<template>
  <div class="midden">
    <h1>{{event.name}}</h1>
    <h3>{{time}}</h3>
    <span>@{{event.location}}</span>

    <div class="price">{{event.price}} sek</div>
  </div>
</template>

<script>
export default {
  props:["event"]
  ,
  computed:{
  time() {
        let json = this.$store.state.event.date
        let day = json.day
        let month = json.month
        let start = json.time.start
        let end = json.time.end 
         return `${day} ${month} kl ${start} - ${end}`
      }
  }
};
</script>

<style lang ="scss" coped>
@import "../scss/variables";
.midden {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-style: italic;
    font-weight: bold;
    font-size: 35px;
    line-height: 41px;
    color:$pink; 
    margin: 50px 0 0 0;
  }
  span {
    font-family: "Fira Sans";
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  h3 {
    font-family: "Fira Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    margin: 22px 0 0 0;
    color: $green;
  }

  .price {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin: 150px 0 150px 0;
    color: $white;
    text-shadow: 1px 1px 0px $pink;
  }
}
</style>