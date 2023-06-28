import type { User } from '@/datasource/Type'

export function listStudent() {
  const studentlist: User[] = [
    { name: 'a', id: '202021001', password: '202021001', role: 'student', unit: [], maxsize: 1 },
    { name: 'b', id: '202021002', password: '202021002', role: 'student', unit: [], maxsize: 1 },
    { name: 'c', id: '202021003', password: '202021003', role: 'student', unit: [], maxsize: 1 },
    {
      name: 'd',
      id: '202021004',
      password: '202021004',
      role: 'student',
      unit: ['102021001'],
      maxsize: 1
    }
  ]
  return studentlist
}

export function listTeacher() {
  const teacherlist: User[] = [
    {
      name: 'ac',
      id: '102021001',
      password: '102021001',
      role: 'teacher',
      unit: ['202021004'],
      maxsize: 3
    },
    { name: 'bc', id: '102021002', password: '102021002', role: 'teacher', unit: [], maxsize: 3 },
    { name: 'cc', id: '102021003', password: '102021003', role: 'teacher', unit: [], maxsize: 3 }
  ]
  return teacherlist
}
