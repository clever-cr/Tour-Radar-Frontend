<template>
  <div class="home">
    <Navbar />
    <MobileNav/>
    <MobileCategory class="mobile"/>
    <MobileHomePost class="mobile"/>
    <div class="container desktop places mt-3">
      <div class="row">
      <div class="col-8">
        <HomePosts class="desktop"/>
      </div>
      <div class="col-4">
        <HomeSide class="desktop"/>
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

@Component({
  components: {
    Navbar,
    HomePosts,
    HomeSide,
    MobileNav,
    MobileCategory,
    MobileHomePost,
  },
})
export default class Home extends Vue {}
</script>
