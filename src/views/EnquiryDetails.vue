<template>
  <div class="container">
    <h2>Enquiry details. ID - {{ id }}</h2>
  </div></template
>

<script>
export default {
  props: ["id"],
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
