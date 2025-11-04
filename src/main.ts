import App from "./App.ts";
import "./style.css";

globalThis.addEventListener("pushstate", App);
globalThis.addEventListener("popstate", App);
App();
