<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ListBox from "../components/ListBox.vue";
import Card from "../components/Card.vue";
import useKelas from "../service/data/kelas";
import { onMounted } from "vue";

const { index, kelas } = useKelas();

onMounted(() => {
  index();
});

setTimeout(() => {
  console.table(kelas.value);
}, 1200);
</script>

<template>
  <div class="bg-primary">
    <div class="flex flex-col min-h-screen justify-between">
      <div class="">
        <Navbar></Navbar>
        <main class="mt-5 flex flex-col gap-5 justify-center items-center">
          <h3 class="text-center text-xl font-bold font-sans">Absensi</h3>
          <div class="flex flex-wrap justify-center items-center gap-5">
            <ListBox :item="kelas"></ListBox>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-center text-xl font-bold font-sans"></h3>
            <div class="flex flex-wrap justify-center items-center gap-4">
              <Card
                v-for="item in kelas"
                :key="item.id"
                :title='item.kelas + " " + item.jurusan.jurusan + " " + item.alphabet'
                :path="item.id"
                :img="'/bg.svg'"
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
