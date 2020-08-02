<template>
  <div id="ticket">
  <div class="what">
      <label>WHAT</label>
  <h2>
      Lasse-Stefanz
  </h2>
  <div class="WHERE">
      <label>WHERE</label>
      <span>kjell Härnqvistsalen</span>
  </div>
  <div>
      <label>WHEN</label>
      <span>21</span>
      <span>May</span>
      <div>
          <label>FROM</label>
          <span>19.00</span>

      </div>
     <div>
         <label>TO</label>
         <span>21.00</span>
     </div>

  </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
#ticket{
    margin: auto;
    display: flex;  
    flex-direction: column;
    max-width: 311px;
    max-height: 450px;
    width: 70%;
    height: 70%;
    background:$white;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.7);
    border-radius: 3px;
    text-align: center;
}

</style>