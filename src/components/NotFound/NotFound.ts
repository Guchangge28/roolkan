const NotFound = () => {
  const fragment = document.createDocumentFragment();
  const title = document.createElement("h1");
  title.textContent = "404 Not Found";
  fragment.appendChild(title);
  const message = document.createElement("p");
  const a = document.createElement("a");
  a.href = "/";
  a.textContent = "Go back to home";
  message.textContent = "The page you are looking for does not exist.";
  fragment.appendChild(message);
  fragment.appendChild(a);
  return fragment;
};
export default NotFound;
