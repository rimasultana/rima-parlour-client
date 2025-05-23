import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import SocialLogin from "../share/SocialLogin";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";


const Register = () => {
  const { createSingUp } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    createSingUp(data.email, data.password)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Registered Successfully!");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Register Failed", error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2d0b4c] via-[#380e4a] to-[#2f1a70] font-sans">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.1)] rounded-[2rem] p-8 md:p-12 w-[90%] max-w-md text-white"
      >
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center text-white text-5xl animate-pulse ring-2 ring-purple-400 ring-offset-4">
            👤
          </div>
        </div>
        {/* Username */}
        <div className="flex items-center border-b border-white/30 mb-6">
          <FaUser className="mr-3 text-purple-300" />
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Full Name"
            className="bg-transparent w-full py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Email */}
        <div className="flex items-center border-b border-white/30 mb-6">
          <FaEnvelope className="mr-3 text-purple-300" />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email ID"
            className="bg-transparent w-full py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Password */}
        <div className="flex items-center border-b border-white/30 mb-6">
          <FaLock className="mr-3 text-purple-300" />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="bg-transparent w-full py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Confirm Password */}
        <div className="flex items-center border-b border-white/30 mb-6">
          <FaLock className="mr-3 text-purple-300" />
          <input
            {...register("photo", { required: true })}
            type="photo"
            placeholder="PhotoURL"
            className="bg-transparent w-full py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Terms */}
        <div className="text-sm text-white/70 mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-purple-500" />
            <span>
              I agree to the{" "}
              <a href="#" className="text-purple-300 underline">
                Terms & Conditions
              </a>
            </span>
          </label>
        </div>
        {/* Register Button */}
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 hover:scale-105 transition-transform duration-200 font-semibold text-white mb-4">
          REGISTER
        </button>
        <p className="text-center text-sm py-2 text-white/70">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-300 underline hover:text-pink-400 transition"
          >
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Register;
