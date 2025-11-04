// import "../CustomLink/CustomLink.ts";
import type { Serie } from "../../shared/types.d.ts";

const GalleryCard = (prop: Serie) => {
  const fragment = document.createDocumentFragment();
  const a = document.createElement("a", { is: "custom-link" });
  a.className = "gallery__item";
  a.href = prop.url;

  const card = `
      <span class="genre ${prop.genre}">${prop.genre}</span>
      <span class="title">${prop.title}</span>
      <span class="raiting">${prop.raiting.toFixed(1)}</span>
      <img
          class="gallery__img"
          src=${prop.image}
          alt="galery item"
          loading="lazy"
      />
      <span class="status ${prop.status}">${prop.status}</span>
      <span class="demography ${prop.demography}">${prop.demography}</span>
  `;
  a.innerHTML = card;
  fragment.append(a);
  return fragment;
};

export default GalleryCard;
