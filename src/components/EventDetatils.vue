<template>
  <div id="wrapper">
    <div class="date">
      <span>21</span>
      <span>May</span>
    </div>
    <div class="haha">
      <div class="artist-details">
        <h2>{{event.name}}</h2>
        <span class="location">{{event.location}}</span>
        <span class="time">19:00-21:00</span>
      </div>
      <div class="price">
        <span>{{event.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props:["event"]
};

</script>

<style lang="scss" scoped>
@import "../scss/variables";
#wrapper {
  font-family: "fira sans";
  color: $white;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 300px;
  margin: auto;

  

  .date {
    height: 75px;
    width: 75px;
    margin:20px 20px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid $white;
    border-radius: 3px;
    span {
      color: #d0d0d0;
    }
  }
  .haha {
    display: flex;
    width: 200px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  .artist-details {
    display: flex;
    flex-direction: column;
    text-align: left;
    h2 {
      color: $white;
      text-shadow: 1px 1px 0px #f56b9a;
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 0;
    }
    .location {
      font-size: 12px;
      line-height: 14px;
      color: rgba(255, 255, 255, 0.8);
      margin: 10px 0px;
    }
    .time {
      font-size: 14px;
      line-height: 17px;
      color: #d0d0d0;
      margin-bottom:5px;
    }
  }
  .price {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    span {
      color: #37aeab;
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      margin-bottom: 5px;
    }
    
  }
  }
}
</style>