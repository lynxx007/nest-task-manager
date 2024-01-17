import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
export const SIDEBAR_ITEMS_ADMIN = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: <Icon as={MdDashboard} boxSize={6} />,
  },
  {
    name: "Tasks",
    route: "/dashboard/tasks",
    icon: <Icon as={FaTasks} boxSize={6} />,
  },
  {
    name: "Users",
    route: "/dashboard/users",
    icon: <FaUser />,
  },
  {
    name: "Blogs",
    route: "/dashboard/blogs",
    icon: <FaBlogger />,
  },
  {
    name: "Products",
    route: "/dashboard/products",
    icon: <MdOutlineProductionQuantityLimits />,
  },
];

export const SIDEBAR_ITEMS_USER = [
  {
    route: "/dashboard",
    icon: FaTasks,
    name: "Tasks",
  },
  {
    route: "/dashboard/blogs",
    icon: FaBlogger,
    name: "Blogs",
  },
  {
    route: "/dashboard/products",
    icon: MdOutlineProductionQuantityLimits,
    name: "Products",
  },
  {
    route: "/dashboard/profile",
    icon: FaUser,
    name: "Profile",
  },
  {
    route: "/dashboard/settings",
    icon: CiSettings,
    name: "Settings",
  },
];
