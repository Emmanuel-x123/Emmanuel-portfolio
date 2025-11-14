// Modernized Contact Component — Revised
// Fixed contrast issues, improved layout, accessible colors, and clearer visual hierarchy.
// Keeps your original emailjs + iziToast logic intact.

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
          message: "Message sent successfully! I'll get back to you soon.",
          position: "topRight",
          timeout: 4500,
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        iziToast.error({
          title: "Error",
          message: "Something went wrong. Try again.",
          position: "topRight",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
  id="contact"
  className="
    bg-[#0A0D14]
    min-h-screen
    w-full
    flex items-center justify-center 
    py-8 sm:py-12 md:py-16 lg:py-20 
    px-4 sm:px-6 lg:px-8
    ios-fix
  "
    >
      <RevealOnScroll>
        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Info / CTA */}
          <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 text-slate-100">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Let's build something great
            </h2>
            <p className="text-slate-300 mb-6">
              Got a project, question, or just want to say hi? Send a message and I'll respond as soon as I can. Prefer email? Use <span className="font-medium text-slate-100">emmanuelreubenx123@gmail.com</span>.
            </p>

            <ul className="space-y-3 mt-auto">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-600/20 text-cyan-300">📧</span>
                <div>
                  <div className="text-sm text-slate-300">Email</div>
                  <div className="font-medium text-slate-100">emmanuelreubenx123@gmail.com</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600/20 text-blue-300">📍</span>
                <div>
                  <div className="text-sm text-slate-300">Location</div>
                  <div className="font-medium text-slate-100">Lagos, Nigeria</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Get in touch</h3>
            <p className="text-sm text-slate-600 mb-6">Send a quick message — I usually reply within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm text-slate-700">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-none"
                />
              </label>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium text-white bg-blue-600 shadow-md transition-transform duration-150 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
