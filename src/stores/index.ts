import { defineStore } from 'pinia'
import type { User, ResultVO } from '@/datasource/Type'
import axios from 'axios'
import * as consty from '@/datasource/Const'
import router from '@/router'
import { ElMessage } from 'element-plus'

export const useStore = defineStore('store', () => {
  const user = ref<User>()
  const exception = ref('')
  const loginGuard = async (data: { number: string; password: string }) => {
    try {
      const resp = await axios.post<ResultVO<{ userRe: User }>>('login-guard', data)

      user.value = resp.data.data.userRe
      let path = '/login'
      switch (user.value.role) {
        case consty.STUDENT:
          path = '/student'
          sessionStorage.setItem('token', resp.headers.token)
          sessionStorage.setItem('role', resp.headers.role)
          break
        case consty.TEACHER:
          path = '/teacher'
          sessionStorage.setItem('token', resp.headers.token)
          sessionStorage.setItem('role', resp.headers.role)
          break
      }
      if (path === '/login') ElMessage({ message: '用户名密码错误', type: 'error' })
      else ElMessage({ message: '欢迎您', type: 'success' })
      router.push(path)
    } catch (error) {
      //
      ElMessage({ message: '登录异常', type: 'error' })
    }
  }
  return {
    exception,
    user,
    loginGuard
  }
})
