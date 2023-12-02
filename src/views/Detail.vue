<script setup>
import { FingerPrintIcon } from "@heroicons/vue/24/solid";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import useKelas from "../service/data/kelas";
import useAbsen from "../service/data/absen";
import { useRoute } from "vue-router";
import { onMounted, reactive, ref, watchEffect } from "vue";
import useAuth from "../service/auth";

const { kelas, show } = useKelas();
const { store, index, absen } = useAbsen();
const { user, getAuth } = useAuth();

const router = useRoute();

const pjj = ref(false);

const data = {
  user_id: user.id,
  kelas_id: kelas.id,
  is_pjj: pjj.value,
};

onMounted(() => {
  show(router.params.id);
  getAuth();
  index();
});

watchEffect(() => {
  data.is_pjj = pjj.value;
});
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div>
      <Navbar />
      <main
        class="flex flex-col lg:flex-row bg-white justify-around rounded-md shadow-sm gap-5 mx-10 p-5"
      >
        <div class="flex flex-col lg:w-1/2">
          <div class="bg-[url(/bg.svg)] w-full h-60 bg-cover"></div>
          <div class="text-2xl font-bold text-center mt-5">
            {{ kelas.kelas }}
          </div>
        </div>
        <div class="flex flex-col justify-center items-center lg:w-1/2">
          <h1 class="font-bold text-2xl mb-2">Riwayat</h1>
          <div
            class="bg-slate-200 text-center px-5 py-3 rounded-sm shadow h-40 overflow-auto"
          >
            <ul>
              <li v-for="item in absen">
                {{ item.user.nama }}
                {{ new Date(item.created_at).toLocaleDateString("en-CA") }}
              </li>
            </ul>
          </div>
          <form @submit.prevent="store(data, kelas.id)" class="flex flex-col">
            <div class="">
              <input type="checkbox" v-model="pjj" id="pjj" />
              <label for="pjj">PJJ</label>
            </div>
            <button
              class="px-8 py-2 mt-5 shadow-md rounded-sm bg-green-500 text-white hover:bg-green-600 duration-200 transition-all"
            >
              <FingerPrintIcon /> Absen
            </button>
          </form>
        </div>
      </main>
      <main class="flex flex-col lg:flex-row justify-around m-10">
        <div class="flex flex-col max-w-md lg:w-1/2">
          <h1 class="font-bold text-2xl">Daftar Guru Mengajar</h1>
          <h1 class="font-normal text-sm">Guru yang sudah absen dikelas ini</h1>
          <div class="h-40 overflow-auto bg-white px-7 py-2 rounded-sm">
            <ul>
              <li
                v-for="item in kelas.absen"
                type="1"
                class="text-lg font-normal mb-2"
              >
                {{ item.user.nama }}
                {{ new Date(item.created_at) }}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
    <div class="">
      <Footer></Footer>
    </div>
  </div>
</template>
