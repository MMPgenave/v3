import { BottomMenu, TopNav } from "@/app/UI/layout";
import { routes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const Layout = ({ children }) => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  return session ? (
    <div className="h-full">
      <TopNav />
      {children}
      <BottomMenu />
    </div>
  ) : (
    redirect(routes.AUTH)
  );
};

export default Layout;
