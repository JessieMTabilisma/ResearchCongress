<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <router-link to="/">
          <vs-navbar-title class="navTitle">ICT.R.C</vs-navbar-title>
        </router-link>
      </div>

      <router-link to="/">
        <vs-navbar-item index="0">
          <a href="#">Home</a>
        </vs-navbar-item>
      </router-link>
      <router-link to="/call-for-papers">
        <vs-navbar-item index="0">
          <a href="#">Call for Papers</a>
        </vs-navbar-item>
      </router-link>
      <router-link to="/registration">
        <vs-navbar-item index="1">
          <a href="#">Registration</a>
        </vs-navbar-item>
      </router-link>
      <vs-navbar-item index="2">
        <a href="#">About</a>
      </vs-navbar-item>
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
</style>
