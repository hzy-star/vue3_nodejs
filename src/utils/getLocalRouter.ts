import type { RouteRecordRaw } from "vue-router";
function loadLocalRouter() {
    const localRouter:RouteRecordRaw[] = []
    const files:Record<string,any>  = import.meta.glob('@/router/main/**/**.ts', { eager: true });
    for (const key in files) {
        if (files.hasOwnProperty(key)) { // 检查是否是自身属性
            const module = files[key].default;
            localRouter.push(module);
        }
    }
    
    return localRouter
}
// 获取本地路由
export function getLocalRouter(userMenus:any) {
    const localRouter = loadLocalRouter()
    const menus = userMenus.menus
    const routes:RouteRecordRaw[] = []
    debugger
    menus.forEach((menu: any, menuIndex: number) => {
        menu.children.forEach((child: any, childIndex: number) => {
            console.log(child);
            // if(child.path)
            const route = localRouter.find((item: any) => item.path === child.path)
            if(route) routes.push(route)
        });
    });
    return routes
    
}