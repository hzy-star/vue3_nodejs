<template>
  <div class="login">
    <loginPanel />
  </div>
</template>


<script setup lang="ts">
import loginPanel from './c-cpns/login-panel.vue';

</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/img/download.png') no-repeat center center;
}
</style>