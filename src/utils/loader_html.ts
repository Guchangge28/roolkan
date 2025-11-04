import type { ResultLoader } from "../shared/types.d.ts";

const loader_html = async (path: string): Promise<ResultLoader<string>> => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return {
        success: false,
        result: `Failed to load JSON file: ${path}`,
      };
    }
    const data = await response.text();
    return {
      success: true,
      result: data,
    };
  } catch (_: unknown) {
    return {
      success: false,
      result: `Failed to load JSON file: ${path}`,
    };
  }
};

export default loader_html;
