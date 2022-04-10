<template>
  <div class="profile-side ">
      <div class="p-profile mt-5"></div>
      <div class="p-address mt-3 ml-5">
          <h5>
              <font-awesome-icon :icon="['fas', 'home']" class="mainColor mt-2" />
              Kigali, Rwanda, KN3
          </h5>
          <h5>
              <font-awesome-icon :icon="['fas', 'language']" class="mainColor mt-2" />
              Speaks English
          </h5>
          <h5>
              <font-awesome-icon :icon="['fas', 'mail-bulk']" class="mainColor mt-2" />
              Send Email
          </h5>
          <h5>
              <font-awesome-icon :icon="['fas', 'language']" class="mainColor mt-2" />
              Verified Guider
          </h5>
          <h5>
              <font-awesome-icon :icon="['fas', 'language']" class="mainColor mt-2" />
              18 Reviews
          </h5>
          <h5>
              <font-awesome-icon :icon="['fas', 'star']" class="mainColor mt-2" />
              4 Stars
          </h5>
      </div>

  </div>
</template>

<script>

export default {
  name: 'ProfileSideBar',
  components: {
  },
};
</script>
