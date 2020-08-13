<template>
  <div id="staff">
    <div>
      <img src="@/assets/graphics/staff-logo.png" alt="logo" class="logo" />
      <h1>Where It's @</h1>
      <h2>STAFF</h2>
    </div>
    <div class="ticket">
      <textarea placeholder="Biljett
nummer" class="staff-input" />
      <button class="verifyBtn">Verify ticket</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
#staff {
  box-sizing: border-box;
  background-color: $orange;
  height: 100vh;
  width: 100vw;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .logo {
    width: 80px;
    height: 75px;
  }
  h1 {
    font-size: 20px;
    line-height: 23px;
  }
  h2 {
    font-family: "Fira Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.3em;
    color: rgba(0, 0, 0, 0.8);
    margin: 5px 0 0 5px;
  }
  .ticket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .staff-input {
      width: 310px;
      height: 80px;
      font-family: "Fira Mono", sans-serif;
      font-size: 25px;
      letter-spacing: 0.2em;
      font-weight: bold;
      background: $orange;
      border: solid 2px $purple;
      outline: none;
      resize: none;
    }

    ::placeholder {
      color: black;
      opacity: 1;
      text-align: center;
    }

    .verifyBtn {
      width: 310px;
      height: 60px;
      background: $purple;
      color: $white;
      font-size: 22px;
      border-radius: 0px 0px 3px 3px;
      cursor: pointer;
    }
  }
}
</style>