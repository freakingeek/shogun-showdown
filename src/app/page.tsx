import PostsList from "./components/PostsList";
import MainLayout from "@/components/layouts/Main";

export function meta() {
  return [
    { title: "Shogun Showdown Community" },
    {
      name: "description",
      content: `Shogun Showdown Community Portal: A place for warriors to unite, share strategies, and prepare for the ultimate battle.`,
    },
  ];
}

export default function HomePage() {
  return (
    <MainLayout>
      <PostsList />
    </MainLayout>
  );
}
