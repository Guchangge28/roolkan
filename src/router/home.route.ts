import "../components/NavBar/NavBar.ts";
import "../components/MainContent/MainContent.ts";
import "../components/AppFooter/AppFooter.ts";
import "../components/CustomLink/CustomLink.ts";

const Home = () => {
  const fragment = document.createDocumentFragment();

  const main_content = document.createElement("main-content");
  main_content.id = "middle-node";
  fragment.appendChild(main_content);

  return Promise.resolve(fragment);
};

export default Home;
