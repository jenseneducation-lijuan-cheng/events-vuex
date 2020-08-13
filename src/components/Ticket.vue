<template>
  <div id="ticket">
    <div class="what">
      <label>WHAT</label>
      <h2>{{event.name}}</h2>
      <div class="where place">
        <label class="label1">WHERE</label>
        <span class="label1">{{event.location}}</span>
      </div>
      <div class="time">
        <div class="part right">
          <label>WHEN</label>
          <span>{{event.date.day}} {{event.date.month}}</span>
        </div>
        <div class="part">
          <label>FROM</label>
          <span>{{event.date.time.start}}</span>
        </div>
        <div class="part left">
          <label>TO</label>
          <span>{{event.date.time.end}}</span>
        </div>
      </div>
    </div>
    <div class="barcode">
      <img src="@/assets/graphics/A2ED7barcode.png" alt="barcode" />
      <p class="ticket-number">Biljettnummer:11111111100000</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"]
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
#ticket {
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 311px;
  max-height: 450px;
  width: 70%;
  height: 70%;
  background: $white;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.7);
  border-radius: 3px;

  .what {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 26px;
      line-height: 30px;
      color: $pink;
      align-self: flex-start;
      padding: 10px;
      margin-top: 0px;
    }
    .where {
      width: 311px;
      height: 120px;
      border: 1px dashed rgba(0, 0, 0, 0.4);
    }
  }

  .time {
    height: 66px;
    width: 311px;
    border: 1px dashed rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: row;
    .part {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .right {
      border-right: 1px dashed rgba(0, 0, 0, 0.4);
    }
    .left {
      border-left: 1px dashed rgba(0, 0, 0, 0.4);
    }
  }
  .place {
    display: flex;
    flex-direction: column;
    .label1 {
      align-self: flex-start;
    }
  }
  label {
    margin: 10px;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.4);
  }
  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.6);
    margin: 5px;
  }
  .barcode {
     margin: auto;
    .ticket-number {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.1em;
      color: rgba(0, 0, 0, 0.4);
      margin-top:10px;
    }
  }
}
</style>