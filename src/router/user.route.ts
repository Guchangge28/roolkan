const UserRoute = () => {
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.id = "middle-node";
  const h1 = document.createElement("h1");
  h1.textContent = "User";
  const p = document.createElement("p");
  p.textContent = "This is the user route";
  div.append(h1, p);
  fragment.appendChild(div);
  return Promise.resolve(fragment);
};

export default UserRoute;
