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
      accepted(response.data.Body.message);
      setTimeout(() => {
        route.push("/login");
      }, 1200);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        failed(error.response?.data.Body.message);
      }
    }
  }

  async function login(payload) {
    try {
      const response = await axios.post("/api/v1/auth/login", payload);
      const token = response.data.data.token;
      console.log(response.data);
      storeToken(token);
      accepted(response.data.data.message);
      setTimeout(() => {
        route.push("/dashboard");
      }, 1200);
    } catch (error) {
      if (axios.isAxiosError(error)) {
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

    if ((await response).isConfirmed) {
      try {
        await axios.post("/api/v1/auth/logout");
        revokeToken();
        setTimeout(() => {
          accepted("Logout sukses");
          route.push("/");
        }, 1200);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          failed(error.response?.data.Body.message);
        }
      }
    }
  }

  async function getAuth() {
    const response = await axios.get("/api/v1/profile");
    user.value = response.data;
  }

  return {
    register,
    login,
    logout,
    getAuth,
    user,
  };
}
