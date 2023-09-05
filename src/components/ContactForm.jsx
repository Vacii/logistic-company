import React, { useRef } from "react";
import { motion } from "framer-motion";
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
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-4 pt-20 w-[80%] md:w-[60%] lg:w-[40%]"
      >
        <input
          type="text"
          name="user_name"
          ref={name}
          placeholder="Vaše jméno"
          className="px-3 py-3 w-full shadow-lg rounded-xl"
        />
        <input
          type="email"
          name="user_email"
          ref={mail}
          placeholder="Váš email"
          className="px-3 py-3 w-full shadow-lg rounded-xl"
        />
        <textarea
          name="message"
          ref={message}
          className="px-3 py-3 h-[200px] w-full resize-none shadow-lg rounded-xl"
          placeholder="Zpráva, kterou chcete zanechat"
        />
        <button className="mt-5 shadow-xl outline outline-1 outline-custom-yellow hover:bg-custom-yellow text-white py-3 px-10 rounded-xl">
          Odeslat
        </button>
      </motion.form>
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
