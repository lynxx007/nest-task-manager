import { decodeToken, isExpired } from "react-jwt";
import { useAppSelector } from "./Redux/customHooks";

export const useAuth = () => {
  const userToken = useAppSelector((state) => state.users.accessToken);

  let isAdmin = false;
  let accessRight = "User";

  if (userToken && !isExpired(userToken)) {
    const decodedToken = decodeToken(userToken) as {
      roles: string[];
      id: string;
    };
    const { roles } = decodedToken;

    isAdmin = roles.includes("Admin");
    if (isAdmin) {
      accessRight = "Admin";
    }

    return { roles, isAdmin, accessRight };
  }

  return { roles: [], isAdmin, accessRight };
};
