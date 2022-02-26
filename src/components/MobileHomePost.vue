<template>
<div class="place">
<h5>Places</h5>
<div>
         <carousel :nav="false" :loop="false" :responsive="{
    0: {
      items: 1.3
    },
    768: {
      items: 2.2
    }
  }">

    <PlaceCard />

   <PlaceCard />

    <PlaceCard />
    <PlaceCard />

</carousel>

</div>
</div>
</template>
<script>
import carousel from 'vue-owl-carousel';
import PlaceCard from './PlaceCard.vue';

export default {
  name: 'MobileHomePost',
  components: {
    PlaceCard,
    carousel,
  },
};
</script>
