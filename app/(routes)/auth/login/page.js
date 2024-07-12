import { BottomLink, ForgotPassword, FormImage } from "@/app/UI/components/base";
import { AuthForm, ConnectSocialAccounts } from "@/app/UI/components/widgets";
import { AuthSection } from "@/app/UI/layout";
import { routes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");

  const fields = [
    { name: "email", type: "email", placeholder: "Email", icon: "bi-envelope" },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      icon: "bi-key",
    },
  ];
  return session ? (
    redirect(routes.HOME.FEED)
  ) : (
    <AuthSection>
      <FormImage />
      <AuthForm
        fields={fields}
        heading="let's Login."
        subHeading=" Let us know your email, and your password"
        initialValues={{
          email: "",
          password: "",
        }}
        type="log in"
      >
        <ForgotPassword />
        <ConnectSocialAccounts />

        <BottomLink link={routes.REGISTER} linkText="sign up">
          <div className=" text-slate-100"> Create a new account?</div>
        </BottomLink>
      </AuthForm>
    </AuthSection>
  );
};

export default Login;
