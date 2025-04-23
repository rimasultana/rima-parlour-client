/* eslint-disable no-irregular-whitespace */
import img from "../assets/assets/images/fasial.png";
const LetUs = () => {
  return (
    <div>
      <div className="hero bg-[#FFF8F5] min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-md rounded-lg shadow-2xl" />
          <div className="ml-20">
            <h1 className="text-5xl font-bold">
              Let us handle your <br />
              screen <span className="text-[#F63E7B]">Professionally.</span>
            </h1>
            <p className="py-6">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <aside className="flex gap-8">
              <div>
                <h1 className="text-[#F63E7B] font-bold text-4xl">500+</h1>
                <p>Happy Customer</p>
              </div>

              <div>
                <h1 className="text-[#F63E7B] font-bold text-4xl">16+</h1>
                <p>Total Service</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetUs;
