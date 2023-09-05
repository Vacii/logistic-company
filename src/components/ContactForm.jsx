import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = (animation) => {
  const form = useRef(null);
  const name = useRef(null);
  const mail = useRef(null);
  const message = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await toast.promise(
        emailjs.sendForm("TODO", "TODO", form.current, "TODO"),
        {
          pending: "Email se odesílá...", // Displayed while the promise is pending
          success: "Email byl úspěšně odeslán! 🙌🏻", // Displayed on success
          error: "Email se nepodařilo odeslat. 👎🏻", // Displayed on error
        }
      );

      console.log(result.text);
      name.current.value = "";
      mail.current.value = "";
      message.current.value = "";
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-4 w-[40%]"
      >
        <input
          type="text"
          name="user_name"
          ref={name}
          placeholder="Type your name"
          className="px-3 py-3 w-full shadow-lg rounded-xl"
        />
        <input
          type="email"
          name="user_email"
          ref={mail}
          placeholder="Type your email"
          className="px-3 py-3 w-full shadow-lg rounded-xl"
        />
        <textarea
          name="message"
          ref={message}
          className="px-3 py-3 h-[200px] w-full resize-none shadow-lg rounded-xl"
          placeholder="Type a message"
        />
        <button className="mt-5 shadow-xl bg-custom-yellow text-white py-3 px-10 rounded-2xl">
          Send
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
