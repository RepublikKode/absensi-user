<script setup>
import { ref } from "vue";
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/solid";

const isClicked = ref(false);

function open() {
  if (isClicked.value == false) {
    isClicked.value = true;
  } else {
    isClicked.value = false;
  }
}
</script>

<template>
  <nav class="p-6 bg-[#F5F8FD]">
    <ul class="flex items-center justify-end gap-5 font-sans">
      <li class="mr-auto">
        <a href="https://smkn2-bjm.sch.id/" class="">
          <div
            class="bg-[url(/img/smkn2.png)] w-9 h-9 bg-center bg-cover bg-no-repeat"
          ></div>
        </a>
      </li>
      <li class="flex gap-3 relative items-center">
        <a href="#" class="font-medium">Muhammad Farish Asqalani</a>
        <img
          @click="open"
          class="w-7 h-7 rounded-full"
          src="https://api.dicebear.com/7.x/initials/svg?seed=Farish"
          alt=""
        />
        <div
          v-if="isClicked == true"
          class="absolute rounded-md shadow-md flex bg-primary top-12 right-0 p-3"
        >
          <button
            class="flex items-center px-6 py-1 hover:bg-slate-200 rounded-md transition-colors duration-150"
          >
            <ArrowLeftOnRectangleIcon
              class="w-5 h-5 text-black"
            ></ArrowLeftOnRectangleIcon>
            <span class="">Logout</span>
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>
