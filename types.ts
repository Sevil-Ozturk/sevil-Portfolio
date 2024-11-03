export interface Todo {
  userId: string
  id: number
  todo: string
  completed: boolean
  user?: User
}

export interface User {
  userId: string
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
