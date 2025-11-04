import { ViewSerie } from "../components/ViewSerie/ViewSerie.ts";
import type { AtachSerie } from "../shared/types.d.ts";
import loader_json from "../utils/loader_json.ts";

const Viewer = async (path: string) => {
  const fragment = document.createDocumentFragment();
  const { success, result } = await loader_json<AtachSerie>(
    path + "/index.json",
  );
  if (!success) {
    history.pushState({}, "", "/not-found");
    globalThis.dispatchEvent(new Event("pushstate"));
    return;
  }
  const viewer = document.createElement("view-serie") as ViewSerie;
  viewer.id = "middle-node";
  viewer.data = result as AtachSerie;
  fragment.appendChild(viewer);
  return fragment;
};

export default Viewer;
