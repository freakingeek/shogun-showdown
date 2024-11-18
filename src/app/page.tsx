import Post from "@/components/Post";
import Button from "@/components/Button";
import MainLayout from "@/components/layouts/Main";

export default function HomePage() {
  const posts = [
    {
      id: 0,
      title: `New Maps are just added to the game! Let’s see the mysteries they brought to us!`,
      author: "Yasin Silavi",
      date: "10 Days ago",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
    {
      id: 1,
      title: `New Maps are just added to the game! Let’s see the mysteries they brought to us!`,
      author: "Yasin Silavi",
      date: "10 Days ago",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
    {
      id: 2,
      title: `New Maps are just added to the game! Let’s see the mysteries they brought to us!`,
      author: "Yasin Silavi",
      date: "10 Days ago",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
    {
      id: 3,
      title: `New Maps are just added to the game! Let’s see the mysteries they brought to us!`,
      author: "Yasin Silavi",
      date: "10 Days ago",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
    {
      id: 4,
      title: `New Maps are just added to the game! Let’s see the mysteries they brought to us!`,
      author: "Yasin Silavi",
      date: "10 Days ago",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
    {
      id: 5,
      title: `New Maps are just added to the game! Let’s see the mysteries they brought to us!`,
      author: "Yasin Silavi",
      date: "10 Days ago",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
    {
      id: 6,
      title: `New Maps are just added to the game! Let’s see the mysteries they brought to us!`,
      author: "Yasin Silavi",
      date: "10 Days ago",
      description: `This file contains additional information, probably added from the digital camera or scanner used to create or digitize it. If the file has been modified from its original state, some details may not fully reflect the modified file.`,
    },
  ];

  return (
    <MainLayout>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}

      <div className="w-full h-40 bg-gradient-to-b from-black/0 via-black/95 via-50% to-black relative z-10 !-mt-40" />

      <Button variant="secondary" className="w-full">
        Load more
      </Button>
    </MainLayout>
  );
}
