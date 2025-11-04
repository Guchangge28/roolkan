import type { AtachSerie } from "../../shared/types.d.ts";
import { data_serie } from "./data_serie.ts";

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

  connectedCallback() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = this.render(this._data);
  }

  render(serie: AtachSerie) {
    return `
      <div class="serie">
        <h2>${serie.title}</h2>
        <p>${serie.author}</p>
        <p>${serie.description}</p>
        <p>${serie.year}</p>
        <p>${serie.raiting}</p>
        <p>${serie.demography}</p>
        <p>${serie.genre}</p>
        <img src="${serie.image}" alt="${serie.title}">
      </div>
    `;
  }
}

customElements.define("view-serie", ViewSerie);
