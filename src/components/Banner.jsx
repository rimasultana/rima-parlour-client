import img from "../assets/assets/images/women.png";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#FFF8F5] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              BEAUTY SALON <br />
              FOR EVERY WOMEN
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi  exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#F73E7B] text-white py-6 font-bold px-4 hover:rounded-full">Get an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
