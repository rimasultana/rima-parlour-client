import { useState } from "react";
import { useEffect } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router";

const OurServices = () => {
  const [service, setService] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/items")
      .then((res) => {
        setService(res.data);
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
          {service.slice(0, 6).map((ser, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img className="" src={ser.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center">{ser.title}</h2>
                <p>{ser.sort_description}</p>
                <p className="">Price: ${ser.price}</p>
                <Link to={`/viewdetails/${ser._id}`}>
                  <button className="btn bg-pink-500 font-bold text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-5 py-5">
          <button className="px-5 py-3 rounded-xl hover:rounded-full text-white bg-[#F63E7B]">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
