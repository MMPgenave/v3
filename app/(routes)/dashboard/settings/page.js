import { List, ListItem as Item } from "@/app/UI/components/base";
import { settings } from "@/app/lib/data/settings";
import Link from "next/link";

const Settings = () => {
  return (
    <List>
      {settings.main.map((item) => {
        if (item === "about torny town") {
          return (
            <Link key={item} href={`/dashboard/settings/about`}>
              <Item>{item}</Item>
            </Link>
          );
        }
        if (item === "help/Contact us") {
          return (
            <Link key={item} href={`/dashboard/settings/help-contact`}>
              <Item>{item}</Item>
            </Link>
          );
        }
        return (
          <Link key={item} href={`/dashboard/settings/${item}`}>
            <Item>{item}</Item>
          </Link>
        );
      })}
    </List>
  );
};

export default Settings;
