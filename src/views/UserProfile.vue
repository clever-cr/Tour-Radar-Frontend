<template>
  <div class="home">
    <Navbar/>
    <div class="container  profile-body">
        <div class="row">
        <div class="col-4">
          <ProfileSideBar/>
        </div>
        <div class="col-8">
            <ProfileMainBar/>
        </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/ProfileNavbar.vue';
import ProfileSideBar from '@/components/ProfileSideBar.vue';
import ProfileMainBar from '@/components/ProfileMainBar.vue';

@Component(
  {
    components: {
      Navbar,
      ProfileSideBar,
      ProfileMainBar,
    },
  },
)
export default class UserProfile extends Vue {}
</script>
