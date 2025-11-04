const routerResolver = (path: string) => {
  const keys = path.split("/").filter((key) => key !== "");
  if (keys.length === 3) {
    return `/${keys[0]}/${keys[1]}/:name`;
  }
  if (keys.length === 4) {
    return `/${keys[0]}/${keys[1]}/:name/:chapter`;
  }
  return path;
};

export default routerResolver;
