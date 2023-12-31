import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
import axiosInstance from '../config.js'
import router from '../router/index.js'

import { useAuthenticationStore } from '../stores/Authentication'
const authenticationStore = useAuthenticationStore()
const { token, flashMessage } = storeToRefs(authenticationStore)

export const useCallsStore = defineStore('calls', () => {
  const calls = ref({})
  const deleteStatus = ref(false)
  const loading = ref(false)

  // function get_calls(page = 1, limit = 20) {
  //   loading.value = true
  //   axiosInstance
  //     .get('/api/call?page=' + page + '&limit=' + limit, {
  //       headers: {
  //         Authorization: 'Bearer ' + token.value
  //       }
  //     })
  //     .then((res) => {
  //       calls.value = res.data
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       if (error.response.status === 401) {
  //         authenticationStore.logout
  //       }
  //       if (error.response && error.response.status == 404) {
  //         router.push({
  //           name: '404Resource',
  //           params: { resource: 'calls' }
  //         })
  //       } else {
  //         router.push({ name: 'NetworkError' })
  //       }
  //     })
  //     .finally(() => {
  //       loading.value = false
  //       deleteStatus.value = false
  //     })
  // }
  function get_calls(params) {
    loading.value = true
    axiosInstance
      .get(`/api/call?${params}`, {
        headers: {
          Authorization: 'Bearer ' + token.value
        }
      })
      .then((res) => {
        calls.value = res.data
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          authenticationStore.logout
        }
        if (error.response && error.response.status == 404) {
          router.push({
            name: '404Resource',
            params: { resource: 'calls' }
          })
        } else {
          router.push({ name: 'NetworkError' })
        }
      })
      .finally(() => {
        loading.value = false
        deleteStatus.value = false
      })
  }
  function delete_calls(callId) {
    loading.value = true
    axiosInstance
      .delete(`/api/call/${callId}`, {
        headers: {
          Authorization: 'Bearer ' + token.value
        }
      })
      .then((res) => {
        deleteStatus.value = true
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          authenticationStore.logout
        }
        if (error.response && error.response.status == 404) {
          router.push({
            name: '404Resource',
            params: { resource: 'calls' }
          })
        } else {
          router.push({ name: 'NetworkError' })
        }
      })
      .finally(() => {
        loading.value = false
      })
  }
  return { calls, deleteStatus, loading, get_calls, delete_calls }
})
