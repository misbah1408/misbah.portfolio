import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../Canvas/EarthCanvas";
import "./Contact.scss";
import { d } from "../../utils/Constants";

const Contact = () => {
  const formRef = useRef();
  const ref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_gmzrqes",
        "template_yb0cj8f",
        {
          from_name: form.name,
          from_email: form.email,
          to_email: "misbahmohammed00008@gmail.com",
          message: form.message,
        },
        "7MR6iHQ1wKPA1E5Ce"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      trasition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="contact__container"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={variants} className="contact__canvas-container">
        <EarthCanvas />
      </motion.div>

      <motion.div variants={variants} className="contact__form-container">
        <motion.div
          className="contactSvg"
          initial={{ opacity: 1 }}
          whileInView={{opacity:0}}
          transition={{
            duration: 1,
            delay:3
          }}
        >
          <svg
            height="600px"
            width="600px"
            viewBox="0 0 42.666 42.666"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{pathLength:0}}
              animate={isInView && {pathLength:1}}
              transition={{duration:7}}
              d={d}
            />
          </svg>
        </motion.div>
        <motion.div
          className="contactInputContainer"
          variants={variants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div className="contact__header">
            <motion.p
              className="title"
              variants={variants}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4 }}
            >
              Get in touch
            </motion.p>
            <motion.h3
              className="subtitle"
              variants={variants}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              Contact.
            </motion.h3>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            variants={variants}
          >
            <label>
              <span className="label-text">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
              />
            </label>
            <label>
              <span className="label-text">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
              />
            </label>
            <label>
              <span className="label-text">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
              />
            </label>

            <button type="submit">{loading ? "Sending..." : "Send"}</button>
          </motion.form>
        </motion.div>

        <motion.div
          className="contact__options"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <article className="contact__option">
            <i className="fa-solid fa-envelope pr-2"></i>
            <a
              href="mailto:misbahmohammed00008@gmail.com"
              className="blue-text-gradient"
            >
              misbahmohammed00008@gmail.com
            </a>
          </article>
          <article className="contact__option ">
            <i className="fa-brands fa-whatsapp pr-2"></i>
            <a
              href="https://api.whatsapp.com/send/?phone=8296250057&text&app_absent=0&lang=en"
              className="blue-text-gradient"
            >
              +91 8296250057
            </a>
          </article>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
