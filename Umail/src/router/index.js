import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const index = ()=>import('../pages/index')
const home = ()=>import('../pages/home')
const cate = ()=>import('../pages/cate')
const goodslist = ()=>import('../pages/goodslist')
const mine = ()=>import('../pages/mine')
const cart = ()=>import('../pages/cart')
const login = ()=>import('../pages/cate')
const register = ()=>import('../pages/register')

export default new Router({
  routes: [
   {
     path:'/',
     component:index,
     redirect:'/home',
     children:[
       {
         path:'home',
         component:home,
       },
       {
        path:'cart',
        component:cart,
      },
      {
        path:'cate',
        component:cate,
      },
      {
        path:'mine',
        component:mine,
      },
     ],
   },
   {
     path:'/login',
     component:login,
   },
   {
     path:'/register',
     component:register
   },
   {
     path:'/goodslist',
     component:goodslist
   },
   {
     path:'*',
     redirect:'/login'
   }
  ]
})
