<template>
  <div class="contact">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-offset="4">
        <div class="form">
          <h1>Contact Us</h1>
          <div class="input-form">
            <vs-input size="large" label-placeholder="Email" v-model="email" class="input message"/>
            <vs-textarea label="Message" v-model="message" class="message"/>
            <vs-button type="gradient" class="send">Send</vs-button>
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
      email: "",
      message: ""
    };
  }
};
</script>
<style lang="sass" scoped>
.contact
  height: 90vh
  width: 100%
  position: absolute
  margin-top: 10vh
  position: absolute
  background-image: url('../assets/contact.jpg')
  background-position: center center
  background-repeat: no-repeat
  background-size: cover
  .form
    min-height: 40vh
    width:  100%
    position: relative
    top: 120px
    background-color: rgb(255, 255, 255)
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)
    border-radius: 10px
    display: inline-block
    h1
      width: 80%
      margin-left: 10%
      margin-top: 30px
      text-align: left
    .input-form
      // margin-top: 15vh
      width: 80%
      margin-left: 10%
      .input
        text-align: left
        margin-top: 30px
        width: 100%
      .message
        margin-top: 30px
        width: 100%
        text-align: left
      .send
        width: 60%
        margin-left: 5%
        margin-bottom: 5%
        height: 5vh
</style>
