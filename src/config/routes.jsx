import Home from "../pages/Home";
import SettingProfile from "../pages/SettingProfile";
import Cart from "../pages/Cart";
import Notification from "../pages/Notication";
import NewProduct from "../pages/NewProduct";
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';

const routes = [
  {
    name: "Home",
    component: Home,
    icon: <IconF name='home' size={30} />
  },
  {
    name: "Notification",
    component: Notification,
    icon: <IconF name='user' size={30} />
  },
  {
    name: "New",
    component: NewProduct,
    icon: <IconI name='add-circle-outline' size={30} />
  },
  {
    name: "Cart",
    component: Cart,
    icon: <IconF name='home' size={30} />
  },
  {
    name: "Profile",
    component: SettingProfile,
    icon: <IconF name='home' size={30} />
  },
];

export default routes;