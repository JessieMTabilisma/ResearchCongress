<template>
  <div class="wrapper-registration">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-offset="1">
        <img src="../assets/standing.svg">
      </vs-col>
      <vs-col vs-type="flex" vs-w="4">
        <div class="form">
          <div class="input-form">
            <vs-input size="large" label-placeholder="Name" v-model="name" class="input"/>
            <vs-input size="large" label-placeholder="Email" v-model="email" class="input"/>
            <vs-input size="large" label-placeholder="Course" v-model="course" class="input"/>
            <vs-input size="large" label-placeholder="School" v-model="school" class="input"/>
            <vs-checkbox
              v-model="terms"
              class="checkbox"
            >Send me news and letter about the upcoming event.</vs-checkbox>
            <vs-button type="gradient" class="register">REGISTER</vs-button>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      course: "",
      school: "",
      terms: ""
    };
  }
};
</script>
<style lang="sass" scoped>
.wrapper-registration
  height: 90vh
  width: 100%
  position: absolute
  margin-top: 10vh
  background-image: url('../assets/Plants.svg')
  background-repeat: no-repeat
  background-position: left center
  img
    position: relative
    top: 100px
  .form
    min-height: 60vh
    width:  100%
    position: relative
    top: 80px
    background-color: rgb(255, 255, 255)
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)
    border-radius: 10px
    display: inline-block
    .input-form
      margin-top: 60px
      .input
        text-align: left
        width: 70%
        margin-left: 60px
        margin-top: 30px
      .checkbox
        margin-top: 20px
        font-size: 12px
        float: left
        margin-left: 13%
      .register
        margin-top: 20px
        // margin-bottom: 2%
        width: 50%
        height: 40px
</style>
