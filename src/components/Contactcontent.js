import "./ContactcontentStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contactcontent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nauh1ib",
        "template_gfi1zz9",
        form.current,
        "v632i4L5kGl4vPcVk"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const notify = () =>
    toast.success("Email Sent Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className="contact-form">
      <h2>Feel Free To Email Me!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="user_name" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input
          className="submitButton"
          type="submit"
          value="Send"
          onClick={notify}
        />
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
export default Contactcontent;
