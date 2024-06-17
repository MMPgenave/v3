import { Tab } from "./tab";

export const Tabs = ({ tabs }) => {
  return (
    <nav className="flex justify-evenly pt-2">
      {tabs.map((tab, index) => (
        <Tab key={index} tab={tab}>
          {tab}
        </Tab>
      ))}
    </nav>
  );
};
