import { Link } from "react-router-dom";

type PinnedPostsProps = {
  className?: string;
};

export default function PinnedPosts({ className }: PinnedPostsProps) {
  const pinnedPosts = [
    {
      id: "ETFAdOupTsWDvTS",
      title: `The Wanderer`,
      image: "/assets/images/characters/wanderer.png",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
    {
      id: "hjPlQSzD1IqYky8",
      title: `The Ronin`,
      image: "/assets/images/characters/ronin.png",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
  ];

  return (
    <div className={className}>
      <h2 className="py-2 px-4">Pinned Posts</h2>

      <div className="space-y-2 mt-2">
        {pinnedPosts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className="flex gap-x-2 bg-dark py-2 px-4 rounded-lg">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md shrink-0">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="w-40 truncate text-secondary">
              <h3 className="text-white">{post.title}</h3>
              <span className="text-xs">{post.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
