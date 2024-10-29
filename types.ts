export interface Todo {
  id: number
  todo: string
  completed: boolean
  user: User
}

export interface User {
  id: number
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  name: {
    first: string
    last: string
    title: string
  }

}
