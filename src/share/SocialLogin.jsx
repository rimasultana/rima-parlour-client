import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handlaGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("Registered Successfully!");
            navigate("/");
          }else{
            toast.success("Login SuccessFully")
            navigate("/")
          }
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <button
        onClick={handlaGoogleLogin}
        className="w-full flex items-center justify-center gap-3 border border-white/30 hover:border-purple-300 hover:bg-white/10 transition text-white font-semibold py-2 rounded-xl shadow-sm"
      >
        <FcGoogle className="text-2xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
