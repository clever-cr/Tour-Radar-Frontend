<template>
  <div class="home">
    <Navbar/>
    <div class="container  profile-body">
        <div class="row">
        <div class="col-4">
          <ProfileSideBar/>
        </div>
        <div class="col-8">
            <h1>Body</h1>
        </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/ProfileNavbar.vue';
import ProfileSideBar from '@/components/ProfileSideBar.vue';

@Component(
  {
    components: {
      Navbar,
      ProfileSideBar,
    },
  },
)
export default class UserProfile extends Vue {}
</script>
