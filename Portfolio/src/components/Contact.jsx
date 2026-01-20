import contact from "../assets/contact.png";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contect({ darkMode }) {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_p6syavg",
        "template_8s94ice",
        form.current,
        "yltcJpt_azRZgQBXE"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
          });
        },
        () => {
          setLoading(false);
          toast.error("Fail to send message, Please try again", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-16 lg:py-24"
    >
      <ToastContainer />

      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97326, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="mt-3 text-base md:text-lg"
            style={{ color: darkMode ? "#cbd5e1" : "#6b7280" }}
          >
            Send me a message and I will reply you soon.
          </p>
        </div>

        {/* Layout (Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* SIMPLE IMAGE */}
          <div className="flex justify-center" data-aos="fade-right">
            <img
              src={contact}
              alt="contact"
              className="w-[220px] sm:w-[260px] lg:w-[300px] object-contain"
            />
          </div>

          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendMessage}
            data-aos="fade-left"
            data-aos-delay="200"
            className="p-6 rounded-2xl shadow-xl border"
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f3f4f6)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-transparent mb-6 border focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                style={{
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                style={{
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition mb-4"
              style={{
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition mb-4"
              style={{
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition mb-4 resize-none"
              style={{
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white hover:shadow-xl transition transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
              }}
            >
              {loading ? "Sending..." : isSent ? "Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contect;
