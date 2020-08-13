<template>
  <div id="container">
    <h3 class="top">
      You are about to score
      <br />some tickets to
    </h3>
    <TicketInformation v-bind:event="event"/>
    <button class="book" @click="goToTickets()">Beställ</button>
  </div>
</template>

<script>
import TicketInformation from "../components/TicketInformation";
export default {
  components: {
    TicketInformation
  },
  methods: {
    goToTickets() {
      this.$router.push("/tickets");
    }
  },
    computed: {
      event() {
         return this.$store.state.event;
      }
    }
  
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
#container {
  border-top: 1px solid $purple;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  background-color: $purple;
  height: 100vh;
  width: 100vw;
  margin: auto;
  .top {
    margin: 80px 0 0 0;
    font-family: "Fira Sans";
    font-style: italic;
    font-size: 19px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }
  .book {
    width: 30%;
    height: 60px;
    background: $green;
    border-radius: 3px;
    border: none;
    outline: none;
    color: $white;
    font-weight: 600;
    font-size: 22px;
    cursor: pointer;
  }
}
</style>