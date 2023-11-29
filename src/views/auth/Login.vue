<script setup>
import { UserIcon, LockClosedIcon } from "@heroicons/vue/24/solid";
import useAuth from "../../service/auth";
import { reactive } from "vue";

const year = new Date();
const { login } = useAuth();
const forms = reactive({
  username: "",
  password: "",
});

function doLogin() {
  login({ ...forms });
}
</script>

<template>
  <div class="bg-[url(/img/bgauth.png)] w-screen h-screen">
    <div class="flex justify-center items-center min-h-screen">
      <div class="flex flex-col gap-8">
        <div class="flex gap-3 items-center justify-center">
          <div
            class="bg-[url(/img/smkn2.png)] w-12 h-12 bg-center bg-cover bg-no-repeat"
          ></div>
          <h3 class="text-xl font-sans font-medium">
            Absensi Guru <span class="font-normal">v.1.0</span>
          </h3>
        </div>
        <div class="flex justify-center items-center flex-col gap-4">
          <div
            class="p-6 shadow-lg rounded-t-md bg-white border-t-4 border-t-red-500 max-w-md"
          >
            <h3 class="font-sans font-medium text-center">
              Masuk untuk memulai sesi Anda
            </h3>
            <div class="border-b-2 border-b-gray-300 mt-3 w-full"></div>
            <form @submit.prevent="doLogin">
              <div class="flex flex-col gap-3 mt-5">
                <div class="relative">
                  <input
                    v-model="forms.username"
                    required
                    type="text"
                    class="border-2 w-80 border-gray-200 py-1.5 px-2 focus:outline-sky-500"
                    placeholder="Nama Pengguna"
                  />
                  <UserIcon
                    class="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
                  ></UserIcon>
                </div>
                <div class="relative">
                  <input
                    v-model="forms.password"
                    required
                    type="password"
                    class="border-2 w-80 border-gray-200 py-1.5 px-2 focus:outline-sky-500"
                    placeholder="Kata Sandi"
                  />
                  <LockClosedIcon
                    class="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
                  ></LockClosedIcon>
                </div>
              </div>
              <div class="flex justify-between mt-4">
                <div class="flex gap-2 items-center">
                  <input type="checkbox" class="p-6" name="check" id="check" />
                  <label for="check" class="font-medium">Ingat Saya</label>
                </div>
                <button
                  class="px-7 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <p class="text-gray-600 text-xs">
            &copy; {{ year.getFullYear() }} SMKN 2 Banjarmasin
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
