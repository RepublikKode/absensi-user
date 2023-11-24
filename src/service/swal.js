import Swal from "sweetalert2";

export default function useSwal() {
  function accepted(text) {
    Swal.fire({
      icon: "success",
      timer: 1200,
      showCloseButton: false,
      showConfirmButton: false,
      text: text,
    });
  }

  function failed(text) {
    Swal.fire({
      icon: "error",
      timer: 1200,
      showCloseButton: false,
      showConfirmButton: false,
      text: text,
    });
  }

  function confirmed(text) {
    Swal.fire({
      icon: "warning",
      timer: 1200,
      showCloseButton: false,
      showConfirmButton: true,
      showDenyButton: true,
      text: text,
    });
  }

  return {
    accepted,
    failed,
    confirmed,
  };
}
