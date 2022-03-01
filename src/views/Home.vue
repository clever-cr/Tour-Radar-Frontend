<template>
  <div class="home">
    <Navbar />
    <MobileNav/>
    <MobileCategory class="mobile"/>
    <MobileHomePost class="mobile"/>
    <MobileGuider class="mobile"/>
    <div class="desktop">
    <div class="container  mt-3">
      <div class="row">
      <div class="col-8">
        <HomePosts class="desktop"/>
      </div>
      <div class="col-4 fixedside">
        <HomeSide class="desktop"/>
      </div>
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
import MobileCategory from '@/components/MobileCategory.vue';
import MobileHomePost from '@/components/MobileHomePost.vue';
import MobileGuider from '@/components/MobileGuiders.vue';

@Component({
  components: {
    Navbar,
    HomePosts,
    HomeSide,
    MobileNav,
    MobileCategory,
    MobileHomePost,
    MobileGuider,
  },
})
export default class Home extends Vue {}
</script>
