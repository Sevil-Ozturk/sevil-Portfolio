// import { useNuxtApp } from '#app'
import axios from 'axios'
import { defineStore } from 'pinia'
import type { Todo, User } from '~/types'

export const useTodoStore = defineStore('todo', () => {
  // const { $axios } = useNuxtApp()
  const todoList = ref<Todo[] | 'error' >()
  const userList = ref<User[] | 'error' >()
  // neden undefined olarak başlatıyorum?
  // çünkü bu fetch işleminin daha yapılmadığı anlamına gelir.
  // boş bir array olarak başlatsaydım; fetch işlemi daha yapılmadı mı yoksa yapıldı da boş mu geldi anlayamazdım.
  // bu şekilde kullanıcıya 'veriler yükleniyor' veya 'kayıtlı veri yok' yazılarını göstermemi sağlayan farkı elde ederim.
  // eğer fetch işleminde hata meydana geldi durumunu da veri üzerinden ele almak istiyorsan todoListin tipini <Todo[] | 'error'> yaparak catch durumunda 'error' stringini atayabilirsin.

  const fetchTodoList = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(_response => _response.json())
      .then(_data => todoList.value = _data)
  }

  const fetchUserList = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=200')
      userList.value = data.results
    }
    catch {
      userList.value = 'error'
    }
  }
  return {
    todoList,
    fetchTodoList,
    userList,
    fetchUserList,
  }
})
