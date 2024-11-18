<template>
    <div class="login-panel">
        <!-- 标题 -->
        <h1 class="title">后台管理系统</h1>
        <!-- 中间的tabs -->
        <div class="tabs">
            <el-tabs type="border-card" stretch>
                <el-tab-pane label="账号登录">
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <UserFilled />
                            </el-icon>
                            <span>账号登录</span>
                        </span>
                    </template>
                    123
                </el-tab-pane>
                <el-tab-pane label="手机登录">
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <Iphone />
                            </el-icon>
                            <span>账号登录</span>
                        </span>
                    </template>
                    33
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 底部 -->
        <div class="controls">
            <el-checkbox v-model="isRemPwd">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button class="login-btn" size="large" type="primary">登录</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isRemPwd = ref(false)
</script>

<style scoped>
.login-panel {
    width: 330px;
    /* 透明 */
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .tabs {
        .el-tabs__content {
            padding: 32px;
            color: #6b778c;
            font-size: 32px;
            font-weight: 600;
        }
        .custom-tabs-label .el-icon {
            vertical-align: middle;
        }
        .custom-tabs-label span {
            vertical-align: middle;
            margin-left: 4px;
        }
        .custom-tabs-label {
            display: flex;
            align-items: center;
        }
    }
    .title {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .login-btn {
        width: 100%;
    }
}
</style>