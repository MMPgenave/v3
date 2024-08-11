import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { routes } from "./lib/config/routes";
export default async function Home() {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  return <main>{session ? redirect(routes.HOME.FEED) : redirect(routes.AUTH)}</main>;
}
