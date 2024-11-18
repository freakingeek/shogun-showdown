import { Link } from "react-router-dom";

type PostProps = {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
};

export default function Post({
  id,
  title,
  author,
  date,
  description,
}: PostProps) {
  const postUrl = `/post/${id}`;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <span className="text-sm font-medium">{author}</span>
        <span className="w-1 h-1 bg-white rounded-sm"></span>
        <span className="text-xs">{date}</span>
      </div>

      <Link
        to={postUrl}
        className="text-xl font-bold mt-1 transition-colors hover:text-primary"
      >
        {title}
      </Link>

      <p className="font-sans mt-4">{description}</p>

      <Link to={postUrl} className="text-primary mt-8">
        Read more
      </Link>
    </div>
  );
}
