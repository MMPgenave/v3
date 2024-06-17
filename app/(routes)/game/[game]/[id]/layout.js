import { GameHeader } from "@/app/UI/layout";
import { routes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

const Layout = ({ children }) => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  let textareaValue;
  return session ? (
    <section className="h-screen bg-[#493021] flex flex-col justify-center">
      <GameHeader />
      <div className="w-full " style={{ margin: 'auto' }}>{children}</div>
        <div className="bg-secondary " style={{ display:'flex' }}>
            <textarea
                style={{width:'90%'}}
                value={textareaValue}
                maxLength="200"
                className="txta"
                autoFocus
                placeholder="Message"
            ></textarea>
            <button
                type="button"
                disabled={!textareaValue}
            >
                <Image
                    src={`${textareaValue ? "/icons/telegram-send-active.svg" : "/icons/telegram-send.svg"}`}
                    width={30}
                    height={30}
                    alt="send"
                />
            </button>
        </div>
    </section>
  ) : (
      redirect(routes.AUTH)
  );
};

export default Layout;
