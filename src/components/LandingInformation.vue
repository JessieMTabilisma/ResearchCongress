<template>
  <div class="wrapper-countdown">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <div class="date-wrapper">
          <i class="material-icons icon">date_range</i>
          <div class="text-holder">
            <h2>Date</h2>
            <h3>15 May 2019</h3>
          </div>
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <div class="date-wrapper">
          <i class="material-icons icon">location_on</i>
          <div class="text-holder">
            <h2>Location</h2>
            <h3>
              Saint Louis University,
              <br>Baguio City, Philippines
            </h3>
          </div>
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <div class="date-wrapper">
          <i class="material-icons icon">label</i>
          <div class="text-holder">
            <h2>Badges</h2>
            <h3>2 Badges</h3>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import "material-icons/iconfont/material-icons.css";
export default {};
</script>
<style lang="sass" scoped>
.wrapper-countdown
  height: 30vh
  width: 100%
  background-color: rgb(248, 248, 248)
  position: absolute
  margin-top: 100vh
  .date-wrapper
    display: flex
    position: relative
    top: 70px
    text-align: left
    .text-holder 
      display: inline-block
      margin-left: 15px
      h2
        color: green
        position: relative
        top: 20px
        font-weight: 700
      h3
        color: grey
        font-size: 12px
        font-weight: 500
        position: relative
        top: 15px
    .icon
      font-size: 90px
      color: grey
</style>
