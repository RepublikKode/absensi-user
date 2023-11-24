import { useRouter } from "vue-router";
import axios from "./axios";
import useSwal from "./swal";
import { ref } from "vue";

export default function useAuth() {
  const route = useRouter();
  const { accepted, failed, confirmed } = useSwal();
  const user = ref([]);

  async function register(payload) {
    try {
      const response = await axios.post("/api/v1/auth/register", payload);
      console.log(response.data);
      accepted(response.data.Body.message);
      setTimeout(() => {
        route.push("/login");
      }, 1200);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        failed(error.response?.data.Body.message);
      }
    }
  }

  async function login(payload) {
    try {
      const response = await axios.post("/api/v1/auth/login", payload);
      console.log(response.data);
      const token = response.data.Body.token;
      storeToken(token);
      accepted(response.data.Body.message);
      setTimeout(() => {
        route.push("/");
      }, 1200);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        failed(error.response?.data.Body.message);
      }
    }
  }

  function storeToken(token) {
    localStorage.setItem("auth_token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  function revokeToken() {
    localStorage.removeItem("auth_token");
    axios.defaults.headers.common.Authorization = "";
  }

  async function logout() {
    const response = confirmed("Logout?");

    if (response.isConfirmed) {
      try {
        await axios.post("/api/v1/auth/logout");
        revokeToken();
        setTimeout(() => {
          accepted("Logout sukses");
        }, 1200);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          failed(error.response?.data.Body.message);
        }
      }
    }
  }

  async function getAuth() {
    const response = await axios.get("/api/v1/auth/user");
    console.log(response.data);
    user.value = response.data.Body.user;
  }

  return {
    register,
    login,
    logout,
    getAuth,
  };
}
