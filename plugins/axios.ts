import axios from 'axios'
// `${config.public.randomRefId}`
export default defineNuxtPlugin(async () => {
  const axiosInstance = axios.create({
    baseURL: `https://randomuser.me/api/`,
  })
  return {
    provide: {
      axios: axiosInstance,
    },
  }
})
