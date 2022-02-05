<template>
<div class="guider mt-2">
  <div class="row">
    <div class="col-4">
        <div class="guider-profile"/>
    </div>
    <div class="col-8 mt-2">
      <h5>Umuhuza Clever</h5>
      <p class="card-text"> Rating:
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        </p>
        <h6>Clubist</h6>
    </div>
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

<style>

.guider{
  background: #6c5dd3;
  padding: 15px 5px;
  width:320px;
  margin-left:2%;
  border-radius: 15px;
  height:130px;
}
.guider-profile{
  background-image: url("../assets/profile.jpg");
  top:15px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-size: cover;
}
h5{
  color: #ffff;
  font-weight: bolder !important;
}
h6{
  font-weight: bolder !important;
  color:black
}
</style>
