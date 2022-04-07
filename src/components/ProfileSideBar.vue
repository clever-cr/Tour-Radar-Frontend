<template>
  <div class="profile-side ">
      <div class="p-profile mt-5"></div>
      <div class="p-address mt-3 ml-5">
          <h5>
              <font-awesome-icon :icon="['fas', 'home']" class="mainColor" />
              Kigali, Rwanda, KN3
          </h5>
          <h5>
              <font-awesome-icon :icon="['fas', 'language']" class="mainColor" />
              Speaks English
          </h5>
          <h5>
              <font-awesome-icon :icon="['fas', 'mailBulk']" class="mainColor" />
              Send Email
          </h5>
      </div>

  </div>
</template>

<script>

export default {
  name: 'HomeSide',
  components: {
  },
};
</script>
