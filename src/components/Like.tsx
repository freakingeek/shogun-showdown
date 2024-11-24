import { useState } from "react";
import classNames from "classnames";
import Icon from "@/components/Icon";
import { useMutation } from "@apollo/client";
import { ADD_REACTION_MUTATION } from "@/graphql/mutations/addReaction";
import { REMOVE_REACTION_MUTATION } from "@/graphql/mutations/removeReaction";

type LikeProps = {
  postId: string;
  isLiked?: boolean;
  className?: string;
  likesCount?: number;
};

export default function Like({ postId, likesCount = 0, isLiked = false, className }: LikeProps) {
  const reaction = "heart";

  const [localLikesCount, setLocalLikesCount] = useState(likesCount);
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);

  const [like] = useMutation(ADD_REACTION_MUTATION, {
    variables: { input: { reaction, overrideSingleChoiceReactions: false }, postId },
    onCompleted: ({ addReaction }) => {
      if (addReaction.status === "succeeded") {
        setLocalIsLiked(true);
        setLocalLikesCount((prevState) => prevState + 1);
      }
    },
  });

  const [dislike] = useMutation(REMOVE_REACTION_MUTATION, {
    variables: { postId, reaction },
    onCompleted: ({ removeReaction }) => {
      if (removeReaction.status === "succeeded") {
        setLocalIsLiked(false);
        setLocalLikesCount((prevState) => prevState - 1);
      }
    },
  });

  return (
    <div
      role="button"
      className={classNames("flex gap-x-3 items-center", className)}
      onClick={() => (localIsLiked ? dislike() : like())}
    >
      <Icon name="like" className={classNames("cursor-pointer", { sepia: !localIsLiked })} />
      <span>{localLikesCount}</span>
    </div>
  );
}
