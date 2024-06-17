export const ShopSection = ({ children }) => {
  return (
    <section style={{ 'background-color': '#000000',color: 'white','border-radius': '5%' }} className="flex flex-col items-center bg-white gap-6 mb-20">
      {children}
    </section>
  );
};
