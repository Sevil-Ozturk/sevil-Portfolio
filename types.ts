// export interface Todo {
//   userId: string
//   id: number
//   todo: string
//   completed: boolean
//   user?: User
// }

// export interface User {
//   userId: string
//   login: {
//     uuid: string

//   }
//   picture: {
//     large: string
//     medium: string
//     thumbnail: string
//   }
//   name: {
//     first: string
//     last: string
//     title: string
//   }

// }

export type Data = User & { todos: Todo[] }

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface User {
  gender: 'male' | 'female'
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}
