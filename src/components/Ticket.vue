<template>
  <div id="ticket">
    <div class="what">
      <label>WHAT</label>
      <h2>Lasse-Stefanz</h2>
      <div class="where place">
        <label class="label1">WHERE</label>
        <span class="label1">kjell Härnqvistsalen</span>
      </div>
      <div class="time">
        <div class="part right">
          <label>WHEN</label>
          <span>21 May</span>
        </div>
        <div class="part">
          <label>FROM</label>
          <span>19.00</span>
        </div>
        <div class="part left">
          <label>TO</label>
          <span>21.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    margin:10px;
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
}
</style>