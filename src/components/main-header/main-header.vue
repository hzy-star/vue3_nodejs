<template>
  <div class="main-header">
    <div class="flex-grow">
      <div class="menu-icon" @click="$emit('foldChange', !isFold)">
        <el-icon>
          <component :is="isFold ? 'Expand' : 'Fold'"></component>
        </el-icon>
      </div>
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="flex-center">
      <el-badge :value="1" :max="99" class="item">
        <el-icon size="20">
          <ChatDotRound />
        </el-icon>
      </el-badge>

      <div class="main-menu__logo">
        <img class="main-menu__logo__img" src="@/assets/img/logo.png" alt="">
        <el-dropdown @command="handleCommand">
          <h4 class="el-dropdown-link">
            管理员
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </h4>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
              <el-dropdown-item command="person">个人中心</el-dropdown-item>
              <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

// 退出登录
import { useRouter } from 'vue-router';
import { localCache } from '@/utils/cache';
const router = useRouter();
const handClick = () => {
  localCache.removeCache('token');
  ElMessage({
    message: '退出登录成功',
    type: 'success',
  })
  router.push('/login');
};


defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

const handleCommand = (command: string | number | object) => {
  if(command === 'logOut') { //退出登录
    handClick()
  }
}
</script>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .flex-grow {
    display: flex;
    align-items: center;
  }
}

.menu-icon {
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}

.flex-center {
  display: flex;
  align-items: center;

  .item {
    margin-top: 10px;
    margin-right: 10px;
  }

  .main-menu__logo {
    display: flex;
    align-items: center;
    padding: 10px 20px;

    /* border-bottom: 1px solid #0c2135; */
    .main-menu__logo__img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }

    .example-showcase .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    }
  }
}
</style>