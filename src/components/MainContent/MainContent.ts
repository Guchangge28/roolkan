import { HTMLMainContent } from "../../configs/components.ts";
import type { Serie } from "../../shared/types.d.ts";
import { SERIES_LN_JSON } from "../../configs/data.ts";
import GalleryCard from "../GalleryCard/GalleryCard.ts";
import loader_text from "../../utils/loader_text.ts";
import loader_json from "../../utils/loader_json.ts";

class MainContent extends HTMLElement {
  isFirst = false;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [result1, result2] = await Promise.all([
      loader_text(HTMLMainContent),
      loader_json<Serie[]>(SERIES_LN_JSON),
    ]);
    if (!this.shadowRoot || !result1.success || !result2.success) return;

    this.shadowRoot.innerHTML = result1.result;
    const main_galery = this.shadowRoot.getElementById("main_galery");

    if (main_galery && typeof result2.result === "object") {
      result2.result.forEach((serie: Serie) => {
        const card = GalleryCard(serie);
        main_galery.appendChild(card);
      });
    }
    this.eventHandler();
  }

  eventHandler() {
    //console.log("hello world");
    if (!this.shadowRoot) return;
    const main_nav_item = this.shadowRoot.querySelectorAll(".main__nav-item");
    main_nav_item.forEach((item) => {
      item.addEventListener("click", () => {
        main_nav_item.forEach((b) => b.classList.remove("active"));
        item.classList.add("active");
        if (!this.isFirst) {
          alert("Esta funcionalidad todavia no esta implementada");
          this.isFirst = true;
        }
      });
    });
  }
}

customElements.define("main-content", MainContent);
