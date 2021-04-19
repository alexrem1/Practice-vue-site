<template>
  <div class="container">
    <div class="d-flex justify-content-evenly">
      <router-link :to="{ name: 'Activity' }">
        <h1>Activity</h1>
      </router-link>
      <router-link :to="{ name: 'Details' }">
        <h1>Details</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding-top: 115px;
  height: 75vh;
}
</style>
