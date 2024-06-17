import clsx from "clsx";

export const Input = ({
  field,
  form: { touched, errors },
  placeholder,
  required,
  icon,
  type,
  className,
}) => {
  const styles = clsx(
    "p-3 ps-16 outline-none rounded-lg w-full autofill:shadow-[inset_0_0_0px_200px_rgb(255,255,255)]",
    touched[field.name]
      ? errors[field.name]
        ? "border border-pink-600"
        : "border border-success"
      : "border border-dim-gray"
  );
  return (
    <div className="relative w-full">
      {icon && (
        <i
          className={`bi absolute ${icon} text-3xl top-2 left-6 ${
            touched[field.name]
              ? errors[field.name]
                ? "text-pink-600"
                : "text-success"
              : "text-slate-600 "
          }`}
        ></i>
      )}
      <input
        {...field}
        value={field.value[field.name]}
        // onChange={validateField(field.name)}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`${styles} ${className}`}
      />
      {touched[field.name] && errors[field.name] && (
        <span className="text-pink-600 text-sm ps-4 font-bold ">
          {errors[field.name]}
        </span>
      )}
    </div>
  );
};
