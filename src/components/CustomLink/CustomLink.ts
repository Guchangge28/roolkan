export class CustomLink extends HTMLAnchorElement {
  constructor() {
    super();
    this.addEventListener("click", this.onClick.bind(this));
  }

  onClick(event: MouseEvent) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;

    event.preventDefault();
    const href = this.getAttribute("href");
    if (href) {
      history.pushState({}, "", href);
      globalThis.dispatchEvent(new Event("pushstate"));
    }
  }
}

customElements.define("custom-link", CustomLink, { extends: "a" });
