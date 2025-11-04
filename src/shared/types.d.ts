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
  typeResult: string;
  title: string;
  author: string;
  year: string;
  raiting: number;
  demography: string;
  genre: string;
  description: string;
  tags: string[];
  image: string;
};

type Chapter = {
  typeResult: string;
  id: string;
  title: string;
  content: string[];
};

export type {
  Sesion,
  Router,
  Serie,
  ResultLoader,
  AttachSerie as AtachSerie,
  Chapter,
};
