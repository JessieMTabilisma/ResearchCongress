<template>
  <div class="home">
    <LandingCover/>
    <LandingInformation/>
    <LandingCountDown/>
    <LandingAbout/>
    <LandingMaps/>
  </div>
</template>

<script>
import LandingCover from "@/components/LandingCover.vue";
import LandingInformation from "@/components/LandingInformation.vue";
import LandingCountDown from "@/components/LandingCountDown.vue";
import LandingAbout from "@/components/LandingAbout.vue";
import LandingMaps from "@/components/LandingMaps.vue";
export default {
  name: "home",
  components: {
    LandingCover,
    LandingInformation,
    LandingCountDown,
    LandingAbout,
    LandingMaps
  }
};
</script>
