import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserLogin from "../components/common/UserLogin"
import EditorDemo from "../components/common/EditorDemo";

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editorDemo',
      name: 'EditorDemo',
      component: EditorDemo
    }
  ]
})
