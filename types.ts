export interface Todo {
  id: number
  todo: string
  completed: boolean
  user: User
}

export interface User {
  id: number
  picture: string
  name: {
    first: string
    last: string
    title: string
  }

}
