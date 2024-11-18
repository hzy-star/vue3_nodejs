<template>
  <div class="main">
    <!-- <el-button @click="handClick">退出</el-button> -->
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '200px'">
        <main-menu :isCollapse="isFold"></main-menu>
      </el-aside>
      <el-container>
        <el-header>
          <main-header :isFold="isFold" @foldChange="foldChange"></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import mainHeader from '@/components/main-header/main-header.vue';
import mainMenu from '@/components/main-menu/main-menu.vue';


const isFold = ref(false);
const foldChange = (fold: boolean) =>{
  isFold.value = fold
}
</script>

<style scoped>
.main {
  height: 100%;
}
.main-content {
  height: 100%;
  .el-aside {
    background-color:#001529;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    cursor: pointer;
    transition: width 0.3s linear;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    background-color:rgb(242, 247, 246);
    border-bottom: 1px solid #ccc;
  }
  .el-main {
    background-color:rgb(242, 247, 246);
  }
}

</style>