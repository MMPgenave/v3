import { Section, Tabs } from "@/app/UI/layout";

const Layout = ({ children }) => {
  const tabs = ["games", "chatrooms"];
  return (
    <Section className=" max-sm:mt-[164px] mt-[112px] max-sm:pb-[70px]">
      <Tabs tabs={tabs} tab="games" />
      {children}
    </Section>
  );
};

export default Layout;
