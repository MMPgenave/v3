import { GamePageHeader as Header, HeaderNav, Tabs } from "@/app/UI/layout";
import { routes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = ({ children }) => {
  const tabs = ["games", "leaderboard", "how to play"];
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  return session ? (
    <section>
      {/* the header has a heart shaped button to add games to favorites */}
      <HeaderNav heart />
      <Header />
      <Tabs tabs={tabs} tab="games" />
      {children}
    </section>
  ) : (
    redirect(routes.AUTH)
  );
};

export default Layout;
