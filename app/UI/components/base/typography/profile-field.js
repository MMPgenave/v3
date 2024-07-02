"use client";
import * as Yup from "yup";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Input } from "../inputs";
import { toast } from "react-toastify";
import { Button } from "../buttons";
import "react-toastify/dist/ReactToastify.css";

export const ProfileField = ({ children, title, className }) => {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(true);
  };
  const handleSaveName = (val) => {
    setActive(false);
    toast(`${val} successfully edited`);
  };
  const NameSchema = Yup.object().shape({
    name: Yup.string().required("Required").min(3, "Too Short!").max(25, "Too Long!"),
  });
  const BioSchema = Yup.object().shape({
    bio: Yup.string().required("Required").min(3, "Too Short!").max(60, "Too Long!"),
  });

  return (
    <div
      className={`${className} flex flex-col w-full bg-black text-slate-100 ${
        title === "bio" ? "" : ""
      } flex text-shark p-4 bg-white shadow-md rounded-lg font-bold `}
    >
      <h2 className="capitalize font-bold text-blue-violet">{title}</h2>
      <div className="w-full flex justify-between items-center">
        {active ? (
          <Formik
            initialValues={{
              name: "",
              bio: "",
            }}
            onSubmit={async (values) => {
              // Submit the form values
              handleSaveName(Object.keys(values)[0]);
            }}
            validationSchema={title === "bio" ? BioSchema : NameSchema}
          >
            {({ isSubmitting, errors, touched }) => {
              const nameFieldProps = {
                name: "name",
                key: "name",
                component: Input,
                placeholder: "Edit Your name",
                error: errors["name"],
                touched: touched["name"],
                type: "text",
                icon: "bi-chat-left-heart-fill",
              };

              const bioFieldProps = {
                name: "bio",
                key: "bio",
                component: Input,
                placeholder: "Edit Your Bio",
                error: errors["bio"],
                touched: touched["bio"],
                type: "text",
                icon: "bi-chat-left-heart-fill",
              };
              const props = title === "name" ? { ...nameFieldProps } : { ...bioFieldProps };
              return (
                <Form className="relative w-full p-4 items-center gap-2">
                  <Field {...props} />
                  <button type="submit">
                    <i className="absolute top-4 right-4 text-5xl text-success cursor-pointer hover:text-green bi bi-check"></i>
                  </button>
                </Form>
              );
            }}
          </Formik>
        ) : (
          <div className="w-full flex justify-between items-center">
            <span>{children}</span>
            <i
              onClick={handleSetActive}
              className="bi bi-pencil-fill rounded-full flex items-center text-blue-violet p-2 cursor-pointer text-sm"
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};
