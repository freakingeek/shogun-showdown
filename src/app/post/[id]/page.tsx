import dayjs from "dayjs";
import Like from "@/components/Like";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import MainLayout from "@/components/layouts/Main";
import { NotFoundError } from "@/lib/exceptions/instances";
import { GET_SINGLE_POST_QUERY } from "@/graphql/queries/getSinglePost";

export default function SinglePostPage() {
  const params = useParams<{ id: string }>();
  const { data, loading, error } = useQuery(GET_SINGLE_POST_QUERY, { variables: { id: params.id! } });

  if (loading) {
    return (
      <MainLayout>
        <span>Loading ...</span>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <span>{error?.message || "Something bad happened!"}</span>
      </MainLayout>
    );
  }

  if (!loading && !data) {
    throw new NotFoundError();
  }

  const content = data?.post.fields.find((field) => field.key === "content")?.value || "";
  const slicedContent = content.slice(1, content.length - 1); // "Content" => Content

  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <span className="text-sm font-medium">Yasin Silavi</span>
          <span className="w-1 h-1 bg-[#d9d9d9] rounded-sm"></span>
          <span className="text-xs text-secondary">{dayjs(data?.post.createdAt).fromNow()}</span>
        </div>

        <Link to={`/post/${params.id}`} className="text-xl font-bold mt-1 transition-colors hover:text-primary">
          {data?.post.title}
        </Link>

        <article
          dangerouslySetInnerHTML={{ __html: slicedContent }}
          className="prose prose-headings:text-white prose-strong:text-white prose-p:text-secondary prose-a:text-primary font-sans mt-4"
        />

        <Like likesCount={data?.post.reactionsCount} isLiked={data?.post.reactions.reacted} className="mt-8" />
      </div>
    </MainLayout>
  );
}
