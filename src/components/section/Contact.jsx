// Modernized + Theme-Aligned Contact Component
// Matches your redesigned UI but stands out with a softer gradient background.

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        iziToast.success({
          title: "Success",
          message: "Your message has been sent!",
          position: "topRight",
          timeout: 4000,
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        iziToast.error({
          title: "Error",
          message: "Unable to send message. Try again.",
          position: "topRight",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="
        w-full
        min-h-screen 
        px-4 sm:px-6 lg:px-10
        py-20
        bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
        relative ios-fix
      "
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE — CTA / INFO */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl text-slate-100 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Let's Work Together
            </h2>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Interested in a project, collaboration, or just want to say hi?
              I’m always open to talking about new opportunities and ideas.
            </p>

            <div className="space-y-6 mt-auto">

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl">📧</span>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-slate-100 font-medium break-all">
                    emmanuelreubenx123@gmail.com
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-xl">📍</span>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="text-slate-100 font-medium">
                    Lagos, Nigeria
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-4">
                <div className="text-sm text-slate-400 mb-2">Socials</div>

                <div className="flex gap-4 flex-wrap">
                  <a href="https://www.linkedin.com/in/emmanuel-reuben-a9a6b3239/" target="_blank"
                    className="w-11 h-11 rounded-xl bg-slate-700/40 hover:bg-slate-700 transition flex items-center justify-center text-slate-100">
                    <i className="fa-brands fa-linkedin text-xl"></i>
                  </a>

                  <a href="https://x.com/EEsongz456" target="_blank"
                    className="w-11 h-11 rounded-xl bg-slate-700/40 hover:bg-slate-700 transition flex items-center justify-center text-slate-100">
                    <i className="fa-brands fa-x-twitter text-xl"></i>
                  </a>

                  <a href="https://github.com/Emmanuel-x123" target="_blank"
                    className="w-11 h-11 rounded-xl bg-slate-700/40 hover:bg-slate-700 transition flex items-center justify-center text-slate-100">
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>

                  <a href="#" target="_blank"
                    className="w-11 h-11 rounded-xl bg-slate-700/40 hover:bg-slate-700 transition flex items-center justify-center text-slate-100">
                    <i className="fa-brands fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">
              Send a Message
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              I’ll reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <label className="block">
                <span className="text-sm text-slate-700">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 text-slate-800 shadow-sm focus:ring-2 focus:ring-cyan-300 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 text-slate-800 shadow-sm focus:ring-2 focus:ring-cyan-300 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 text-slate-800 shadow-sm resize-none focus:ring-2 focus:ring-cyan-300 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 rounded-lg font-medium text-white 
                  bg-blue-600 hover:bg-blue-700 
                  shadow-md transition-transform 
                  hover:-translate-y-0.5 disabled:opacity-60
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
