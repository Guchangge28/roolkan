type Sesion = {
  username: string;
  theme: string;
};

type Router = {
  component: (path: string) => Promise<DocumentFragment | undefined>;
  name: string;
  path: string;
};

type Serie = {
  id: string;
  title: string;
  raiting: number;
  demography: string;
  genre: string;
  status: string;
  image: string;
  url: string;
};

type ResultLoader<T> = {
  success: boolean;
  result: T;
};

type AttachSerie = {
  id_serie: string;
  title: string;
  chapters: number;
  author: string;
  year: string;
  raw: string;
  demography: string;
  genre: string;
  description: string;
  tags: string[];
  image: string;
  image_secondary: string;
  url_chapter: string;
};

type Chapter = {
  typeResult: string;
  id: string;
  title: string;
  content: string[];
};

type Headers_chapter = {
  id_serie: string;
  title: string;
  chapters: number;
  current_chapter: number;
  url_chapter: string;
};

type BookMark = {
  value: number;
};

export type {
  Sesion,
  Router,
  Serie,
  ResultLoader,
  AttachSerie as AtachSerie,
  Chapter,
  Headers_chapter,
  BookMark,
};
