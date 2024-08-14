"use client";
import * as Yup from "yup";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Input } from "../inputs";
import { usePathname } from "next/navigation";
export const UserName = ({ username, changeUsernameAction }) => {
  const [active, setActive] = useState(false);
  const path = usePathname();
  const handleSetActive = () => {
    setActive(true);
  };
  const handleSaveName = async (val) => {
    setActive(false);
    await changeUsernameAction(val.username);
  };

  const NameSchema = Yup.object().shape({
    username: Yup.string().required("Required").min(3, "Too Short!").max(25, "Too Long!"),
  });
  return (
    <>
      {active ? (
        <Formik
          initialValues={{
            username: "",
          }}
          onSubmit={async (values) => {
            // Submit the form values
            handleSaveName(values);
          }}
          validationSchema={NameSchema}
        >
          {({ errors, touched }) => {
            const props = {
              name: "username",
              key: "username",
              component: Input,
              placeholder: "Edit Your username",
              error: errors["username"],
              touched: touched["username"],
              type: "text",
              icon: "bi-chat-left-heart",
              className: "w-full h-[44px]",
            };

            return (
              <Form className="absolute text-dim-gray -left-24 top-[90px] w-80 p-4 items-center gap-2">
                <Field {...props} />
                <button type="submit">
                  <i className="absolute top-4 right-4 text-5xl text-success cursor-pointer hover:text-green bi bi-check"></i>
                </button>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <div className="absolute max-sm:ml-4 py-4 lowercase flex items-center gap-1 font-bold text-dark-slate-blue">
          <div className="w-full text-2xl capitalize flex justify-between items-center">
            <span>{username}</span>
            <i
              onClick={handleSetActive}
              className="bi bi-pencil-fill rounded-full flex items-center text-blue-violet p-2 cursor-pointer text-sm"
            ></i>
          </div>
        </div>
      )}
    </>
  );
};
