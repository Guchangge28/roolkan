import "../components/AppLogin/AppLogin.ts";

const LoginRoute = () => {
  const fragment = document.createDocumentFragment();

  const main_content = document.createElement("app-login");
  main_content.id = "middle-node";
  fragment.appendChild(main_content);

  return Promise.resolve(fragment);
};

export default LoginRoute;
