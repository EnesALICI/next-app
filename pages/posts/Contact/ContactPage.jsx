import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/pages/layout";
import text from "@/pages/data/contact/text.json";

export default function ContactPage() {
  const form = useRef();
  const [sendStatus, setSendStatus] = useState("");

  const refleshURl = () => {
    window.location.href = "/";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current.user_name.value === "" ||
      form.current.user_email.value === "" ||
      form.current.message.value === ""
    ) {
      setSendStatus(text.error);
      return;
    }

    emailjs
      .sendForm(
        "service_s4rfkbd",
        "template_4fpvzpv",
        form.current,
        "hTb2db3oDi-mz7auy"
      )
      .then((result) => {
        console.log(result.text);
        setSendStatus(text.successful);
        setTimeout(refleshURl, 4000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    // text from data/json
    <Layout>
      <div className="contactContainer">
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <label>{text.uName}</label>
          <input type="text" name="user_name" />
          <label>{text.email}</label>
          <input type="email" name="user_email" />
          <label>{text.message}</label>
          <input name="message" />
          <input id="button" type="submit" value={text.send} />
          <p className="warning">{sendStatus}</p>
        </form>
      </div>
    </Layout>
  );
}
