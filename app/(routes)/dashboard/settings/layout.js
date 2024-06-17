import { HeaderNav } from "@/app/UI/layout";
import { routes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  return session ? (
    <section>
      <HeaderNav session={session} />
      {children}
    </section>
  ) : (
    redirect(routes.AUTH)
  );
};

export default Layout;
