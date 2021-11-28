import { FaHome, FaUserAlt, FaShoppingCart, FaUserLock } from "react-icons/fa";

const MenuData = [
  {
    title: "หน้าแรก",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "สมาชิก",
    path: "/member",
    icon: <FaUserAlt />,
  },
  {
    title: "สินค้า",
    path: "/product",
    icon: <FaShoppingCart />,
  },
  {
    title: "ผู้ดูแลระบบ",
    path: "/admin",
    icon: <FaUserLock />,
  },
];
export default MenuData;
