import dayjs from "dayjs";
import { Link } from "react-router";
import Like from "@/components/Like";
import classNames from "classnames";

type PostProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  isLiked: boolean;
  likesCount: number;
  className?: string;
  description: string;
};

export default function Post({ id, title, author, date, isLiked, likesCount, description, className }: PostProps) {
  const postUrl = `/post/${id}`;

  return (
    <div className={classNames("flex flex-col", className)}>
      <Link to={postUrl} className="group">
        <div className="flex items-center gap-x-2">
          <span className="text-sm font-medium">{author}</span>
          <span className="w-1 h-1 bg-[#d9d9d9] rounded-sm"></span>
          <span className="text-xs text-secondary">{dayjs(date).fromNow()}</span>
        </div>

        <div className="text-2xl font-bold mt-1 transition-colors group-hover:text-primary">{title}</div>

        <p className="font-sans text-secondary max-xl:text-sm mt-1">{description}</p>
      </Link>

      <Like postId={id} likesCount={likesCount} isLiked={isLiked} className="mt-4" />
    </div>
  );
}
