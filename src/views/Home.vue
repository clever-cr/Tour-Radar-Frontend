<template>
  <div class="home">
    <Navbar />
    <MobileNav/>
    <div class="container places mt-3">
      <div class="row">
      <div class="col-8">
        <HomePosts/>
      </div>
      <div class="col-4">
        <HomeSide/>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import HomePosts from '@/components/HomePost.vue';
import HomeSide from '@/components/HomeSide.vue';
import MobileNav from '@/components/MobileNav.vue';

@Component({
  components: {
    Navbar,
    HomePosts,
    HomeSide,
    MobileNav,
  },
})
export default class Home extends Vue {}
</script>
