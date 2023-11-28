<script setup>
  import { FingerPrintIcon } from "@heroicons/vue/24/solid";
  import Footer from "../components/Footer.vue";
  import Navbar from "../components/Navbar.vue";

  const kelas = [
    {
      nama: "XII PPLG B"
    }
  ]

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
    <div>
      <Navbar />
      <main class="flex flex-col lg:flex-row bg-white justify-around rounded-md shadow-sm gap-5 mx-10 p-5">
        <div v-for="namaKelas in kelas" :key="namaKelas.nama" class="flex flex-col lg:w-1/2">
          <div class="bg-[url(/bg.svg)] w-full h-60 bg-cover"></div>
          <div class="text-2xl font-bold text-center mt-5">
            {{ namaKelas.nama }}
          </div>
        </div>
        <div class="flex flex-col justify-center items-center lg:w-1/2">
          <h1 class="font-bold text-2xl mb-2">Riwayat</h1>
          <div class="bg-slate-200 text-center px-5 py-3 rounded-sm shadow h-40 overflow-auto">
            <ul>
              <li v-for="item in absen" :key="item.jam">
                {{ item.nama }} {{ item.jam }}
              </li>
            </ul>
          </div>
          <button
            class="px-8 py-2 mt-5 shadow-md rounded-sm bg-green-500 text-white hover:bg-green-600 duration-200 transition-all">
            <FingerPrintIcon /> Absen
          </button>
        </div>
      </main>
      <main class="flex flex-col lg:flex-row justify-around m-10">
        <div class="flex flex-col mb-5 lg:w-1/2">
          <h1 class="font-bold text-2xl mb-2">Detail Kelas</h1>
          <div class="max-w-full lg:max-w-xl">
            <p class="break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga quos temporibus
              facilis atque molestiae quidem doloribus. Nam, dicta quasi? Voluptates mollitia maxime dolorem accusamus
              numquam quos iste, quas ab, quis nam, distinctio facilis in. Enim nobis, soluta nostrum omnis aperiam
              maxime pariatur libero impedit sapiente dolorum! Consequatur voluptatibus odio eaque assumenda nobis fugit
              illum minima excepturi voluptate non a rerum, dignissimos tenetur nemo quia nihil, voluptas ducimus ipsa
              corrupti! Minima earum laboriosam officia, pariatur error assumenda cumque dolorem debitis, animi, quam
              eos? Architecto vel nam amet cumque, doloremque sint. Hic natus id iusto quaerat modi maxime voluptas
              soluta animi.</p>
          </div>
        </div>
        <div class="flex flex-col max-w-md lg:w-1/2">
          <h1 class="font-bold text-2xl">Daftar Guru Mengajar</h1>
          <h1 class="font-normal text-sm">Guru yang sudah absen dikelas ini</h1>
          <div class="h-40 overflow-auto bg-white px-7 py-2 rounded-sm">
            <ul>
              <li v-for="hadir in absen" :key="hadir.jam" type="1" class="text-lg font-normal mb-2">
                {{ hadir.jam }}
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