import type { ResultVO, User } from '@/datasource/Type'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { listStudent, listTeacher } from '@/datasource/DataSource'
import * as consty from '@/datasource/Const'
const mock = new MockAdapter(axios)
// 过滤http前缀请求
mock.onAny(/^http/).passThrough()
mock.onAny(/^\/api\//).passThrough()

function path(p: string) {
  const reg = p.replace(/{\w+}/g, '(\\w+)').replace(/\//g, '\\/') + '$'
  return new RegExp(reg)
}
const resultvo: ResultVO<{}> = {
  code: 200,
  data: {}
}
mock.onGet('student-list').reply((c) => {
  const students = listStudent()
  resultvo.code = 200
  resultvo.data = students
  resultvo.message = 'hqxslb'

  return [200, resultvo]
})

mock.onGet('teacher-list').reply((c) => {
  const teachers = listTeacher()
  resultvo.code = 200
  resultvo.data = teachers
  resultvo.message = 'hqjslb'

  return [200, resultvo]
})
mock.onPost('login-guard').reply((c) => {
  const data = c.data
  const { id, password } = JSON.parse(data)
  let index = -1
  const students = listStudent()
  index = students.findIndex((i) => (i.id = id))
  if (index != -1) {
    resultvo.code = 200
    resultvo.data = students[index]
    resultvo.message = 'xsdl'
    return [
      200,
      resultvo,
      {
        token: JSON.stringify(students[index]),
        role: consty.STUDENT
      }
    ]
  }
  const teachers = listTeacher()
  index = teachers.findIndex((i) => (i.id = id))
  if (index != -1) {
    resultvo.code = 200
    resultvo.data = teachers[index]
    resultvo.message = 'jsdl'
    return [
      200,
      resultvo,
      {
        token: JSON.stringify(students[index]),
        role: consty.STUDENT
      }
    ]
  }
  resultvo.code = 401
  resultvo.message = 'mmcw'
  return [200, resultvo]
})
