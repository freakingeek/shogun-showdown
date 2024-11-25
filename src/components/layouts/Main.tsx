import { PropsWithChildren } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import PinnedPosts from "@/app/components/PinnedPosts";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <main className="flex gap-x-16 max-xl:flex-col px-6 xl:px-0 mt-10">
        <Sidebar className="bg-black py-4 px-6 xl:py-0 xl:px-0 xl:basis-64 max-xl:fixed max-xl:bottom-0 max-xl:left-0 max-xl:right-0 max-xl:z-20 max-xl:order-1 max-xl:border-t border-secondary" />

        <section className="flex-1 space-y-6 pb-40">{children}</section>

        <PinnedPosts className="basis-64 max-xl:hidden" />
      </main>
    </>
  );
}
