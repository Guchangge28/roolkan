import { bookMark } from "../../services/bookmark.service.ts";
import type { Headers_chapter } from "../../shared/types.d.ts";

export class ChapterSerie extends HTMLElement {
  private _data: string;
  private _headers: Headers_chapter;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._data = "";
    this._headers = {
      id_serie: "",
      title: "",
      chapters: 0,
      current_chapter: 0,
      url_chapter: "",
    };
  }
  set data(data: string) {
    this._data = data;
  }

  set headers(data: Headers_chapter) {
    this._headers = data;
  }
  connectedCallback() {
    if (!this.shadowRoot) return;
    this.loadDefaultValues();
    const url_next_chapter =
      this._headers.url_chapter + "/cap" + (this._headers.current_chapter + 1);
    const url_before_chapter =
      this._headers.url_chapter + "/cap" + (this._headers.current_chapter - 1);

    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/chapter_serie.css" />
        <div class="chapter">
          <div class="chapter__header">
            <a
              is="custom-link"
              class="btn"
              href="${this._headers.current_chapter === 1 ? "" : url_before_chapter}">
              anterior
            </a>
            <a is="custom-link" class="btn" href="${this._headers.url_chapter}">capítulos</a>
            <a
              is="custom-link"
              class="btn"
              href="${this._headers.chapters === this._headers.current_chapter ? "" : url_next_chapter}">
              siguiente
            </a>
          </div>
          <h2>${this._headers.title}</h2>
          <div class="chapter__content">
            ${this._data}
          </div>
          <div class="chapter__footer">
          <a
            is="custom-link"
            class="btn"
            href="${this._headers.current_chapter === 1 ? "" : url_before_chapter}">
            anterior
          </a>
          <a is="custom-link" class="btn" href="${this._headers.url_chapter}">capítulos</a>
          <a
            is="custom-link"
            class="btn"
            href="${this._headers.chapters === this._headers.current_chapter ? "" : url_next_chapter}">
            siguiente
          </a>
          </div>
        </div>
      `;
  }
  loadDefaultValues() {
    if (!this.shadowRoot) return;
    bookMark.registerBookMark(
      this._headers.id_serie,
      this._headers.current_chapter,
    );
  }
}

customElements.define("chapter-serie", ChapterSerie);
