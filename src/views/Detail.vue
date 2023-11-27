<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

const absen = [
  {
    nama: "lorem",
    mapel: "lorem",
    jam: new Date(),
  },
  {
    nama: "lorem",
    mapel: "lorem",
    jam: new Date(),
  },
  {
    nama: "lorem",
    mapel: "lorem",
    jam: new Date(),
  },
];
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div class="">
      <Navbar></Navbar>
      <main class="flex flex-col gap-5">
        <div
          class="bg-[url(/bg.svg)] w-screen h-96 bg-center bg-no-repeat bg-cover"
        ></div>
        <div class="flex gap-12 flex-col justify-center items-center">
          <button
            class="px-12 py-1.5 rounded-md bg-green-500 text-white hover:bg-green-600 duration-200 transition-all"
          >
            Absen
          </button>
          <div class="">
            <ul>
              <li v-for="item in absen">
                {{ item.nama }}
                {{ item.jam }}
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
