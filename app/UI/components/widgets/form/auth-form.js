"use client";

import { Formik, Form, Field } from "formik";
import { Button, Input, MainHeading, SubHeading } from "../../base";
import { toast } from "react-toastify";
import { LoginSchema, SignupSchema } from "@/app/lib/config/definitions";
import { signIn, signUp } from "@/app/actions";
import { routes } from "@/app/lib/config/routes";
import { useRouter } from "next/navigation";
import { checkUsername } from "@/app/actions/check-username";

export const AuthForm = ({ initialValues, fields, heading, subHeading, children, type }) => {
  const router = useRouter();
  async function handleLogin(values) {
    const res = await signIn(values);
    if (res.status === "error") {
      toast.error(res.message);
    } else if (res.status === "success") {
      toast.success(res.message);
      setTimeout(() => {
        router.push(routes.HOME.FEED);
      }, 3000);
    }
    return res;
  }

  async function handleRegister(values) {
    var usernameStatus = await checkUsername(values.username);
    if (usernameStatus == true) {
      const res = await signUp(values);
      if (res.status === "error") {
        toast.error(res.message);
      } else if (res.status === "success") {
        toast.success(res.message);
        setTimeout(() => {
          router.push(routes.LOGIN);
        }, 3000);
      }
      return res;
    } else {
      toast.error("Username is already taken");
    }
  }

  const handleSubmit = async (values, setSubmitting) => {
    if (type === "log in") {
      await handleLogin(values);
    } else if (type === "sign up") {
      await handleRegister(values);
    }
    setSubmitting(false);
  };

  const validate = async (values) => {
    const errors = {};
    // check if username is taken
    errors.username = await checkUsername(values.username);
    return errors;
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      validationSchema={type === "log in" ? LoginSchema : SignupSchema}
    >
      {({ isSubmitting, errors, touched }) => {
        return (
          <Form className="flex w-11/12 flex-col p-4 items-center gap-6 z-50 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-blackTheme lg:rounded-lg">
            <MainHeading style={"text-gold"}>{heading}</MainHeading>
            {/* <SubHeading className={"text-slate-400"}>{subHeading}</SubHeading> */}
            {fields.map((field) => (
              <Field
                name={field.name}
                key={field.name}
                component={Input}
                placeholder={field.placeholder}
                icon={field.icon}
                error={errors[field.name]}
                touched={touched[field.name]}
                type={field.type}
              />
            ))}
            {children}
            <Button mode="gold" additionalStyles="w-full text-slate-700 " isLoading={isSubmitting} type="submit">
              {type}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
