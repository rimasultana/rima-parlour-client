import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddService = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/items", data);
      if (res.data.insertedId) {
        toast.success("Items added successfully!");
        reset();
      }
    } catch (error) {
      toast.error("Failed to add service!", error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="pb-5">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition"
        >
          ⬅ Back to Home
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
        Add New Service
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-2 text-gray-700">Image URL</label>
          <input
            {...register("img", { required: true })}
            type="text"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Title</label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Service title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Service description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Price (BDT)</label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
