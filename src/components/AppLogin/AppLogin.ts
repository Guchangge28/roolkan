import { HTMLAppLogin } from "../../configs/components.ts";
import { authService } from "../../services/auth.service.ts";
import loader_text from "../../utils/loader_text.ts";

class AppLogin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    const { success, result } = await loader_text(HTMLAppLogin);
    if (!this.shadowRoot || !success) return;
    this.shadowRoot.innerHTML = result;
    const body = document.querySelector("body");
    const nav_bar = document.querySelector("nav-bar");
    const app_footer = document.querySelector("app-footer");
    if (!body || !nav_bar || !app_footer) return;
    nav_bar.classList.add("hidden");
    app_footer.classList.add("hidden");
    body.style.background = 'url("/img/background.jpg")';
    this.formControll();
  }

  formControll() {
    if (!this.shadowRoot) return;
    const form = this.shadowRoot.getElementById(
      "login_form",
    )! as HTMLFormElement;
    const user_name = form.querySelector("#user_name")! as HTMLInputElement;
    const password = form.querySelector("#password")! as HTMLInputElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      authService.login(user_name.value, password.value);
      // const event = new CustomEvent("user-login", {
      //   detail: { name: localStorage.getItem("username") }
      // });
      // window.dispatchEvent(event);
      history.replaceState({}, "", "/");
      globalThis.dispatchEvent(new Event("user-login"));
      globalThis.dispatchEvent(new Event("pushstate"));
    });
    // if (!form) return;
  }
  disconnectedCallback() {
    const body = document.querySelector("body");
    const nav_bar = document.querySelector("nav-bar");
    const app_footer = document.querySelector("app-footer");
    if (!body || !nav_bar || !app_footer) return;
    nav_bar.classList.remove("hidden");
    app_footer.classList.remove("hidden");
    body.style.background = "var(--main-bg)";
  }
}

customElements.define("app-login", AppLogin);
