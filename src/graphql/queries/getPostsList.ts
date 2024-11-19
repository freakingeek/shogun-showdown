import { gql, TypedDocumentNode } from "@apollo/client";

type Node = {
  id: string;
  slug: string;
  reactionsCount: number;
  hasMoreContent: boolean;
  shortContent: string | null;
  createdAt: string;
  title: string;
  description: string;
  thumbnail: Image | null;
  owner: {
    member: {
      name: string;
      username: string;
    };
  };
};

type Image = {
  url: string;
  width: string | null;
  height: string | null;
};

type GetPostsListData = {
  posts: {
    totalCount: number;
    nodes: Node[];
  };
};

type GetPostsListVariables = {
  limit: number;
  offset: number;
};

export const GET_POSTS_LIST_QUERY: TypedDocumentNode<GetPostsListData, GetPostsListVariables> = gql`
  query GetPostsList($limit: Int!, $offset: Int) {
    posts(limit: $limit, offset: $offset) {
      totalCount
      nodes {
        id
        slug
        reactionsCount
        hasMoreContent
        shortContent
        title
        createdAt
        description
        thumbnail {
          ... on Image {
            url
            width
            height
          }
        }
        owner {
          member {
            name
          }
        }
      }
    }
  }
`;
