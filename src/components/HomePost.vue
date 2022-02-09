<template>
  <div class="all-posts post-margin">
<div class="row">
<PlaceCard/>
<PlaceCard/>
<PlaceCard/>
<PlaceCard/>
</div>
  </div>
</template>

<script lang='ts'>
import PlaceCard from './PlaceCard.vue';

export default {
  name: 'HomePosts',
  components: {
    PlaceCard,
  },
};

</script>
