<template>
  <div id="form">
    <h2>Add Event</h2>
    <div class="part2">
      <input type="text" class="put long" placeholder="Name" />
      <input type="text" class="put long" placeholder="Where" />
      <input type="text" class="put long" placeholder="Date" />
    </div>
    <div class="part1">
      <input type="text" class="put short" placeholder="From Time" />
      <input type="text" class="put short" placeholder="To Time" />
    </div>
    <div class="part1">
      <input type="text" class="put short" placeholder="Tickets" />
      <input type="text" class="put short" placeholder="Price" />
    </div>
    
    <button>Add the event</button>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
@import "../scss/admin.scss";
#form {
  width: 432px;
  height: 378px;
  background-color: $darkPurple;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  .put {
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    border-radius: 3px;
    margin-bottom: 10px;
    background: $darkPurple;
  }
  .long {
    width: 400px;
    height: 40px;
  }
  h2 {
    font-family: "Fira Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: $pink;
    margin: 10px;
  }
  .short {
    width: 190px;
    height: 40px;
  }
  .part1 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .part2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    border-radius: 3px;
    width: 169px;
    height: 40px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: $pink;
    cursor: pointer;
    outline:none;
    margin-left:10px;
    color: $white;
    text-align: center;

  }
  input{
      padding-left:6px;
  }
  input:hover{
    border: 1px solid rgba(24,160,251);
}
  }
</style>