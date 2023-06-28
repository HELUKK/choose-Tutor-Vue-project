import type { ResultV0, User } from '@/datasource/Type'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { listStudent, listTeacher } from '@/datasource/DataSource'
const mock = new MockAdapter(axios)
// 过滤http前缀请求
mock.onAny(/^http/).passThrough()
mock.onAny(/^\/api\//).passThrough()

function path(p: string) {
  const reg = p.replace(/{\w+}/g, '(\\w+)').replace(/\//g, '\\/') + '$'
  return new RegExp(reg)
}
const resultv0: ResultV0<{}> = {
  code: 200,
  data: {}
}
mock.onGet('student-list').reply(() => {
  const students = listStudent()
  resultv0.code = 200
  resultv0.data = students
  resultv0.message = 'hqxslb'

  return [200, resultv0]
})

mock.onGet('teacher-list').reply(() => {
  const teachers = listTeacher()
  resultv0.code = 200
  resultv0.data = teachers
  resultv0.message = 'hqjslb'

  return [200, resultv0]
})
