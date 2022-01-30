<template>
  <div class="home">
    <Navbar />
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

@Component({
  components: {
    Navbar,
    HomePosts,
    HomeSide,
  },
})
export default class Home extends Vue {}
</script>
