export interface User {
  name: string
  id: string
  password: string
  role: string
  unit?: string[]
  maxsize?: number
}

export interface ResultVO<T> {
  code: number
  message?: string
  data: T
}
