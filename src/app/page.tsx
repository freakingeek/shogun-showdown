import PostsList from "./components/PostsList";
import MainLayout from "@/components/layouts/Main";

export default function HomePage() {
  return (
    <MainLayout>
      <PostsList />
    </MainLayout>
  );
}
