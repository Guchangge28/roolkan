import { visibilityOffSvg, visibilitySvg } from "../../configs/assets.ts";
import type { BookMark } from "../../shared/types.d.ts";

const data_serie = {
  id_serie: "",
  title: "",
  chapters: 0,
  author: "",
  description: "",
  year: "",
  raw: "",
  demography: "",
  genre: "",
  tags: [],
  image: "",
  image_secondary: "",
  url_chapter: "",
};

/*
  Todo: agregar un condicional para cuando la cantidad sobrepase 30
  y separar la lógica en un nuevo componente
*/

const chapter_list = (cant: number, href: string, book_mark: BookMark) => {
  let chapter: string = "";
  for (let i = 1; i <= cant; i++) {
    chapter =
      chapter +
      `<a is="custom-link" class="chapter" href=${href + i}>
        <span>staff: Roolkan</span>
        <span>cap ${i}</span>
        <img src="${book_mark.value >= i ? visibilitySvg : visibilityOffSvg}" alt="visibility"/>
      </a>`;
  }
  return chapter;
};

export { data_serie, chapter_list };
