import axios from "../axios";
import { ref } from "vue";
import useSwal from "../swal";
import { useRouter } from "vue-router";

export default function useAbsen() {
  const absen = ref([]);
  const { confirmed, accepted, failed } = useSwal();

  async function store(payload, id) {
    const response = await confirmed("Mengajar dikelas ini?");
    const router = useRouter();

    if (response.isConfirmed) {
      try {
        console.log(payload);
        const response = await axios.post(`/api/v1/absen/${id}`, payload);
        console.log(response.data);
        accepted("Absensi berhasil disimpan")
        setTimeout(() => {
          router.back();
        }, 1200);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          failed(error.response?.data);
        }
      }
    }
  }

  async function index() {
    const response = await axios.get("/api/v1/absen");
    console.log(response.data);
    absen.value = response.data.data;
  }

  return {
    store,
    index,
    absen,
  };
}
