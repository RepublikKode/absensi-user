import axios from "../axios";
import { ref } from "vue";

export default function useJurusan() {
    const jurusan = ref([])

    async function indexJurusan() {
        const response = await axios.get("/api/v1/admin/jurusan")
        console.log(response.data)
        jurusan.value = response.data
    }

    return {
        jurusan,
        indexJurusan
    }
}