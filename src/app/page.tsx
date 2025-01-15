import Link from "next/link";

import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import SideNav from "./_components/SideNav";
import MainPage from "./_components/MainPage";

export default async function Home() {
  const session = await auth();

  return (
    <main className="container">
      <div className="flex gap-3">
        <SideNav />
        <MainPage />
      </div>
    </main>
  );
}
