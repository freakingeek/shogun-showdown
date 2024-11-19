import Post from "@/components/Post";
import Button from "@/components/Button";
import { useQuery } from "@apollo/client";
import MainLayout from "@/components/layouts/Main";
import { GET_POSTS_LIST_QUERY } from "@/graphql/queries/getPostsList";

const POSTS_PER_REQUEST = 5;

export default function HomePage() {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS_LIST_QUERY, {
    variables: { limit: POSTS_PER_REQUEST, offset: 0 },
  });

  const posts = data?.posts.nodes || [];
  const totalCount = data?.posts.totalCount || 0;

  const fetchMoreData = () => {
    fetchMore({
      variables: { offset: data?.posts.nodes.length || POSTS_PER_REQUEST },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.posts.nodes = [...prevResult.posts.nodes, ...fetchMoreResult.posts.nodes];

        return fetchMoreResult;
      },
    });
  };

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

  return (
    <MainLayout>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.createdAt}
          description={post.description}
          author={post.owner.member.name}
          likesCount={post.reactionsCount}
          hasMoreContent={post.hasMoreContent}
        />
      ))}

      {posts.length < totalCount && (
        <>
          <div className="w-full h-40 bg-gradient-to-b from-black/0 via-black/95 via-50% to-black relative z-10 !-mt-40" />

          <Button variant="secondary" className="w-full" onClick={fetchMoreData}>
            Load more
          </Button>
        </>
      )}
    </MainLayout>
  );
}
