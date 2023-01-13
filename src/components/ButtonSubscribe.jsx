import { useState } from "react";
import { ToastContainer, toast, Zoom, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Button() {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <>
      <button
        className={
          !subscribe
            ? "bg-green-500 p-2 rounded-full"
            : "bg-red-500 p-2 rounded-full"
        }
        onClick={() => {
          setSubscribe(!subscribe);
          subscribe
            ? toast.error("Se quito la suscripcion", {
                closeOnClick: false,
              })
            : toast.success("suscrito", {
                closeOnClick: false,
              });
        }}
      >
        {subscribe ? "Ya estas suscrito" : "Suscribete"}
      </button>
      <ToastContainer
        autoClose={1500}
        pauseOnFocusLoss={false}
        theme="dark"
        transition={Flip}
      />
    </>
  );
}
