<template>
  <div class="wrapper-registration">
    <vs-row>
      <vs-col vs-offset="7" vs-type="flex" vs-w="4">
        <div class="form">
          <div class="input-form">
            <vs-input size="large" label-placeholder="Name" v-model="name" class="input"/>
            <vs-input size="large" label-placeholder="Email" v-model="email" class="input"/>
            <vs-input size="large" label-placeholder="Course" v-model="course" class="input"/>
            <vs-input size="large" label-placeholder="School" v-model="school" class="input"/>
            <vs-checkbox v-model="checkBox1" class="checkbox">Im responsibe for my action.</vs-checkbox>
            <vs-button type="gradient" class="register">REGISTER</vs-button>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
.wrapper-registration
  height: 90vh
  width: 100%
  position: absolute
  margin-top: 10vh
  .form
    height: 60vh
    width:  100%
    position: relative
    top: 120px
    background-color: rgb(255, 255, 255)
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)
    border-radius: 10px
    display: inline-block
    .input-form
      margin-top: 40px
      .input
        text-align: left
        width: 70%
        margin-left: 60px
        margin-top: 30px
      .checkbox
        margin-top: 20px
        float: left
        margin-left: 15%
      .register
        margin-top: 20px
        width: 50%
        height: 40px
</style>
