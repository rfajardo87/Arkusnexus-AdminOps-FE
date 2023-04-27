// import
import Dashboard from "views/Dashboard/Dashboard";
import Usuario from "views/Dashboard/Usuario";
import Cuenta from "views/Dashboard/Cuenta";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SigninApp from "views/Auth/Signin/index";
import SignUp from "views/Auth/SignUp.js";

import FA from "components/Icons/FA";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/usuario",
    name: "Usuario",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color="inherit" />,
    component: Usuario,
    layout: "/admin",
    order: 3,
  },
  {
    path: "/cuenta",
    name: "Cuenta",
    rtlName: "لوحة القيادة",
    icon: <FA icon={"bank"} />,
    component: Cuenta,
    layout: "/admin",
    order: 2,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
    order: 1,
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    name: "GENERAL",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Perfil",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
        order: 0,
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SigninApp,
        layout: "/auth",
        order: 1,
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
