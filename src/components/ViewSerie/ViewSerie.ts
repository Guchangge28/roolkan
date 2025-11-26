import { bookMark } from "../../services/bookmark.service.ts";
import type { AtachSerie, BookMark } from "../../shared/types.d.ts";
import { chapter_list, data_serie } from "./data_serie.ts";

export class ViewSerie extends HTMLElement {
  private _data: AtachSerie;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._data = { ...data_serie };
  }

  set data(data: AtachSerie) {
    this._data = data;
  }

  async connectedCallback() {
    if (!this.shadowRoot) return;
    const bm = await bookMark.getBookMark(this._data.id_serie);
    const book_mark: BookMark = !bm ? { value: 0 } : bm;
    this.shadowRoot.innerHTML = this.render(this._data, book_mark);
  }

  render(serie: AtachSerie, book_mark: BookMark) {
    return `
      <link rel="stylesheet" href="/components/view_serie.css" />
      <style>
        div.serie__rigth {
          background: url("${serie.image_secondary}");
          background-size: cover;
          border-radius: 5px;
          padding: 5px;
          position:relative;
          height: 350px;
          box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
        }

      </style>
      <div class="serie">
        <div class="serie__left">
          <img class="img_title" src="${serie.image}" alt="${serie.title}">
          <p class="demography ${serie.demography}">${serie.demography}</p>
          <p class="genre ${serie.genre}">${serie.genre}</p>
        </div>
        <div class="serie__rigth">
          <h2 class="title">${serie.title}</h2>
          <p class="description">${serie.description}</p>
          <p class="author">Autor: ${serie.author}</p>
          <p class="year">Año de publicación: ${serie.year}</p>
          <a class="raw" href="${serie.raw}" target="_blank">Raw</a>

        </div>
      </div>
      <div class="chapter__list">
        <h2>Capítulos: ${serie.chapters}</h2>
        ${chapter_list(serie.chapters, serie.url_chapter, book_mark)}
      </div>
    `;
  }
}

customElements.define("view-serie", ViewSerie);
