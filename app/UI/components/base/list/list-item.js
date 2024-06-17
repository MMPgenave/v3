export const ListItem = ({ children }) => {
  return (
    <li className="w-full border border-secondary cursor-pointer hover:bg-secondary transition-all capitalize p-4 ">
     {children}
    </li>
  );
};
