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
      .then((result) => {
        iziToast.success({
          title: "Success",
          message: "Message Sent! I'll get back to you soon.",
          position: "topRight",
          timeout: 5000,
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        iziToast.error({
          title: "Error",
          message: "Oops! Something went wrong. Please try again.",
          position: "topRight",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200/10 hover:border-blue-500/20 transition-all duration-300 mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          
          <form className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-gray-900/5 dark:bg-white/5 border border-gray-300/10 dark:border-gray-600/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 dark:text-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500/70"
                placeholder="Your Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-gray-900/5 dark:bg-white/5 border border-gray-300/10 dark:border-gray-600/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 dark:text-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500/70"
                placeholder="your.email@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-gray-900/5 dark:bg-white/5 border border-gray-300/10 dark:border-gray-600/20 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 dark:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500/70 resize-vertical min-h-[100px] sm:min-h-[120px]"
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center text-sm sm:text-base ${
                isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg 
                    className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};