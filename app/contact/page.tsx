// File: app/contact/page.tsx
import Subtitle from "@/Components/texts/Subtitle";

function Contact() {
  return (
    
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-30">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="text-center md:text-left mb-10">
          <Subtitle title={"Contact Me"} emoji={"☎️"} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-3">Get in touch</h1>
          <p className="text-slate-400 text-lg">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-10 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-purple-400 font-semibold text-sm">First Name *</label>
              <input
                type="text"
                placeholder="John"
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="text-purple-400 font-semibold text-sm">Last Name *</label>
              <input
                type="text"
                placeholder="Doe"
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
              <label className="text-purple-400 font-semibold text-sm">Email Address *</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="border-purple-500/30 border-2 p-4 text-lg rounded-xl placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2  focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
              <label className="text-purple-400 font-semibold text-sm">Your Message *</label>
              <textarea
                placeholder="Tell me about your project or just say hi..."
                rows={6}
                className="border-purple-500/30 border-2 rounded-xl p-4 text-lg placeholder:text-slate-500 bg-slate-800/50 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex justify-center md:justify-start mt-4">
              <button 
                type="submit"
                className="group relative py-4 px-8 font-bold text-lg bg-purple-500 text-white rounded-xl cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Send Message
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-slate-400 text-sm">idrisamara314@gmail.com</p>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300">
          <a href="tel:0549034559">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <a className="text-slate-400 text-sm">(+213) 549034559</a>
          </a>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-slate-400 text-sm">Algiers, Algeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;