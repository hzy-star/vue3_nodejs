<template>
    <div class="main-menu">
        <!-- 顶部标签 -->
        <div class="main-menu__logo">
            <img class="main-menu__logo__img" src="@/assets/img/logo.png" alt="">
            <h2 class="main-menu__logo__title" v-if="!isCollapse">之一后台系统</h2>
        </div>
        <!-- 菜单 -->
        <div class="main-menu__nav">
            <el-menu active-text-color="#ffd04b" background-color="#001529" class="el-menu-vertical-demo"
                default-active="2" text-color="#fff" @select="handleSelect" :collapse="isCollapse">
                <template v-for="item in userMenus" :key="item.id">
                    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path + ''">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path + ''">
                                {{ subItem.name }}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item v-else :index="item.path + ''">
                        {{ item.name }}
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLoginStore } from '@/stores/login/login'
import router from '@/router';
defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    }
})

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus.menus
console.log('登录用户菜单权限', userMenus);
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    router.push(key)
}
</script>

<style scoped>
.main-menu {
    height: 100%;
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
    }

    .main-menu__logo__title {
        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        white-space: nowrap;
        /* 防止文字换行 */
    }
}

.el-menu {
    border-right: none;
    user-select: none;
}

.el-sub-menu {
    .el-sub-item {
        padding-left: 50px !important;
        background-color: #0c2135;
    }

    .el-sub-item:hover {
        background-color: #fff;
    }

    .el-sub-item.is-active {
        background-color: #0a60bd;
    }
}
</style>