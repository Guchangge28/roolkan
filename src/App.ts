import mapRouter from "./router/map.router.ts";
import NotFound from "./components/NotFound/NotFound.ts";
import "./components/NavBar/NavBar.ts";
import "./components/AppFooter/AppFooter.ts";
import routerResolver from "./shared/resolver/router.resolver.ts";

const App = async () => {
  const path = globalThis.location.pathname;
  const pathName = routerResolver(path);
  const fragment = document.createDocumentFragment();
  const route = mapRouter.get(pathName);
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";
  if (!route) {
    const notFound = NotFound();
    fragment.appendChild(notFound);
    app.appendChild(fragment);
    return;
  }
  const { component } = route;
  const content = await component(path);
  if (!content) return;
  app.appendChild(content);
};

export default App;
