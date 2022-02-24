<template>
  <nav class="mobilenav px-3 py-2 ">
    <div>
      <font-awesome-icon :icon="['fas', 'home']" class="mainColor" />
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'film']" class="mainColor" />
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'plus-square']" class="mainColor add mr-2" />
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'bell']" class="mainColor" />
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'user']" class="mainColor mobile" />
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
};
</script>
