import { PropsWithChildren } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import PinnedPosts from "@/app/components/PinnedPosts";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <main className="flex gap-x-16 mt-10">
        <Sidebar className="basis-64" />

        <section className="flex-1 space-y-6 pb-40">{children}</section>

        <PinnedPosts className="basis-64" />
      </main>
    </>
  );
}
