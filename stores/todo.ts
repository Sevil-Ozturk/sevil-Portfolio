// import { useNuxtApp } from '#app'
import axios from 'axios'
import { defineStore } from 'pinia'
import type { Data, Todo, User } from '~/types'

export const useTodoStore = defineStore('todo', () => {
  // const { $axios } = useNuxtApp()
  // const todoList = ref<Todo[] | 'error' >([])
  // const userList = ref<User[] | 'error' >([])
  // const combinedData = ref<Array<{ user: User, task: Todo | null }>>([])
  // neden undefined olarak başlatıyorum?
  // çünkü bu fetch işleminin daha yapılmadığı anlamına gelir.
  // boş bir array olarak başlatsaydım; fetch işlemi daha yapılmadı mı yoksa yapıldı da boş mu geldi anlayamazdım.
  // bu şekilde kullanıcıya 'veriler yükleniyor' veya 'kayıtlı veri yok' yazılarını göstermemi sağlayan farkı elde ederim.
  // eğer fetch işleminde hata meydana geldi durumunu da veri üzerinden ele almak istiyorsan todoListin tipini <Todo[] | 'error'> yaparak catch durumunda 'error' stringini atayabilirsin.

  const dataList = ref<Data[]>([])

  const fetchDataList = async () => {
    // const _todoList: Todo[] = []
    // const _userList: User[] = []

    await fetch('https://randomuser.me/api/?results=40')
      .then(_response => _response.json())
      .then((_response) => {
        const users: User[] = _response.results
        users.forEach(async (user) => {
          await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(_response => _response.json())
            .then((_response) => {
              const todos: Todo[] = _response
              const limitedTodos = todos.slice(0, Math.floor(Math.random() * (30 - 10 + 1)) + 10)
              dataList.value.push({ ...user, todos: limitedTodos })
            })
        })
      })

    // await fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(_response => _response.json())
    //   .then((_data) => { _todoList.push(..._data) })
  }

  // const fetchUserList = async () => {
  //   const userResponse = await axios.get('https://randomuser.me/api/?results=200')
  //   try {
  //     userList.value = userResponse.data.results.map((user) => ({
  //       ...user,
  //       userId: user.login.uuid, // her kullanıcı için bir id oluşturmuş olduk.
  //     }))
  //   }
  //   catch (error) {
  //     userList.value = 'error'
  //     console.error('User listesi alınırken hata oluştu:', error)
  //   }
  // }
  // // BİRÇOK KAYNAK ARAŞTIRDIM FAKAT BU KISMI NASIL YAPACAĞIMI BULAMADIM... TABİKİİİ CHATCPT DEN YARDIM ALDIM SFVKNFS AMA HATA VERİYOR
  // // SÜREKLİ BİR DE TODO.VUE SAYFAMDA DA HALA BİR HATA VAR ONU DA ÇÖZEMEDİM (USER VE LOGİN ALTI ÇİZİLİ OLAN KISIMDAN BAHSEDİYORUM...)
  // const mergeUserWithTodo = () => {
  //   combinedData.value = userList.value.map((user) => {
  //     const assignedTodo = todoList.value.find(todo => todo.userId === user.userId) || null
  //     return {
  //       user,
  //       task: assignedTodo ? { id: assignedTodo.id, title: assignedTodo.title, completed: assignedTodo.completed } : null,
  //     }
  //   })
  // }

  // const fetchData = async () => {
  //   await Promise.all([fetchTodoList(), fetchUserList()])
  //   mergeUserWithTodo()
  // }
  return {
    dataList,
    fetchDataList,
    // todoList,
    // fetchTodoList,
    // userList,
    // fetchUserList,
    // mergeUserWithTodo,
    // fetchData,
  }
})
