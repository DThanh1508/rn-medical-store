import Home from "../pages/Home";
import SettingProfile from "../pages/SettingProfile";
import Product from "../pages/Product";
import Detail from "../pages/Detail";

const routes = [
  {
    name: "Home",
    path:"/",
    component: Home,
    children: [
      {
        name: "Product",
        path: "/product",
        component: Product,
        children: [
          {
            name: "Detail",
            path: "/detail",
            component: Detail,
          }
        ]
      },
    ],
  },
  {
    name: "Profile",
    path: "/profile",
    component: SettingProfile,
  },
];

export default routes;