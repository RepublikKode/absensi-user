<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ListBox from "../components/ListBox.vue";

const jurusan = [
  {
    name: "PPLG",
  },
  {
    name: "DKV",
  },
];

const kelas = [
  {
    name: "X",
  },
  {
    name: "XI",
  },
  {
    name: "XII",
  },
];

const a = [
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
];
</script>

<template>
  <div class="bg-white">
    <div class="flex flex-col min-h-screen justify-between">
      <div class="">
        <Navbar></Navbar>
        <main class="mt-5 flex flex-col gap-5 justify-center items-center">
          <h3 class="text-center text-xl font-bold font-sans">Kelas</h3>
          <div class="flex gap-5">
            <ListBox :item="jurusan"></ListBox>
            <ListBox :item="kelas"></ListBox>
            <ListBox :item="a"></ListBox>
          </div>
        </main>
      </div>
      <div class="">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
