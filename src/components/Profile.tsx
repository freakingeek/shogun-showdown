import classNames from "classnames";
import { useQuery } from "@apollo/client/index.js";
import { GET_CURRENT_USER_QUERY } from "@/graphql/queries/getCurrentUser";

export default function Profile() {
  const { data } = useQuery(GET_CURRENT_USER_QUERY);

  return (
    <div className="flex gap-x-2 bg-dark py-2 px-4 rounded-lg">
      <div
        className={classNames("w-12 h-12 flex items-center justify-center rounded-md shrink-0", {
          "bg-white": !data?.authMember.profilePicture?.url,
        })}
      >
        <img
          src={data?.authMember.profilePicture?.url || "/assets/images/profile.png"}
          alt={`Avatar of ${data?.authMember.name}`}
          className="rounded-md"
        />
      </div>

      <div className="w-40 truncate text-secondary">
        <h3 className="text-white">{data?.authMember.name}</h3>
        <span className="text-xs">{data?.authMember.email}</span>
      </div>
    </div>
  );
}
