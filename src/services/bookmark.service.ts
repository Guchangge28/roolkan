import type { BookMark as BMark } from "../shared/types.d.ts";
interface BookMark {
  getBookMark(id_serie: string): Promise<BMark | null>;
  registerBookMark(id_serie: string, currentChapter: number): Promise<boolean>;
}

class BookMarkImpl implements BookMark {
  getBookMark(id_serie: string): Promise<BMark | null> {
    const item = localStorage.getItem(id_serie);
    if (item == null) return Promise.resolve(item);
    const result = JSON.parse(item) as BMark;
    return Promise.resolve(result);
  }

  async registerBookMark(id_serie: string, chapter: number): Promise<boolean> {
    const currentChapter: BMark = { value: chapter };
    const currentLSChapter = await this.getBookMark(id_serie);
    if (!currentLSChapter || currentLSChapter.value < chapter) {
      localStorage.setItem(id_serie, JSON.stringify(currentChapter));
      return Promise.resolve(true);
    }
    return Promise.resolve(true);
  }
}
export const bookMark = new BookMarkImpl();
