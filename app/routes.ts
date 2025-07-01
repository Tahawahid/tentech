import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("services/:serviceId", "routes/services.$serviceId.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
] satisfies RouteConfig;