import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("quest", "routes/quest.tsx"),
] satisfies RouteConfig;
