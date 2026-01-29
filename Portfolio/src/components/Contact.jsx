import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
          toast.success("Message sent successfully! ✅");
        },
        () => {
          setLoading(false);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 transition-colors duration-300"
      style={{ backgroundColor: darkMode ? "#0f172a" : "#f8fafc" }}
    >
      <ToastContainer theme={darkMode ? "dark" : "light"} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Let's <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6" data-aos="fade-right">
            {[
              { icon: <Mail />, label: "Email Me", value: "ckhushabu6@gmail.com", color: "bg-blue-500/10 text-blue-500" },
              { icon: <Phone />, label: "Call Me", value: "+91 8446635843", color: "bg-green-500/10 text-green-500" },
              { icon: <MapPin />, label: "Location", value: "Nashik, Maharashtra", color: "bg-orange-500/10 text-orange-500" },
            ].map((info, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}
              >
                <div className={`p-3 rounded-xl ${info.color}`}>
                  {React.cloneElement(info.icon, { size: 24 })}
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{info.label}</p>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <form
              ref={form}
              onSubmit={sendMessage}
              className={`p-8 md:p-10 rounded-3xl border shadow-2xl transition-all ${
                darkMode ? "bg-gray-800/30 border-gray-700" : "bg-white border-gray-100"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className={`text-sm font-semibold ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>First Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-semibold ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900'}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className={`text-sm font-semibold ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-semibold ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className={`w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900'}`}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className={`text-sm font-semibold ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all resize-none ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-900'}`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 group transition-all duration-300 active:scale-95 disabled:opacity-50"
                style={{ background: "linear-gradient(to right, #f97316, #f59e0b)" }}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    {isSent ? "Message Sent ✓" : "Send Message"}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contect;