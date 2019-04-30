<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title class="navTitle">ICT.R.C</vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
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
  z-index: 100
  background-color: rgb(255, 255, 255) !important
  .navTitle
    color: green !important
</style>
