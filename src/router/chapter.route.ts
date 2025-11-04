import loader_text from "../utils/loader_text.ts";

const ChapterRoute = async (path: string) => {
  const fragment = document.createDocumentFragment();
  const { success, result } = await loader_text(path + "/index.txt");
  if (!success) {
    history.pushState({}, "", "/not-found");
    globalThis.dispatchEvent(new Event("pushstate"));
    return;
  }
  const div = document.createElement("div");
  div.id = "middle-node";
  div.innerHTML = result;
  fragment.appendChild(div);
  return fragment;
};

export default ChapterRoute;
