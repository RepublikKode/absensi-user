<script setup>
import { FingerPrintIcon } from "@heroicons/vue/24/solid";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import useKelas from "../service/data/kelas";
import useAbsen from "../service/data/absen";
import { useRoute } from "vue-router";
import { onMounted, reactive, ref, watchEffect } from "vue";
import useAuth from "../service/auth";
import useMapel from "../service/data/mapel";
import useJurusan from "../service/data/jurusan";
import useWaktu from "../service/data/waktu";

const { kelas, show } = useKelas();
const { indexJurusan, jurusan } = useJurusan();
const { store, index, absen } = useAbsen();
const { user, getAuth } = useAuth();
const { indexMapel, mapel } = useMapel();
const { indexWaktu, waktu } = useWaktu();

const router = useRoute();

const tipe = [
  {
    tipe: "pjj",
  },
  {
    tipe: "pkk",
  },
];

const form = reactive({
  mapel: "",
  waktu_id: "",
  metode_pembelajaran: "",
});

const data = {
  user_id: user.id,
  kelas_id: kelas.id,
  mapel_id: form.mapel,
  waktu_id: form.waktu_id,
  metode_pembelajaran: form.metode_pembelajaran,
};

onMounted(() => {
  show(router.params.id);
  getAuth();
  index();
  indexMapel();
  indexJurusan();
  indexWaktu();
});

watchEffect(() => {
  data.mapel_id = form.mapel;
  data.waktu_id = form.waktu_id;
  data.metode_pembelajaran = form.metode_pembelajaran;
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
        <div class="flex flex-col justify-center lg:w-1/2">
          <h1 class="font-bold text-2xl mb-2">Riwayat</h1>
          <div
            class="bg-slate-200 text-center px-5 py-3 rounded-sm shadow h-40 overflow-auto"
          >
            <ul>
              <li v-for="item in kelas.absen">
                {{ item.user.nama }}
                {{ new Date(item.created_at).toLocaleDateString("en-CA") }}
                {{ item.kelas.kelas }}
                {{ item.mapel.mapel }}
                {{ item.waktu.jamke }}
                {{ item.metode_pembelajaran }}
              </li>
            </ul>
          </div>
          <form
            @submit.prevent="store(data, router.params.id)"
            class="flex flex-col lg:flex-row justify-between"
          >
            <div class="flex flex-col justify-between mt-2">
              <div class="font-semibold text-base">
                <label for="pjj">Metode Pembelajaran:</label>
                <select
                  v-model="form.metode_pembelajaran"
                  name="mapel_id"
                  id="mapel_id"
                  class="mt-1 p-2 font-medium bg-slate-100 focus:ring-indigo-500 focus:border-indigo-500 block w-52 shadow-sm text-base border-gray-300 rounded-md"
                >
                  <option v-for="item in tipe" :value="item.tipe">
                    {{ item.tipe }}
                  </option>
                </select>
              </div>
              <div class="font-semibold text-base">
                <label for="pjj">Mapel:</label>
                <select
                  v-model="form.mapel"
                  name="mapel_id"
                  id="mapel_id"
                  class="mt-1 p-2 font-medium bg-slate-100 focus:ring-indigo-500 focus:border-indigo-500 block w-52 shadow-sm text-base border-gray-300 rounded-md"
                >
                  <option v-for="item in mapel" :value="item.id">
                    {{ item.mapel }}
                  </option>
                </select>
              </div>
              <div class="font-semibold text-base">
                <label for="pjj">Jam keberapa:</label>
                <select
                  v-model="form.waktu_id"
                  name="mapel_id"
                  id="mapel_id"
                  class="mt-1 p-2 font-medium bg-slate-100 focus:ring-indigo-500 focus:border-indigo-500 block w-52 shadow-sm text-base border-gray-300 rounded-md"
                >
                  <option v-for="item in waktu" :value="item.id" class="">
                    {{ item.jamke }}
                  </option>
                </select>
              </div>
            </div>
            <div>
              <button
                class="px-6 py-2 mt-14 mx-auto shadow-md rounded-sm bg-green-500 text-white hover:bg-green-600 duration-200 transition-all"
              >
                <FingerPrintIcon class="w-20" /> Absen
              </button>
            </div>
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
