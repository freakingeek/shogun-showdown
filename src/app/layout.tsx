import dayjs from "dayjs";
import Providers from "@/providers";
import { Outlet } from "react-router";
import { apolloClient } from "@/lib/apollo-clients";
import relativeTime from "dayjs/plugin/relativeTime";
import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { GET_GUEST_TOKEN_QUERY } from "@/graphql/queries/getGuestToken";

dayjs.extend(relativeTime);

export async function loader() {
  if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
    return null;
  }

  try {
    const { data } = await apolloClient.query({
      query: GET_GUEST_TOKEN_QUERY,
      variables: { domain: import.meta.env.VITE_NETWORK_DOMAIN },
    });

    if (data.tokens.accessToken) {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.tokens.accessToken);
    }

    // NOTE: To set guest token properly
    window.location.reload();
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
