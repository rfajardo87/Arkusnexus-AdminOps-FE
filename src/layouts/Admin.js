// Chakra imports
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Configurator from "components/Configurator/Configurator";
import Footer from "components/Footer/Footer.js";
// Layout components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import routes from "routes.js";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Custom Chakra theme
import theme from "theme/theme.js";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import useAxios from "shared/hooks/useAxios";

export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const [rutas, setRutas] = useState([]);
  const { req } = useAxios();
  // functions for changing the states from components
  const moduloByRol = async (routes) => {
    try {
      const info = JSON.parse(Cookies.get("info"));
      const roles = await req.get(`/v1/usuario/${info.id}/roles`);
      const role_list = await roles.data.map((rol) => rol.rol_id).join("");
      const rsp = await req.get(`/v1/rolmodulo/${role_list}`);
      const mod_list = await rsp.data.modulos.map((m) => m.nombre);
      const rutas_list = routes.filter((prop) => mod_list.includes(prop.name));
      const rutas_sort = rutas_list
        .map((ruta) => {
          if (ruta.views) {
            ruta.views = ruta.views
              .filter((view) => mod_list.includes(view.name))
              .sort((a, b) => a.order - b.order);
          }
          return ruta;
        })
        .sort((a, b) => a.order - b.order);
      setRutas(rutas_sort);
    } catch (error) {
      console.error("error", error);
    }
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";

  useEffect(() => {
    moduloByRol(routes);
  }, []);

  // Chakra Color Mode
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={rutas}
        logoText={"PURITY UI DASHBOARD"}
        display="none"
        sidebarVariant={sidebarVariant}
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            logoText={"PURITY UI DASHBOARD"}
            brandText={getActiveRoute(rutas)}
            secondary={getActiveNavbar(rutas)}
            fixed={fixed}
            {...rest}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              <Switch>
                {getRoutes(rutas)}
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </PanelContainer>
          </PanelContent>
        ) : null}
        <Footer />
        <Portal>
          <FixedPlugin
            secondary={getActiveNavbar(rutas)}
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
        <Configurator
          secondary={getActiveNavbar(rutas)}
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value) => {
            setFixed(value);
          }}
          onOpaque={() => setSidebarVariant("opaque")}
          onTransparent={() => setSidebarVariant("transparent")}
        />
      </MainPanel>
    </ChakraProvider>
  );
}
