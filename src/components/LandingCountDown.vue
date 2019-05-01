<template>
  <div class="con-colors">
    <h1>Countdown until the big event</h1>
    <countdown :time="13 * 24 * 60 * 60 * 1000" :interval="100" tag="p">
      <ul slot-scope="props">
        <li class="count-container">
          {{ props.days }}
          <br>Days
        </li>
        <li class="count-container">
          {{ props.hours }}
          <br>Hours
        </li>
        <li class="count-container">
          {{ props.minutes }}
          <br>Minutes
        </li>
        <li class="count-container">
          {{ props.seconds }}.{{ Math.floor(props.milliseconds / 100) }}
          <br>Seconds
        </li>
      </ul>
    </countdown>
  </div>
</template>
<script>
export default {
  data: function() {
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 1);

    return {
      counting: false,
      time: newYear - now
    };
  },
  methods: {
    startCountdown: function() {
      this.counting = true;
    },
    handleCountdownEnd: function() {
      this.counting = false;
    }
  }
};
</script>
<style lang="sass" scoped>
.con-colors 
  height: 50vh
  width: 100%
  background: #ffffff
  position: absolute
  margin-top: 130vh
  h1
    color: #34495e
    position: relative
    top: 100px
  ul
    display: flex
    align-items: center
    justify-content: center
    position: relative
    top: 120px
  .con-colors 
  li
    display: block
    position: relative
    width: 100px
    height: 100px
    background: rgb(155, 250, 149)
    margin: 50px
    display: flex
    align-items: center
    justify-content: center
    color: rgb(255, 255, 255)
    border-radius: 10px
    z-index: 100
    font-weight: 500
  .count-container
    background: #2c3e50
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)
</style>
