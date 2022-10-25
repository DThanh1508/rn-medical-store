import Home from "../pages/Home";
import SettingProfile from "../pages/SettingProfile";
import Product from "../pages/Product";
import Detail from "../pages/Detail";

const routes = [
  {
    path:"/",
    component: Home,
    children: [
      {
        path: "/product",
        component: Product,
        children: [
          {
            path: "/detail",
            component: Detail,
          }
        ]
      },
    ],
  },
  {
    path: "/profile",
    component: SettingProfile,
  },
];

export default routes;