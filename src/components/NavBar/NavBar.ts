import { closeSvg, menuSvg } from "../../configs/assets.ts";
import { HTMLNavBar } from "../../configs/components.ts";
import loader_text from "../../utils/loader_text.ts";

const getDataLS = (key: string) => {
  const result = localStorage.getItem(key);
  return result ? result : "anonymous";
};

class NavBar extends HTMLElement {
  static get observedAttributes() {
    return ["username"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const { success, result } = await loader_text(HTMLNavBar);
    if (!this.shadowRoot || !success) return;
    this.shadowRoot.innerHTML = result;
    this.customDefineValues();
    this.setUpListener();
  }

  setUpListener() {
    if (globalThis.innerWidth < 768) {
      console.log("Mobile device detected");
      this.eventMobile();
    } else {
      console.log("Desktop device detected");
    }
  }

  eventMobile() {
    if (!this.shadowRoot) return;

    const nav_logo = this.shadowRoot.getElementById("nav_logo");
    const nav_menu = this.shadowRoot.getElementById("nav_menu");
    const icon_menu = this.shadowRoot.getElementById(
      "icon_menu",
    ) as HTMLImageElement | null;
    const nav_navigator = this.shadowRoot.getElementById("nav_navigator");
    const ankers = this.shadowRoot.querySelectorAll("a");

    if (!nav_menu) return;
    if (!icon_menu) return;
    if (!nav_navigator) return;
    if (!ankers) return;
    if (!nav_logo) return;

    nav_logo.addEventListener("click", () => {
      history.pushState(null, "", "/");
      globalThis.dispatchEvent(new Event("pushstate"));
    });

    nav_menu.addEventListener("click", () => {
      icon_menu.src = icon_menu.src.includes("menu") ? closeSvg : menuSvg;
      nav_navigator.classList.toggle("hidden");
    });

    ankers.forEach((a) => {
      a.addEventListener("click", () => {
        icon_menu.src = icon_menu.src.includes("menu") ? closeSvg : menuSvg;
        nav_navigator.classList.toggle("hidden");
      });
    });
  }

  eventHandler() {}

  customDefineValues() {
    if (!this.shadowRoot) return;
    const user_name = this.shadowRoot.getElementById("user_name");
    if (!user_name) return;
    user_name.textContent = getDataLS("username");
  }
}

customElements.define("nav-bar", NavBar);
