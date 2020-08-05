<template>
  <div id="events">
    <ul class="all part">
      <h4>NAMN</h4>
      <li class="name">Lasse Stafanz</li>
      <li class="name">Lasse Stafanz</li>
      <li class="name">Lasse Stafanz</li>
    </ul>
    <ul class="all number">
      <h4>VAR</h4>
      <li class="color">kjell Härnqvistsalen</li>
      <li class="color">kjell Härnqvistsalen</li>
      <li class="color">kjell Härnqvistsalen</li>
    </ul>
    <ul class="all number">
      <h4>ANTAL PLATSER</h4>
      <li class="color">300</li>
      <li class="color">300</li>
    </ul>
    <ul class="all number">
      <h4>SÅLDA BILJETTER</h4>
      <li class="color">125</li>
      <li class="color">125</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
@import"../scss/admin.scss";
#events {
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 300px;
  background-color:$darkPurple;

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
    margin-top:20px;
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