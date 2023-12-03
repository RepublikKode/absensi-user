import { ref } from "vue";
import axios from "../axios";
import useSwal from "../swal";
import router from "../../router";

export default function useMapel() {
  const mapel = ref([]);
  const { accepted, rejected, confirm } = useSwal();

  async function indexMapel() {
    const response = await axios.get("/api/v1/mapel");
    console.log(response.data);
    mapel.value = response.data.mapel;
  }

  async function store(payload) {
    try {
      const response = await axios.post("/api/v1/mapel", payload);
      console.log(response.data);
      accepted(response.data.message);
      router.back();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        rejected(error.response?.data);
      }
    }
  }

  async function update(payload, id) {
    const response = await confirm("yakin ubah data ini?");

    if (response.isConfirmed) {
      try {
        const response = await axios.put(`/api/v1/mapel/${id}`, payload);
        console.log(response.data);
        accepted(response.data.message);
        router.back();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          rejected(error.response?.data);
        }
      }
    }
  }

  async function show(id) {
    const response = await axios.get(`/api/v1/mapel/${id}`);
    console.log(response.data);
    mapel.value = response.data.mapel;
  }

  async function destroy(id) {
    const response = await confirm("Hapus data ini?");

    if (response.isConfirmed) {
      try {
        const response = await axios.delete(`/api/v1/mapel/${id}`);
        console.log(response.data);
        accepted(response.data.message);
        router.back();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          rejected(error.response?.data);
        }
      }
    }
  }

  return {
    indexMapel,
    mapel,
    update,
    show,
    store,
    destroy,
  };
}
