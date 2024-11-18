import { defineStore } from "pinia";
import { login } from '@/service/api';
import { ElMessage } from 'element-plus'
import {localCache} from '@/utils/cache'
import { permissions } from '@/service/api';
import {getLocalRouter} from '@/utils/getLocalRouter'
import router from "@/router";
interface account {
    username:string,
    password:string
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
export const useLoginStore = defineStore('login',{
    state: () => ({
        id:0,
        token:localStorage.getItem('token') ?? "",
        username:'',
        role:'',
        userMenus:localCache.getCache('userMenus') ?? {}
    }),
    getters: {
        getLoginStore:(state) => state
    },
    actions : {
        loginAccountAction(account:account){
            return new Promise(async (resolve, reject) => {
                // 调用登录接口
                const res:response = await login('POST',account)
                // 登录成功传值
                this.id = res.proData.data.id
                this.token = res.proData.token
                this.username = res.proData.data.username
                this.role = res.proData.data.role
                ElMessage.success('登录成功')
                localCache.setCache('token',this.token)
                // 获取用户权限和菜单
                const result = await permissions('GET',(res as response).proData.data.id)
                // 将用户权限和菜单存入缓存
                this.userMenus = result as {}
                localCache.setCache('userMenus',this.userMenus)
                const routers = getLocalRouter(this.userMenus)
                routers.forEach((item) => {
                    router.addRoute('main',item)
                })
                resolve(res)
                
            })
            
        },
        loadUserMenus(){
            const routers = getLocalRouter(this.userMenus)
            routers.forEach((item) => {
                router.addRoute('main',item)
            })
        }
    }
})