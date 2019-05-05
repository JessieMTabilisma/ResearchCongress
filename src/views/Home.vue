<template>
  <div class="home">
    <LandingCover/>
    <LandingInformation/>
    <LandingCountDown/>
    <LandingAbout/>
    <footer>
      <vs-row>
        <vs-col vs-justify="center" vs-align="center" vs-w="6" class="title">
          <h3>13th</h3>
          <h2>North Luzon</h2>
          <h1>ICT Research Congress</h1>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" class="links">
          <ul>
            <span>Navigation</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Call for Papers</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </vs-col>
      </vs-row>
    </footer>
  </div>
</template>

<script>
import LandingCover from "@/components/LandingCover.vue";
import LandingInformation from "@/components/LandingInformation.vue";
import LandingCountDown from "@/components/LandingCountDown.vue";
import LandingAbout from "@/components/LandingAbout.vue";
// import LandingMaps from "@/components/LandingMaps.vue";
export default {
  name: "home",
  components: {
    LandingCover,
    LandingInformation,
    LandingCountDown,
    LandingAbout
    // LandingMaps
  }
};
</script>
<style lang="sass" scoped>
footer
  height: 40vh
  width: 100%
  background-color: #333333
  position: absolute
  margin-top: 260vh
  .title
    height: 100%
    text-align: left
    h3 
      margin-top: 80px
      margin-left: 100px
      color: green
    h2
      margin-top: 5px
      margin-left: 100px
      color: #f8f8f8
    h1
      margin-left: 100px
      color: #ffffff
  .links
    height: 40vh
    text-align: left
    margin-left: 50%
    ul
      span
        color: #f8f8f8
      li
        list-style-type: none
        margin-top: 5px
        a
          color: green

</style>

