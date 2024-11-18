<template>
  <div class="pane-account">
    <el-form ref="ruleFormRef" label-width="60px" :model="form" :rules="rules" status-icon>
      <el-form-item label="账号" size="large" prop="account">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码" size="large" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useLoginStore } from '@/stores/login/login'
import { useRouter } from 'vue-router';
import { localCache } from '@/utils/cache';
const router = useRouter();

const form = reactive({
  account: localCache.getCache('account') || '',
  password: localCache.getCache('password') || ''
})


interface RuleForm {
  account: string
  password: string
}

interface response {
    proData:{
        data:{
            id:number,
            username:string,
            role:string
        },
        token:string
    }
}
const rules = reactive<FormRules<RuleForm>>({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 5, message: '账号长度应为3-5个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur', },
    { min: 8, max: 16, message: '密码长度应为8-16个字符', trigger: 'blur' },
  ],
})
const ruleFormRef = ref<FormInstance>()
const loginStore = useLoginStore()
function loginAccount(isRemPwd: boolean) {
  ruleFormRef.value?.validate(async (valid) => {
    if (valid) {
      const { account, password } = form
      const username = account
      console.log(form)
      // const res = await login('POST', )
      loginStore.loginAccountAction({username,password}).then(async res =>{
        console.log(res);
        if(isRemPwd){
          localCache.setCache('account', account)
          localCache.setCache('password', password)
        }else{
          localCache.removeCache('account')
          localCache.removeCache('password')
        }
        
        router.push('/main')
      })
    } else {
      ElMessage.error('账号或密码错误')
    }
  })
}

defineExpose({
  loginAccount
})
</script>
