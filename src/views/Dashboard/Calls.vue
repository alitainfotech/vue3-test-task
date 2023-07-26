<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Recent Calls</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the calls in your account.</p>
      </div>
      <!-- <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add user
        </button>
      </div> -->
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <table class="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                >
                  Call ID
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                >
                  Application
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                >
                  from
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  to
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  answer_at
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  hangup_at
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  duration
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  cost
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  status
                </th>
                <th
                  scope="col"
                  class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(call, index) in callList" :key="call?.call_id">
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                  ]"
                >
                  {{ call?.call_id }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.application_id }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.from }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.to }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.answer_at }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.hangup_at }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.duration }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.cost }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                  ]"
                >
                  {{ call?.status }}
                </td>
                <td
                  :class="[
                    index !== callList.length - 1 ? 'border-b border-gray-200' : '',
                    'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                  ]"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ call?.call_id }}</span></a
                  >
                  |
                  <a
                    href="#"
                    class="text-red-600 hover:text-red-900"
                    @click="
                      (e) => {
                        handleDeleteAction(e, call?.call_id)
                      }
                    "
                    >Delete<span class="sr-only">, {{ call?.call_id }}</span></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
      <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div class="-mt-px flex w-0 flex-1">
          <a
            v-if="currentPage != 1"
            @click="
              (e) => {
                handlePageNoClick(e, (currentPage = currentPage - 1))
              }
            "
            href="#"
            class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Previous
          </a>
        </div>
        <div class="hidden md:-mt-px md:flex">
          <!-- <div v-if="calls.data && calls.data.length">
            <a
              v-for="(page, index) in Math.ceil(calls.total / calls.per_page)"
              :key="index"
              @click="getNextData(index + 1)"
              href="#"
              :class="[
                calls.current_page === index + 1
                  ? 'inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600'
                  : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
              >{{ index + 1 }}</a
            >
          </div> -->
          <!-- <div v-if="callList && callList.length"> -->
          <a
            v-if="currentPage > 3"
            @click="
              (e) => {
                handlePageNoClick(e, pages[0])
              }
            "
            href="#"
            :class="[
              currentPage === pages[0]
                ? 'inline-flex items-center border-t-2 bg-blue-300 border-indigo-500 px-4 pt-4 text-sm font-medium text-white'
                : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            ]"
            >{{ pages[0] }}</a
          >
          <a v-if="currentPage > 3" class="flex items-center justify-center text-2xl text-gray-400"
            >....</a
          >
          <a
            v-for="(pageNo, index) in displayedPages"
            :key="index"
            @click="
              (e) => {
                handlePageNoClick(e, pageNo)
              }
            "
            href="#"
            :class="[
              currentPage === pageNo
                ? 'inline-flex items-center border-t-2 bg-blue-300 border-indigo-500 px-4 pt-4 text-sm font-medium text-white'
                : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            ]"
            >{{ pageNo }}</a
          >
          <a
            v-if="currentPage < pages.length - 2"
            class="flex items-center justify-center text-2xl text-gray-400"
            >....</a
          >
          <a
            v-if="currentPage < pages.length - 2"
            @click="
              (e) => {
                handlePageNoClick(e, pages.length)
              }
            "
            href="#"
            :class="[
              currentPage === pageNo
                ? 'inline-flex items-center border-t-2 bg-blue-300 border-indigo-500 px-4 pt-4 text-sm font-medium text-white'
                : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            ]"
            >{{ pages[pages.length - 1] }}</a
          >
          <!-- </div> -->
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500
          hover:text-gray-700 hover:border-gray-300" -->
          <!--
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
            aria-current="page"
            >2</a
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >3</a
          >
          <span
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
            >...</span
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >8</a
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >9</a
          >
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >10</a
          >
          -->
        </div>
        <div class="-mt-px flex w-0 flex-1 justify-end">
          <a
            v-if="currentPage < Math.ceil(total / perPage)"
            @click="
              (e) => {
                handlePageNoClick(e, (currentPage = currentPage + 1))
              }
            "
            href="#"
            class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <ArrowLongRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, computed, watch } from 'vue'
import { useCallsStore } from '../../stores/CallsStore'
const callsStore = useCallsStore()
const { loading, calls, deleteStatus } = storeToRefs(callsStore)
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/20/solid'

const searchQuery = ref('')
const tableData = ref([])
const props = defineProps(['searchKey', 'handleDeleteAction'])
const pages = ref([])
const currentPage = ref(1)
const perPage = ref(20)
const total = ref(0)
onMounted(() => {
  getNextData(1)

  // v-for="(page, index) in Math.ceil(calls.total / calls.per_page)"
})
const callList = computed(() => {
  if (tableData.value?.length) {
    return tableData.value?.filter((callDetail) => {
      if (!props.searchKey) {
        return callDetail
      }
      return Object.keys(callDetail).some((key) => {
        return String(callDetail[key]).toLowerCase().indexOf(props.searchKey) > -1
      })
    })
  }
  return tableData
})
const displayedPages = computed(() => {
  if (currentPage.value === 1) {
    return pages.value.slice(currentPage.value - 1, currentPage.value + 4)
  } else if (currentPage.value === pages.value.length) {
    return pages.value.slice(currentPage.value - 5, currentPage.value + 1)
  } else if (currentPage.value >= 4 && currentPage.value <= 7) {
    return pages.value.slice(currentPage.value - 2, currentPage.value + 1)
  } else if (currentPage.value > 7) {
    return pages.value.slice(currentPage.value - 4, currentPage.value + 1)
  } else {
    return pages.value.slice(currentPage.value - 2, currentPage.value + 3)
  }
})
watch(
  calls,
  (newValue, oldValue) => {
    tableData.value = newValue.data
    currentPage.value = newValue?.current_page
    perPage.value = newValue?.per_page
    total.value = newValue?.total
    setPages()
  },
  { immediate: true }
)
watch(deleteStatus, (newVal, oldval) => {
  getNextData(currentPage.value)
})
function setPages() {
  if (total.value) {
    let numberOfPages = Math.ceil(total.value / perPage.value)
    //generate 10 pages (100 / 10)
    pages.value = []
    for (let i = 1; i <= numberOfPages; i++) {
      pages.value.push(i)
    }
  }
}
function handlePageNoClick(e, pageNo) {
  e.preventDefault()
  currentPage.value = pageNo
  getNextData(pageNo)
}
function getNextData(pageIndex) {
  callsStore.get_calls(pageIndex)
}
function handleDeleteAction(e, callId) {
  e.preventDefault()
  props.handleDeleteAction(callId)
}
</script>
