<template>
<div class="place">
<h5>Places</h5>
<div>
    <div class="">
        <PlaceCard/>
    </div>
</div>
</div>
</template>
<script>
import PlaceCard from './PlaceCard.vue';

export default {
  name: 'MobileCategory',
  components: {
    PlaceCard,
  },
};
</script>
