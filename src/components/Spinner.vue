<template>
  <div class="container">
    <div class="spin"></div>
  </div>
</template>

<style scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  animation: spin 1s ease infinite;
}
.container {
  min-height: 88vh;
}
@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>
