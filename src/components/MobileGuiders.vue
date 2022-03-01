<template>
<div class="mb-guiders">
    <h5>Guiders</h5>
    <div class="guidercarousel">
      <carousel :nav="false" :loop="false" :responsive="{
    0: {
      items: 1.3
    },
    768: {
      items: 2.2
    }
  }">

<Guider/>
<Guider/>
<Guider/>
      </carousel>
    </div>
</div>
</template>
<script>
import carousel from 'vue-owl-carousel';
import Guider from '@/components/Guider.vue';

export default {
  name: 'MobileGuider',
  components: {
    carousel,
    Guider,
  },
};
</script>
