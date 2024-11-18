import classNames from "classnames";
import Icon from "@/components/Icon";

type LikeProps = {
  className?: string;
  isLiked?: boolean;
  likeCounts?: number;
};

export default function Like({
  likeCounts = 0,
  isLiked = false,
  className,
}: LikeProps) {
  return (
    <div className={classNames("flex gap-x-3 items-center", className)}>
      <Icon
        name="like"
        className={classNames("cursor-pointer", { sepia: !isLiked })}
      />
      <span>{likeCounts}</span>
    </div>
  );
}
