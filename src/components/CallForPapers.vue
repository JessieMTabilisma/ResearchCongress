<template>
  <div class="wrapper-call">
    <vs-row>
      <vs-col vs-offset="4" vs-type="flex" vs-w="7">
        <div class="document-view">
          <h1>Call for Papers</h1>
          <hr>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit autem dolore quidem dolores doloremque perspiciatis vero eos, eum eius quis id nulla numquam molestiae animi sint, dolor saepe ipsam quibusdam provident laudantium sit natus officiis? Enim sit excepturi velit reprehenderit nesciunt itaque rerum reiciendis vitae.</p>
          <!--  -->
          <h3>Augmented Analytics</h3>
          <h4>Topics covered in this track include (but are not limited to):</h4>
          <ul>
            <li>Machine Learning</li>
            <li>Deep learning</li>
            <li>Data Mining</li>
          </ul>
          <!--  -->
          <h3>Augmented Data Management</h3>
          <h4>Topics covered in this track include (but are not limited to):</h4>
          <ul>
            <li>Machine Learning</li>
            <li>Deep learning</li>
            <li>Data Mining</li>
          </ul>
          <!--  -->
          <h3>Continuous Intelligence</h3>
          <h4>Topics covered in this track include (but are not limited to):</h4>
          <ul>
            <li>Machine Learning</li>
            <li>Deep learning</li>
            <li>Data Mining</li>
          </ul>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
.wrapper-call
  min-height: 90vh
  width: 100%
  position: absolute
  margin-top: 10vh
  .document-view
    height: 100vh
    width: 100%
    background-color: rgb(255, 255, 255)
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)
    margin-top: 20px
    margin-bottom: 50px
    h1
      text-align: left
      margin: 30px
      text-transform: uppercase
      color: grey
    hr
      width: 90%
      margin-left: 5%
      background-color: rgb(248, 248, 248)
      border: 1px solid #333333
    p
      width: 90%
      margin-left: 5%
      margin-top:  2vh
      text-align: justify
      line-height: 150%
    h3
      margin-top: 6vh
      text-align: left
      margin-left: 5%
    h4
      font-size: 12px
      margin-top: 1vh
      text-align: left
      margin-left: 5%
    ul
      margin-top: 1vh
      margin-left: 8%
      text-align: left
</style>
