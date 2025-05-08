import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLOading } = useQuery({
    queryKey: [user?.email, "admin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.isAdmin;
    },
  });
  return {isAdmin, isAdminLOading};
};

export default useAdmin;
