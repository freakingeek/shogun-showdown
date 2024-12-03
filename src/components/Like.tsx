import { useState } from "react";
import classNames from "classnames";
import Icon from "@/components/Icon";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client/index.js";
import { useAuthContext } from "@/providers/AuthProvider";
import { ADD_REACTION_MUTATION } from "@/graphql/mutations/addReaction";
import { REMOVE_REACTION_MUTATION } from "@/graphql/mutations/removeReaction";

const reaction = "heart";

type LikeProps = {
  postId: string;
  isLiked?: boolean;
  className?: string;
  likesCount?: number;
};

export default function Like({ postId, likesCount = 0, isLiked = false, className }: LikeProps) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

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

  const onLikeButtonClicked = () => {
    if (!isLoggedIn) {
      return navigate("/accounts/login");
    }

    const action = localIsLiked ? dislike : like;
    action();
  };

  return (
    <div role="button" className={classNames("flex gap-x-3 items-center", className)} onClick={onLikeButtonClicked}>
      <Icon name="like" className={classNames("cursor-pointer", { sepia: !localIsLiked })} />
      <span>{localLikesCount}</span>
    </div>
  );
}
