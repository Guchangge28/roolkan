import Home from "../router/home.route.ts";
import UserRoute from "../router/user.route.ts";
import type { Router } from "../shared/types.d.ts";
import ChapterRoute from "./chapter.route.ts";
import Viewer from "./viewer.route.ts";

const mapRouter = new Map<string, Router>();

mapRouter.set("/", {
  component: Home,
  name: "Home",
  path: "/",
});

mapRouter.set("/user", {
  component: UserRoute,
  name: "User",
  path: "/user",
});

mapRouter.set("/library/ln/:name", {
  component: Viewer,
  name: "serie",
  path: "/library/ln/:name",
});

mapRouter.set("/library/ln/:name/:chapter", {
  component: ChapterRoute,
  name: "Chapter",
  path: "/library/ln/:name/:chapter",
});

export default mapRouter;
