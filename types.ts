export interface Todo {
  userId: number
  id: number
  todo: string
  completed: boolean
  user?: User
}

export interface User {
  login: {
    uuid: string

  }
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
