import { Button, Logo, MainHeading, GetStartedSubHeading as SubHeading } from "@/app/UI/components/base";
import Link from "next/link";
import { routes } from "@/app/lib/config/routes";
import { ButtonContainer, HeadingContainer, GetStartedSection as Section } from "@/app/UI/layout";
import { ConnectSocialAccounts } from "@/app/UI/components/widgets";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const Auth = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  return session ? (
    redirect(routes.HOME.FEED)
  ) : (
    <Section>
      <Logo />
      <HeadingContainer>
        <MainHeading style={" text-slate-200"}>let&apos;s get started</MainHeading>
        <SubHeading>Login to your account below or signup for an amazing experience</SubHeading>
      </HeadingContainer>
      <ButtonContainer>
        <Link href={routes.LOGIN} className="w-full ">
          <Button mode="gold" additionalStyles="w-full">
            <div className=" text-slate-600"> Have an Account? Login</div>
          </Button>
        </Link>
        <Link href={routes.REGISTER} className="w-full">
          <Button mode="gold" outline additionalStyles="w-full">
            <div className=" !text-slate-200"> Create an account</div>
          </Button>
        </Link>
      </ButtonContainer>
      <ConnectSocialAccounts />
    </Section>
  );
};

export default Auth;
