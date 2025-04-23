import { useState } from "react";
import { useEffect } from "react";

const OurServices = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/fackData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="shadow-2xl">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl font-bold text-center p-5">
          Our Awesome <span className="text-[#F63E7B]">Services</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
          {service.slice(0,6).map((ser) => (
            <div key={ser._id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={ser.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center">{ser.title}</h2>
                <p>{ser.sort_description}</p>
                <p className="">Price: ${ser.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-5 py-5">
          <button className="px-5 py-3 rounded-xl hover:rounded-full text-white bg-[#F63E7B]">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
