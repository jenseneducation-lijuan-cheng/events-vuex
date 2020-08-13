<template>
  <div id="form">
    <h2>Add Event</h2>
    <div class="part2">
      <input type="text" class="put long" placeholder="Name" v-model="newEvent.name" />
      <input type="text" class="put long" placeholder="Where" v-model="newEvent.location" />
      <input type="text" onfocus="(this.type='date')" class="put long" placeholder="Date" v-model="newEvent.date" />
    </div>
    <div class="part1">
      <input type="text" onfocus="(this.type='time')" class="put short" placeholder="From Time" v-model="newEvent.start" />
      <input type="text" onfocus="(this.type='time')"   class="put short" placeholder="To Time" v-model="newEvent.end" />
    </div>
    <div class="part1">
      <input type="text" class="put short" placeholder="Tickets" v-model="newEvent.total"/>
      <input type="text" class="put short" placeholder="Price"  v-model="newEvent.price"/>
    </div>
    
    <button @click="createEvents">Add the event</button>
    <p class="error-text" v-show="!valid">Please fill in the blanks</p>

  </div>
</template>

<script>
export default {

  data() {
    return {
      newEvent:{
       date:"",
        name: "",
        price: "",
        location: "",
        start: "",
        end: "",
        total: "",
        
      },
      valid: true,
    }
  },
  methods: {
    createEvents() {
      if (this.date != "") {
        var format = { month: "short", day: "numeric" };
        let date = new Date(this.date).toLocaleDateString("en-US", format);
        this.newEvent.month = date.replace(/[^A-Z, a-z]/g, "").slice(0, -1);
        this.newEvent.day = date.replace(/[^0-9]/g, "");
      }
     
       if (
          (this.newEvent.name != "") &
          (this.newEvent.location != "") &
          (this.newEvent.start != "") &
          (this.newEvent.end != "")
        ) {
          this.$store.dispatch("createEvent", this.newEvent);
          //hämta alla events igen 
          //this.$store.dispatch("getEvents");
          this.valid = true;
        } else {
          this.valid = false;
        }
    }
  }
};
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
    background:transparent;
    color: $white;
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
.error-text {
      color: red;
      margin: 8px 0 0;
      font-size: 14px;
    }
  }
</style>