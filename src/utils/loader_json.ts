import type { ResultLoader } from "../shared/types.d.ts";

const loader_json = async <T>(
  path: string,
): Promise<ResultLoader<T> | ResultLoader<string>> => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return {
        success: false,
        result: `Failed to load JSON file: ${path}`,
      };
    }
    const data = await response.json();
    return {
      success: true,
      result: data as T,
    };
  } catch (_: unknown) {
    return {
      success: false,
      result: `Failed to load JSON file: ${path}`,
    };
  }
};

export default loader_json;
