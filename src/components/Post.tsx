import dayjs from "dayjs";
import { Link } from "react-router";
import Like from "@/components/Like";

type PostProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  isLiked: boolean;
  likesCount: number;
  description: string;
  hasMoreContent: boolean;
};

export default function Post({ id, title, author, date, isLiked, likesCount, description, hasMoreContent }: PostProps) {
  const postUrl = `/post/${id}`;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <span className="text-sm font-medium">{author}</span>
        <span className="w-1 h-1 bg-[#d9d9d9] rounded-sm"></span>
        <span className="text-xs text-secondary">{dayjs(date).fromNow()}</span>
      </div>

      <Link to={postUrl} className="text-xl font-bold mt-1 transition-colors hover:text-primary">
        {title}
      </Link>

      <p className="font-sans max-xl:text-sm mt-4">{description}</p>

      <Like postId={id} likesCount={likesCount} isLiked={isLiked} className="mt-6" />

      {hasMoreContent && (
        <Link to={postUrl} className="text-primary mt-8">
          Read more
        </Link>
      )}
    </div>
  );
}
