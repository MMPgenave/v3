export const AddButton = ({ className }) => {
  return (
    <i
      className={`bi bi-plus text-lg cursor-pointer bg-blue-violet text-white rounded-full flex items-center  ${className}`}
    ></i>
  );
};

export const BannerAddButton = () => {
  return <AddButton className="p-1 absolute bottom-2 right-2 border-2" />;
};

export const AddImageButton = () => {
  return (
    <i className="absolute bi bi-camera2 bg-blue-violet rounded-full flex items-center p-2 text-white cursor-pointer bottom-0 -right-2 border-2 "></i>
  );
};
