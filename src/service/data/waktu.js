import axios from "../axios";
import { ref } from "vue";

export default function useWaktu() {
    const waktu = ref([])

    async function indexWaktu() {
        const response = await axios.get("/api/v1/admin/waktu")
        waktu.value = response.data
    }

    return {
        waktu,
        indexWaktu,
    }
}