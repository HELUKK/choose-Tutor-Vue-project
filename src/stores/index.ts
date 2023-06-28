import { defineStore } from 'pinia'
import type { User, ResultV0 } from '@/datasource/Type'
import axios from 'axios'
import * as consty from '@/datasource/Const'
import router from '@/router'
export const useStore = defineStore('store', () => {
  const user = ref<User>()
  const loginGuard = async (data: { number: string; password: string }) => {
    try {
      const resp = await axios.post<ResultV0<{ userRe: User }>>('login-guard', data)

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
      if()
    } catch {}
  }
})
