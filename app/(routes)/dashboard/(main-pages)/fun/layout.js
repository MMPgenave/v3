import { Section, Tabs } from "@/app/UI/layout";

const Layout = ({ children }) => {
  const tabs = ["games", "chatrooms"];
  return (
    <Section>
      <Tabs tabs={tabs} tab="games" />
      {children}
    </Section>
  );
};

export default Layout;
