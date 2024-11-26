import { RouteConfig, index, layout } from "@react-router/dev/routes";

const config: RouteConfig = [layout("layout.tsx", [index("page.tsx")])];

export default config;
