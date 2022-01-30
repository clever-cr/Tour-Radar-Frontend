<template>
 <div class="col-6 mt-5">
    <div class="card " style="width: 22rem;">
        <div class="img-box"/>
  <div class="card-body">
    <h5 class="card-title">Akagera National Park</h5>
    <p class="card-text"> National Park</p>
    <p class="card-text"> Rating:
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        <font-awesome-icon :icon="['fas', 'star']" class="star" />
        </p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'HomeSide',
};
</script>

<style>
.img-box{
    background-image: url("../assets/akagera.jpg");
    width: 100%;
    height: 300px;
    background-size: cover;
}
p{
 margin-bottom: 0.3rem !important;
 font-weight: 700;
}
.card-title {
    margin-bottom: 0.3rem !important;
    font-weight: bold;
}
.star{
    color: yellow;
}
</style>
