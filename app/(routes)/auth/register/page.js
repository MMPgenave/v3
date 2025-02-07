import { BottomLink, FormImage } from "@/app/UI/components/base";
import { AuthForm, ConnectSocialAccounts } from "@/app/UI/components/widgets";
import { AuthSection as Section } from "@/app/UI/layout";
import { routes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";
import "react-toastify/dist/ReactToastify.css";
const fields = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
    icon: "bi-person",
  },
  { name: "email", type: "text", placeholder: "Email", icon: "bi-envelope" },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: "bi-key",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    icon: "bi-key",
  },
  // {
  //   name: "referralID",
  //   type: "text",
  //   placeholder: "ReferralID",
  //   icon: "bi-person-workspace ",
  // },
];
const SignUp = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");

  return session ? (
    redirect(routes.HOME.FEED)
  ) : (
    <Section>
      <FormImage />
      <AuthForm
        fields={fields}
        heading="create an account"
        subHeading=""
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          // referralID: "",
        }}
        type="sign up"
      >
        <ConnectSocialAccounts />
        <BottomLink link={routes.LOGIN} linkText="sign in">
          <div className=" text-slate-100"> Already have an account?</div>
        </BottomLink>
      </AuthForm>
    </Section>
  );
};

export default SignUp;
