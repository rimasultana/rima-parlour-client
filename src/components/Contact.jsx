const Contact = () => {
  return (
    <div className="bg-[#FFF8F5] py-20 px-4">
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        Let us handle your <br />
        project, professionally.
      </h1>

      <div className="space-y-6 py-10 max-w-4xl mx-auto">
        {/* Name Inputs */}
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="bg-white flex-1 py-3 px-4 rounded-md"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="bg-white flex-1 py-3 px-4 rounded-md"
            type="text"
            placeholder="Last Name"
          />
        </div>

        {/* Email and Phone */}
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="bg-white flex-1 py-3 px-4 rounded-md"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="bg-white flex-1 py-3 px-4 rounded-md"
            type="tel"
            placeholder="Phone Number"
          />
        </div>

        {/* Message Box */}
        <div>
          <textarea
            className="bg-white w-full py-3 px-4 rounded-md  min-h-[150px] resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="btn bg-[#F63E7B] text-white font-bold">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
