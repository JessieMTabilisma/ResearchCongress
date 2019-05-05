<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <router-link to="/">
          <vs-navbar-title class="navTitle">Research Congress</vs-navbar-title>
        </router-link>
      </div>

      <router-link to="/">
        <vs-navbar-item>
          <a href="#">Home</a>
        </vs-navbar-item>
      </router-link>
      <router-link to="/call-for-papers">
        <vs-navbar-item>
          <a href="#">Call for Papers</a>
        </vs-navbar-item>
      </router-link>
      <router-link to="/registration">
        <vs-navbar-item>
          <a href="#">Registration</a>
        </vs-navbar-item>
      </router-link>
      <router-link to="/contact-us">
        <vs-navbar-item>
          <a href="#">Contact Us</a>
        </vs-navbar-item>
      </router-link>
      <router-link to="/faqs">
        <vs-navbar-item>
          <a href="#">FAQs</a>
        </vs-navbar-item>
      </router-link>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0
  })
};
</script>
<style lang="sass" scoped>
.nabarx
  height: 60px
  position: fixed
  z-index: 1000
  background-color: rgb(255, 255, 255) !important
  .navTitle
    color: green !important
    position: relative
    left: 20px
  a
    color: grey
    margin-right: 10px
    &:hover, &:focus, &:active
      color: blue
</style>
