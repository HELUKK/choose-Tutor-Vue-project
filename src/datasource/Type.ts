export interface User {
  name: string
  id: string
  password: string
  role: string
  unit?: string[]
  maxsize?: number
}

export interface ResultV0<T> {
  code: number
  message?: string
  data: T
}
