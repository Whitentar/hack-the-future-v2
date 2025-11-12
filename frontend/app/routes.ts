import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("mission/:id", "routes/mission/$id.tsx"),
] satisfies RouteConfig;
