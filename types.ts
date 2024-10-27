export interface Todo {
  id: number
  todo: string
  completed: boolean
  user: User
}

export interface User {
  userid: number
  picture: string
  name: string

}
