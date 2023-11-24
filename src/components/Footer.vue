<script setup>
const year = new Date();
</script>

<template>
  <footer class="flex justify-center items-center text-center p-6">
    <h3 class="font-medium mt-5 font-sans">
      &copy; {{ year.getFullYear() }} SMKN 2 Banjarmasin
    </h3>
  </footer>
</template>
