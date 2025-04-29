import { useLoaderData, useNavigate } from "react-router";

const ViewDetails = () => {
  const view = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="pb-5">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition"
        >
          ⬅ Back to Home
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <img
          src={view.img}
          alt={view.title}
          className="w-full h-[300px] object-cover rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            {view.title}
          </h2>
          <p className="text-gray-700 mb-4">{view.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-6">
            Price: <span className="text-pink-500">{view.price}</span>
          </p>
          <div>
            <button className="px-6 py-2  bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
// //  <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition">
// <CiEdit className="text-2xl"/>
// </button>
// <button className="px-6 py-2  bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition">
//   <MdDelete className="text-2xl" />
// </button>
