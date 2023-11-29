import axios from "../axios";
import { ref } from "vue";
import useSwal from "../swal";

export default function useAbsen() {
  const absen = ref([]);
  const { confirmed, accepted, failed } = useSwal();

  async function store(payload, id) {
    const response = await confirmed("Mengajar dikelas ini?");

    if (response.isConfirmed) {
      try {
        const response = await axios.post(`/api/v1/absen/${id}`, payload);
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          failed(error.response?.data);
        }
      }
    }
  }

  return {
    store,
  };
}
