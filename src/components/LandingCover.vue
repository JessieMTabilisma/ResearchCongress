<template>
  <div class="landing-home">
    <video autoplay loop id="video-background" muted plays-inline>
      <source src="../assets/congress2.mp4" type="video/mp4">
    </video>
    <div class="overlay"></div>
    <div class="content-container">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" class="title-header">
          <ul class="ul-style">
            <li class="li-style year">2019</li>
            <hr class="line-divider">
            <li class="li-style title1">ICT</li>
            <li class="li-style title2">Research Congress</li>
            <vs-button color="success" type="gradient" class="register-button">REGISTER NOW</vs-button>
          </ul>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
.landing-home
  height: 90vh
  background-color: rgb(248, 248, 248)
  position: absolute
  margin-top: 10vh
  .overlay
    height: 100vh
    width: 100%
    position: fixed
    background: rgba(0, 0, 0, 0.5)
    margin-top: -10vh
  #video-background
    position: fixed
    right: 0
    bottom: 0
    min-width: 100%
    min-height: 100%
    z-index: -100
    opacity: 0.5
  .content-container
    position: fixed
    top: 30vh
    width: 100%
    height: 40vh
    padding: 20px
    .title-header
      display: inline-block
      text-align: left
      .ul-style
        .li-style
          list-style-type: none
          font-weight: 900
          color: rgb(255, 255, 255)
        .year
          color: #feca57
          font-size: 45px !important
        .title1
          font-size: 65px !important
        .title2
          font-size: 55px !important
        .line-divider
          height: 2vh
          width: 8vw
          background-color: #feca57
          border: none
        .register-button
          font-weight: 500 !important
          padding: 15px 25px 15px 25px
          top: 5vh
</style>
