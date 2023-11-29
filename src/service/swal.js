import Swal from "sweetalert2";

export default function useSwal() {
  async function confirmed(text) {
    const response = await Swal.fire({
      text: text == null ? "Apa Anda Yakin?" : text,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#fb923c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin",
      cancelButtonText: "Tidak",
    });

    return response;
  }

  async function accepted(text) {
    await Swal.fire({
      // position: 'top-end',
      icon: "success",
      // title: 'Berhasil.',
      text: text == null ? "Data Telah Disimpan!" : text,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  async function failed(text = null) {
    await Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan.",
      text: text == null ? "Segera hubungi administrator anda" : text,
    });
  }

  return {
    confirmed,
    accepted,
    failed,
  };
}
