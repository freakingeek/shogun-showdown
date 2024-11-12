import classNames from "classnames";

type PinnedPostsProps = {
  className?: string;
};

export default function PinnedPosts({ className }: PinnedPostsProps) {
  return (
    <div className={classNames("", className)}>
      <h2 className="py-2 px-4">Pinned Posts</h2>
    </div>
  );
}
