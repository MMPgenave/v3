import { List, ListItem as Item } from "@/app/UI/components/base";
import { settings } from "@/app/lib/data/settings";
import Link from "next/link";
// only for redoplyment
const HelpContact = () => {
  return (
    <List>
      {settings.helpContact.map((item) => (
        <Link className="w-full " href={`/settings/${item}`} key={item}>
          <Item>{item}</Item>
        </Link>
      ))}
    </List>
  );
};

export default HelpContact;
