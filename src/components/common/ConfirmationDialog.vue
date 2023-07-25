<template>
  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
    <div
      class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div
        class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-4 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="flex items-center">
          <div class="h-10 w-16">
            <img src="delete-stop-svgrepo-com.svg" alt="Heart Icon" />
          </div>

          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <p class="font-semibold text-gray-700 text-xl">Delete call detail</p>
            <p class="text-sm text-gray-700">
              You will lose all the information related to the call id -<span
                class="font-semibold"
                >{{ callId }}</span
              >. This action cannot be undone.
            </p>
          </div>
        </div>
        <div class="text-center md:text-right mt-4 md:flex md:justify-end">
          <button
            @click="deleteAction"
            class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
          >
            Delete
          </button>
          <button
            @click="cancelAction"
            class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['callId', 'deleteAction', 'cancelAction'])
</script>