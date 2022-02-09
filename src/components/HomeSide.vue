<template>
  <div class="guider-side mt-2 ">
<h3> Guiders</h3>
<div class="guiders">
  <Guider/>
<Guider/>
<Guider/>
<Guider/>
</div>
<div class="footer mt-3">
  <span>About</span> - <span> Help</span> -
   <span> Privacy</span> - <span>Terms</span>
   <br/>
  <span>&copy; 2022 TourRadar</span>
</div>
  </div>
</template>

<script>
import Guider from './Guider.vue';

export default {
  name: 'HomeSide',
  components: {
    Guider,
  },
};
</script>
