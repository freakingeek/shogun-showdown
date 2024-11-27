import { RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

const config: RouteConfig = [
  layout("layout.tsx", [
    index("page.tsx"),
    route("/post/:id", "post/[id]/page.tsx"),
    ...prefix("accounts", [layout("accounts/layout.tsx", [route("login", "accounts/login/page.tsx")])]),
  ]),
];

export default config;
