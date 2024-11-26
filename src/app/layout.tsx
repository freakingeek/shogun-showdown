import dayjs from "dayjs";
import Providers from "@/providers";
import { Outlet } from "react-router";
import { Cookies } from "react-cookie";
import type { Route } from "./+types/layout";
import { apolloClient } from "@/lib/apollo-clients";
import relativeTime from "dayjs/plugin/relativeTime";
import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { GET_GUEST_TOKEN_QUERY } from "@/graphql/queries/getGuestToken";

dayjs.extend(relativeTime);

export async function loader({ request }: Route.LoaderArgs) {
  const cookies = new Cookies(request.headers.get("cookie"));
  const isLoggedIn = cookies.get(ACCESS_TOKEN_KEY);

  if (isLoggedIn) {
    return null;
  }

  try {
    const { data } = await apolloClient.query({
      query: GET_GUEST_TOKEN_QUERY,
      variables: { domain: import.meta.env.VITE_NETWORK_DOMAIN },
    });

    if (data.tokens.accessToken) {
      const expireTime = new Date();
      expireTime.setDate(expireTime.getDate() + 7);

      return new Response(null, {
        headers: {
          "Set-Cookie": `${ACCESS_TOKEN_KEY}=${data.tokens.accessToken}; expires=${expireTime}; Path=/`,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }

  return null;
}

export default function RootLayout() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <Providers>
        <Outlet />
      </Providers>
    </section>
  );
}
