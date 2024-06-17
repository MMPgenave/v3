import { Button } from "../../components/base";

export const ShopItemsContainer = ({ children, title, total }) => {
  return (
    <div className="flex flex-col bg-lavender p-4 w-full shadow-md gap-4" style={{ 'background-color': '#000000', color: 'white'  }}>
      <h2 className="uppercase">{title}</h2>
      <div className="grid grid-cols-2 gap-2">{children}</div>
      <Button mode="primary" outline size="sm">
        All {title}({total})
      </Button>
    </div>
  );
};
