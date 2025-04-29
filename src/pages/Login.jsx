import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router";
import SocialLogin from "../share/SocialLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        toast.success("Login Successfully", res.data);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
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
          <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center text-white text-5xl animate-pulse ring-2 ring-pink-400 ring-offset-4">
            👤
          </div>
        </div>

        {/* Email Field */}
        <div className="flex items-center border-b border-white/30 mb-6">
          <FaEnvelope className="mr-3 text-pink-400" />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email ID"
            className="bg-transparent w-full py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center border-b border-white/30 mb-6">
          <FaLock className="mr-3 text-pink-400" />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="bg-transparent w-full py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between items-center text-sm text-white/70 mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-pink-500" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:text-pink-300">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-transform duration-200 font-semibold text-white">
          LOGIN
        </button>
        <p className="text-center text-sm text-white/70 py-2">
          Already have an account?{" "}
          <Link
            to="/register"
            className="text-purple-300 underline hover:text-pink-400 transition"
          >
            Register
          </Link>
        </p>
        <div className="divider">OR</div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Login;

