import { HTMLAppFooter } from "../../configs/components.ts";
import loader_text from "../../utils/loader_text.ts";

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    const { success, result } = await loader_text(HTMLAppFooter);

    if (!this.shadowRoot || !success) return;
    this.shadowRoot.innerHTML = result;
  }
}

customElements.define("app-footer", AppFooter);
