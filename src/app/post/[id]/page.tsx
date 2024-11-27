import dayjs from "dayjs";
import Like from "@/components/Like";
import { Route } from "./+types/page";
import { Cookies } from "react-cookie";
import MainLayout from "@/components/layouts/Main";
import { apolloClient } from "@/lib/apollo-clients";
import { ApolloError } from "@apollo/client/index.js";
import { ACCESS_TOKEN_KEY } from "@/configs/constants";
import { NotFoundError } from "@/lib/exceptions/instances";
import { Link, useLoaderData, useParams } from "react-router";
import { GET_SINGLE_POST_QUERY } from "@/graphql/queries/getSinglePost";

export async function loader({ request, params }: Route.LoaderArgs) {
  const cookies = new Cookies(request.headers.get("cookie"));
  const token = cookies.get(ACCESS_TOKEN_KEY);

  try {
    const { data } = await apolloClient.query({
      query: GET_SINGLE_POST_QUERY,
      context: { headers: { Authorization: token ? `Bearer ${token}` : "" } },
      variables: { id: params.id },
      fetchPolicy: 'no-cache',
    });

    return data;
  } catch (error) {
    if (error instanceof ApolloError) {
      // @ts-expect-error - TODO: Handle types later
      const status = error.cause?.status || 500;

      if (status === 404) {
        throw new NotFoundError();
      }
    }
  }
}

export default function SinglePostPage() {
  const params = useParams<{ id: string }>();
  const post = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const content = post?.post.fields.find((field) => field.key === "content")?.value || "";
  const slicedContent = content.slice(1, content.length - 1); // "Content" => Content

  const isLikedByCurrentUser = post?.post.reactions.some((reaction) => reaction.reacted);

  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <span className="text-sm font-medium">Yasin Silavi</span>
          <span className="w-1 h-1 bg-[#d9d9d9] rounded-sm"></span>
          <span className="text-xs text-secondary">{dayjs(post?.post.createdAt).fromNow()}</span>
        </div>

        <Link to={`/post/${params.id}`} className="text-xl font-bold mt-1 transition-colors hover:text-primary">
          {post?.post.title}
        </Link>

        <article
          dangerouslySetInnerHTML={{ __html: slicedContent }}
          className="prose prose-headings:text-white prose-strong:text-white prose-p:text-secondary prose-a:text-primary font-sans mt-4"
        />

        <Like
          postId={params.id!}
          likesCount={post?.post.reactionsCount}
          isLiked={isLikedByCurrentUser}
          className="mt-8"
        />
      </div>
    </MainLayout>
  );
}
