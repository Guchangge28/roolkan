import loader_text from "../utils/loader_text.ts";
import { ChapterSerie } from "../components/ChapterSerie/ChapterSerie.ts";
import loader_json from "../utils/loader_json.ts";
import type { Headers_chapter } from "../shared/types.d.ts";

// Fixed: Se cambió history.pushState por history.replaceState
const ChapterRoute = async (path: string) => {
  const fragment = document.createDocumentFragment();
  const { success, result } = await loader_text(path + "/index.txt");
  const result2 = await loader_json(path + "/headers.json");
  if (!success || !result2.success) {
    history.replaceState({}, "", "/not-found");
    globalThis.dispatchEvent(new Event("pushstate"));
    return;
  }
  const chapter_serie = document.createElement("chapter-serie") as ChapterSerie;
  chapter_serie.id = "middle-node";
  chapter_serie.data = result;
  chapter_serie.headers = result2.result as Headers_chapter;
  fragment.appendChild(chapter_serie);
  return fragment;
};

export default ChapterRoute;
