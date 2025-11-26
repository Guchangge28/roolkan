class NotFound extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.shadowRoot) return;
    const app = document.getElementById("app");
    if (!app) return;
    app.classList.add("app_nf");
    this.shadowRoot.innerHTML = this.render();
  }

  disconnectedCallback() {
    const app = document.getElementById("app");
    if (!app) return;
    app.classList.remove("app_nf");
  }
  render() {
    const component = `
      <div class="not_found">
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go back to home</a>
      </div>
      `;
    return component;
  }
}
customElements.define("not-found", NotFound);
export default NotFound;
