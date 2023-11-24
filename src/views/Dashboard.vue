<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ListBox from "../components/ListBox.vue";
import Card from "../components/Card.vue";

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

const data = [
  {
    img: "/bg.svg",
    title: "XI PPLG B",
    path: "#",
  },
  {
    img: "/bg.svg",
    title: "XI PPLG A",
    path: "#",
  },
  {
    img: "/bg.svg",
    title: "XII PPLG A",
    path: "#",
  },
];

const row = [
  {
    name: "Kelas",
  },
  {
    name: "Jurusan",
  },
];
</script>

<template>
  <div class="bg-primary">
    <div class="flex flex-col min-h-screen justify-between">
      <div class="">
        <Navbar></Navbar>
        <main class="mt-5 flex flex-col gap-5 justify-center items-center">
          <h3 class="text-center text-xl font-bold font-sans">Absensi</h3>
          <div class="flex gap-5">
            <ListBox :item="jurusan"></ListBox>
            <ListBox :item="kelas"></ListBox>
            <ListBox :item="a"></ListBox>
          </div>
          <div class="flex flex-col gap-4" v-for="item in row">
            <h3 class="text-center text-xl font-bold font-sans">
              {{ item.name }}
            </h3>
            <div class="flex gap-4">
              <Card
                v-for="item in data"
                :img="item.img"
                :title="item.title"
                :path="item.path"
              ></Card>
            </div>
          </div>
        </main>
      </div>
      <div class="">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
